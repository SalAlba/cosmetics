import {Component, Input, OnInit} from '@angular/core';
import {Question} from '../../models/q.model';
import {TagModelClass} from 'ngx-chips/core/accessor';
import {getLevelClass} from '../../utils/utils';

@Component({
  selector: 'app-q-items',
  templateUrl: './q-items.component.html',
  styleUrls: ['./q-items.component.scss']
})
export class QItemsComponent implements OnInit {

  @Input()
  levels: string[];
  @Input()
  selectedTags: TagModelClass[];
  @Input()
  questions: Question[];

  constructor() {
  }

  ngOnInit(): void {
  }

  getLevelsColor(level: string) {
    return getLevelClass(level, this.levels);
  }

  getTagClass(tag: TagModelClass) {
    return this.selectedTags && this.selectedTags.find(q => q.value === tag.value) ? 'badge-primary' : 'badge-secondary';
  }
}
