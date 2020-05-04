import {NgModule} from '@angular/core';
import {QItemsComponent} from './components/q-item/q-items.component';
import {CommonModule} from '@angular/common';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {RouterModule} from '@angular/router';
import {AngularMarkdownEditorModule} from 'angular-markdown-editor';
import { BestsellerComponent } from './components/bestseller/bestseller.component';

@NgModule({
  declarations: [BestsellerComponent, QItemsComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    AngularMarkdownEditorModule.forRoot({ iconlibrary: 'fa' })
  ],
  providers: [],
  exports: [BestsellerComponent, QItemsComponent, AngularMarkdownEditorModule]
})
export class SharedModule { }
