import {NgModule} from '@angular/core';
import {QuestionBaseComponent} from './components/question-base/question-base.component';
import {CommonModule} from '@angular/common';
import {QuestionBaseRoutingModule} from './question-base-routing.module';
import {MarkdownModule} from 'ngx-markdown';
import {TagInputModule} from 'ngx-chips';
import {FormsModule} from '@angular/forms';
import {QuestionViewComponent} from './components/question-base/question-view/question-view.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SharedModule} from '../../shared/shared.module';
import { QuestionSidebarComponent } from './components/question-base/question-sidebar/question-sidebar.component';


@NgModule({
  declarations: [QuestionBaseComponent, QuestionViewComponent, QuestionSidebarComponent],
  imports: [
    CommonModule,
    SharedModule,
    QuestionBaseRoutingModule,
    MarkdownModule.forChild(),
    TagInputModule,
    FormsModule,
    FontAwesomeModule
  ]
})
export class QuestionBaseModule {
}
