import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Category, Group, QuestionFilter} from '../../../../../shared/models/q.model';
import {TagModelClass} from 'ngx-chips/core/accessor';
import {QuestionBaseService} from '@shared/providers/question-base/question-base.service';
import {getLevelClassIfCheckLvlEqualsSelectedLvl, getLevelIfCheckLvlIsNotSelectedLvl} from '../../../../../shared/utils/utils';

@Component({
  selector: 'app-question-sidebar',
  templateUrl: './question-sidebar.component.html',
  styleUrls: ['./question-sidebar.component.scss']
})
export class QuestionSidebarComponent {
  groups: Group[];
  selectedGroup: Group;
  categories: Category[];
  selectedCategory: Category;
  selectedTags: TagModelClass[];  /*** ! ***/
    // selectedLevel: string; #delete
  filter: QuestionFilter;  /*** ! ***/
  @Input()
  set search(text: string) {
    this.filter.title = text;
    this.findQuestion.emit(this.filter);
  }

  @Output()
  addQuestionEvent: EventEmitter<void>;
  @Output()
  findQuestion: EventEmitter<any>;

  constructor(private qbService: QuestionBaseService) {
    console.log('[Sidebar] constructor');
    this.filter = {categoryId: null, page_num: 1, page_size: 20};
    this.addQuestionEvent = new EventEmitter<void>();
    this.findQuestion = new EventEmitter<any>();
    qbService.getGroupsSubject().subscribe(groups => {
      this.groups = groups;
      console.log('[Sidebar] get groups', groups);
      if (!this.selectedGroup && groups) { // todo for debug
        this.onSelectGroup(groups[0]);
      }
    });
    qbService.getSelectedGroupSubject().subscribe(group => {
      this.selectedGroup = group;
      qbService.setSelectedTags([{display: '#java', value: '#java'}, {display: '#tag', value: '#tag'}]); // todo for debug
    });
    qbService.getCategoriesSubject().subscribe(categories => {
      this.categories = categories;
      console.log('[Sidebar] get categories', categories);
      if (!this.selectedCategory && categories) { // todo for debug
        this.onSelectCategory(categories[1]);
      }
    });
    qbService.getSelectedCategorySubject().subscribe(category => {
      this.selectedCategory = category;
      console.log('[Sidebar] get selectedCategory', category);
      if (category) {
        this.filter.categoryId = category._id;
        this.findQuestion.emit(this.filter);
      }
    });
    qbService.getSelectedTagsSubject().subscribe(_tags => {
      this.selectedTags = _tags;
      console.log('[Sidebar] get selectedTags', _tags);
      if (_tags) {
        this.filter._tags = _tags;
        this.findQuestion.emit(this.filter);
      }
    });
    // qbService.getAllGroups().subscribe((groups) => {
    //   console.log('[Sidebar] groups', groups);
    // });
  }

  /** add question */
  onAddQuestion(event: MouseEvent) {
    this.addQuestionEvent.emit();
  }

  /** groups */
  onSelectGroup(group: Group) {
    this.qbService.setSelectedGroup(group);
    this.qbService.getCategoriesByGroup(group._id).subscribe(res => {
      console.log('[Sidebar] get categories', res);
    });
  }

  /** categories */
  onSelectCategory(category: Category) {
    this.qbService.setSelectedCategory(category);
  }

  getLevelsColor(checkLVL: string) {
    return getLevelClassIfCheckLvlEqualsSelectedLvl(checkLVL, this.filter.level, this.selectedGroup.levels);
  }
  /** levels */
  setLevel(lvl: string) {
    this.filter.level = getLevelIfCheckLvlIsNotSelectedLvl(lvl, this.filter.level, this.selectedGroup.levels);
    this.findQuestion.emit(this.filter);
  }

  /** tags */
  updateSelectedTags(newTags: TagModelClass[]) {
    newTags.forEach(t => {
      if (!t.value.startsWith('#')) {
        t.value = '#' + t.value;
        t.display = '#' + t.display;
      }
    });
    this.qbService.setSelectedTags(newTags);
  }
}
