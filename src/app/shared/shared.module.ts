import {NgModule} from '@angular/core';
import {QItemsComponent} from './components/q-item/q-items.component';
import {CommonModule} from '@angular/common';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {RouterModule} from '@angular/router';
import {AngularMarkdownEditorModule} from 'angular-markdown-editor';
import { BestsellerComponent } from './components/bestseller/bestseller.component';
import { SliderComponent } from './components/slider/slider.component';
// import { PrivacyPloicyComponent } from './components/privacy-ploicy/privacy-ploicy.component';

@NgModule({
  declarations: [SliderComponent, BestsellerComponent, QItemsComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    AngularMarkdownEditorModule.forRoot({ iconlibrary: 'fa' })
  ],
  providers: [],
  exports: [SliderComponent, BestsellerComponent, QItemsComponent, AngularMarkdownEditorModule]
})
export class SharedModule { }
