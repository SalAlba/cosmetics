import {QuestionBaseComponent} from './components/question-base/question-base.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {QuestionViewComponent} from './components/question-base/question-view/question-view.component';

const routes: Routes = [
  {
    path: 'question-base',
    component: QuestionBaseComponent,
    children: [
      {
        path: ':id',
        component: QuestionViewComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionBaseRoutingModule {
}
