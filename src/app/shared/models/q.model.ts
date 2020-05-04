import {TagModelClass} from 'ngx-chips/core/accessor';

export enum QuestionStatus {
  AUTO = 'auto', OOREVIEW = 'onreview', APPROVED = 'approved'
}

export class Answer {
  _id?: string;
  questionId: string;
  text: string;
  created: Date;
  comments: string[];
  constructor(questionId: string, text: string) {
    this.questionId = questionId;
    this.text = text;
    this.created = null;
    this.comments = null;
  }
}

export interface QuestionFilter {
  title?: string;
  level?: string;
  tags?: string[];
  _tags?: TagModelClass[];
  categoryId: string;
  page_num: number;
  page_size: number;
}

export class Question {
  _id: string;
  title: string;
  description?: string;
  created: Date;
  level: string;
  tags?: string[];
  _tags?: TagModelClass[];
  status: QuestionStatus;
  questionGroupId: string;
  categoryId: string;
  autorId?: string;
  lang: string;
}

export class Category {
  _id: string;
  name: string;
}

export class Group {
  _id: string;
  name: string;
  levels: string[];
}
