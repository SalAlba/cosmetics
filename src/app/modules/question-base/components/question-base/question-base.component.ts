import {Component, OnInit, ViewChild} from '@angular/core';
import {Category, Group, Question, QuestionFilter} from '../../../../shared/models/q.model';
import {TagModelClass} from 'ngx-chips/core/accessor';
import {QuestionBaseService} from '@shared/providers/question-base/question-base.service';
import {EditorOption} from 'angular-markdown-editor';
import {MarkdownService} from 'ngx-markdown';
import {NgForm} from '@angular/forms';
import {getLevelClassIfCheckLvlEqualsSelectedLvl, getLevelIfCheckLvlIsNotSelectedLvl, validateTags} from '../../../../shared/utils/utils';
import {ActivatedRoute} from '@angular/router';
import {of, Subject} from 'rxjs';
import {debounceTime, delay, distinctUntilChanged, flatMap, map} from 'rxjs/operators';

@Component({
  selector: 'app-question-base',
  templateUrl: './question-base.component.html',
  styleUrls: ['./question-base.component.scss']
})
export class QuestionBaseComponent implements OnInit {
  selectedGroup: Group;  /*** ! ***/
  selectedLevel: string;  /*** ! ***/
  selectedCategory: Category;  /*** ! ***/
  selectedTags: TagModelClass[];  /*** ! ***/
  questions: Question[];
  newQuestion: Question;
  editorOptions: EditorOption;
  addDescriptionFlag = false;
  searchedText: string;
  keyUp = new Subject<any>();
  @ViewChild('form', {static: false})
  form: NgForm;

  constructor(private qbService: QuestionBaseService, private markdownService: MarkdownService) {
    // this.addNew(null); // todo for debug
    console.log('[Q-Base] constructor');
    qbService.getSelectedGroupSubject().subscribe(group => {
      this.selectedGroup = group;
      this.selectedLevel = null;
    });
    qbService.getSelectedCategorySubject().subscribe(category => {
      this.selectedCategory = category;
    });
    qbService.getSelectedTagsSubject().subscribe(tags => this.selectedTags = tags);
  }

  ngOnInit() {
    this.editorOptions = {
      autofocus: true,
      iconlibrary: 'fa',
      savable: false,
      parser: (val) => this.parse(val)
    };
    this.keyUp
      .pipe(
        map(value => (event.target as HTMLInputElement).value),
        debounceTime(300),
        distinctUntilChanged(),
        flatMap(search => {
          return of(search).pipe(delay(300));
        })
      )
      .subscribe(data => {
        console.log('search:', data);
        this.searchedText = data;
      });
  }

  getQuestions(filter: QuestionFilter) {
    // this.qbService.getQuestionsByCategory(this.selectedCategory._id).subscribe(questions => this.questions = questions);
    this.qbService.getQuestionsByFilter(filter).subscribe(questions => this.questions = questions);
  }

  /** add new question block */
  addNew() {
    this.newQuestion = new Question();
    this.newQuestion.level = this.selectedLevel;
    this.newQuestion._tags = this.selectedTags;
  }

  getLevelsColor(checkLVL: string) {
    return getLevelClassIfCheckLvlEqualsSelectedLvl(checkLVL, this.newQuestion?.level, this.selectedGroup.levels);
  }

  setLevelForNewQuestion(lvl: string) {
    this.newQuestion.level = getLevelIfCheckLvlIsNotSelectedLvl(lvl, this.newQuestion.level, this.selectedGroup.levels);
  }

  sendQuestion(ngForm: NgForm) {
    console.log(ngForm);
    this.newQuestion.title = ngForm.form.value.newTitle;
    this.newQuestion.description = ngForm.form.value.newDescription;
    this.newQuestion._tags = validateTags(ngForm.form.value.newTags);
    if (!this.newQuestion.level) {
      this.newQuestion.level = this.selectedGroup.levels[0];
    }
    this.newQuestion.categoryId = this.selectedCategory._id;
    this.qbService.sendQuestion(this.newQuestion).subscribe(res => console.log(res));
    ngForm.reset();
    this.newQuestion = null;
  }

  /** highlight all code found, needs to be wrapped in timer to work properly */
  highlight() {
    setTimeout(() => {
      this.markdownService.highlight();
    });
  }

  /** parser for angular-markdown-editor */
  parse(inputValue: string) {
    const markedOutput = this.markdownService.compile(inputValue.trim());
    this.highlight();
    return markedOutput;
  }

  /** other */
  print(event: any) {
    console.log('***LOG***');
    console.log(event);
    console.log(JSON.stringify(event));
    console.log('*********');
  }
}
