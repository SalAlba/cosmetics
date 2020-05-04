import {Component, OnInit} from '@angular/core';
import {faMinus, faPlus} from '@fortawesome/free-solid-svg-icons';
import {Answer, Group, Question, QuestionStatus} from '../../../../../shared/models/q.model';
import {FormBuilder} from '@angular/forms';
import {MarkdownService} from 'ngx-markdown';
import {EditorOption} from 'angular-markdown-editor';
import {ActivatedRoute} from '@angular/router';
import {QuestionBaseService} from '../../../../../core/http/question-base/question-base.service';
import {getLevelClass} from '../../../../../shared/utils/utils';
@Component({
  selector: 'app-question-view',
  templateUrl: './question-view.component.html',
  styleUrls: ['./question-view.component.scss']
})
export class QuestionViewComponent implements OnInit {
  faMinus = faMinus;
  faPlus = faPlus;
  question: Question;
  answers: Answer[];
  suggested: Question[];
  addAnswer = false;
  addComment = false;

  markdownText: string;
  editorOptions: EditorOption;

  selectedGroup: Group;

  constructor(private fb: FormBuilder, private markdownService: MarkdownService,
              private activatedRoute: ActivatedRoute, private qbService: QuestionBaseService) {
    qbService.getSelectedGroupSubject().subscribe(group => this.selectedGroup = group);
    this.answers = [];
  /*  this.question = {
      _id: '1',
      title: 'Lorem ipsum dolor sit amet?',
      level: 'junior',
      _tags: [{display: '#string', value: '#string'}, {display: '#java', value: '#java'}, {display: '#tag', value: '#tag'}],
      created: new Date(),
      lang: 'en',
      questionGroupId: '1',
      status: QuestionStatus.APPROVED,
      categoryId: null
    };*/
    this.suggested = [
      {
        _id: '2',
        title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        level: 'mid',
        _tags: [{display: '#tag', value: '#tag'}],
        created: new Date(),
        lang: 'en',
        questionGroupId: '2',
        status: QuestionStatus.APPROVED,
        categoryId: null,
      },
      {
        _id: '3',
        title: 'Test bootstrap accordion >>>',
        level: 'senior',
        _tags: [{display: '#tag', value: '#tag'}],
        created: new Date(),
        lang: 'en',
        questionGroupId: '3',
        status: QuestionStatus.APPROVED,
        categoryId: null,
      }
    ];
    this.activatedRoute.params.subscribe((params) => {
      console.log('params', params.id);
      this.qbService.getQuestionById(params.id).subscribe(q => {
        this.question = q;
      });
      this.qbService.getAnswerForQuestion(params.id).subscribe(answers => {
        this.answers = answers;
      });
    });
  }

  ngOnInit(): void {
    this.editorOptions = {
      autofocus: true,
      iconlibrary: 'fa',
      savable: false,
      parser: (val) => this.parse(val)
    };
    this.markdownText =
      `This is an **example** where we bind a variable to the \`markdown\` component that is also bind to the editor.
##### example.component.ts
\`\`\`javascript
function hello() {
  alert('Hello World');
}
\`\`\`
##### example.component.html
\`\`\`html
<textarea [(ngModel)]="markdown"></textarea>
<markdown [data]="markdown"></markdown>
\`\`\``;
  }

  /** highlight all code found, needs to be wrapped in timer to work properly */
  highlight() {
    setTimeout(() => {
      this.markdownService.highlight();
    });
  }

  parse(inputValue: string) {
    const markedOutput = this.markdownService.compile(inputValue.trim());
    this.highlight();

    return markedOutput;
  }

  getLevelsColor(level: string) {
    return getLevelClass(level, this.selectedGroup?.levels);
  }

  onAnswerSend() {
    const newAnswer = new Answer(this.question._id, this.markdownText);
    this.qbService.sendAnswer(newAnswer).subscribe(answ => {
      this.answers.push(answ);
    });
    this.markdownText = '';
    this.addAnswer = false;
  }

  alert() {
    alert('This function not work yet');
  }
}
