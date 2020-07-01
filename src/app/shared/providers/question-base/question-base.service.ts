import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {Answer, Category, Group, Question, QuestionFilter} from '../../../shared/models/q.model';
import {map, tap} from 'rxjs/operators';
import {TagModelClass} from 'ngx-chips/core/accessor';

@Injectable({
  providedIn: 'root'
})
export class QuestionBaseService {
  BASIC_URL = environment.api;

  private _groups = new BehaviorSubject<Group[]>(null);
  private _selectedGroup = new BehaviorSubject<Group>(null);
  private _categories = new BehaviorSubject<Category[]>(null);
  private _selectedCategory = new BehaviorSubject<Category>(null);
  private _selectedTags = new BehaviorSubject<TagModelClass[]>(null);

  constructor(private http: HttpClient) {
    this.getAllGroups().subscribe((groups) => {
      console.log('[QB Service] groups', groups);
    });
  }

  /*** GETTERS AND SETTERS*/

  getGroupsSubject(): Observable<any> {
    return this._groups.asObservable();
  }

  private setGroups(groups: Group[]) {
    this._groups.next(groups);
  }

  getSelectedGroupSubject(): Observable<any> {
    return this._selectedGroup.asObservable();
  }

  setSelectedGroup(gr: Group) {
    this._selectedGroup.next(gr);
  }

  getCategoriesSubject(): Observable<any> {
    return this._categories.asObservable();
  }

  private setCategories(categories: Category[]) {
    this._categories.next(categories);
  }

  getSelectedCategorySubject(): Observable<any> {
    return this._selectedCategory.asObservable();
  }

  setSelectedCategory(cat: Category) {
    this._selectedCategory.next(cat);
  }

  getSelectedTagsSubject(): Observable<TagModelClass[]> {
    return this._selectedTags.asObservable();
  }

  setSelectedTags(tags: TagModelClass[]) {
    this._selectedTags.next(tags);
  }

  /*** HTTP METHODS */

  public getAllGroups(): Observable<Group[]> {
    return this.http.get<Group[]>(`${this.BASIC_URL}/groups`).pipe(
      tap((res) => this.setGroups(res)));
  }

  public getCategoriesByGroup(id: string): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.BASIC_URL}/category/group/${id}`).pipe(
      tap((res) => this.setCategories(res)));
  }

  public getQuestionById(id: string): Observable<Question> {
    return this.http.get<Question>(`${this.BASIC_URL}/questions/${id}`).pipe(map((q) => {
      q._tags = [];
      q.tags.forEach(tag => {
        q._tags.push({display: `#${tag}`, value: `#${tag}`});
      });
      return q;
    }));
  }

  public getQuestionsByCategory(id: string): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.BASIC_URL}/questions/category/${id}`).pipe(map(questions => {
      questions.forEach(q => {
        q._tags = [];
        q.tags.forEach(tag => {
          q._tags.push({display: `#${tag}`, value: `#${tag}`});
        });
      });
      return questions;
    }));
  }

  public getQuestionsByFilter(filter: QuestionFilter): Observable<Question[]> {
    filter.tags = [];
    if (filter._tags) {
      filter._tags.forEach((t) => {
        filter.tags.push(t.value.substring(1, t.value.lenght));
      });
    }
    return this.http.post<Question[]>(`${this.BASIC_URL}/questions/filter`, filter).pipe(map(questions => {
      questions.forEach(q => {
        q._tags = [];
        q.tags.forEach(tag => {
          q._tags.push({display: `#${tag}`, value: `#${tag}`});
        });
      });
      return questions;
    }));
  }

  public sendQuestion(question: Question): Observable<Question> {
    question.tags = [];
    question._tags.forEach((t) => {
      question.tags.push(t.value.substring(1, t.value.lenght));
    });
    return this.http.post<Question>(`${this.BASIC_URL}/questions/`, question);
  }

  public getAnswerForQuestion(id: string): Observable<Answer[]> {
    return this.http.get<Answer[]>(`${this.BASIC_URL}/answers/question/${id}`);
  }

  public sendAnswer(answer: Answer): Observable<Answer> {
    return this.http.post<Answer>(`${this.BASIC_URL}/answers/`, answer);
  }
}
