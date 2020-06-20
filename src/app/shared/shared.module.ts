import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { AngularMarkdownEditorModule } from 'angular-markdown-editor';
// import { FormsModule } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';

// modules ...
import { SharedRoutingModule } from "./shared-routing.module";

// pipe ...
import { BankaccountPipe } from './pipes/bankaccount.pipe';

// components ...
import { QItemsComponent } from './components/q-item/q-items.component';
import { SliderComponent } from './components/slider/slider.component';
import { BestsellerComponent } from './components/bestseller/bestseller.component';
import { PrivacyPolicyComponent } from "./components/privacy-policy/privacy-policy.component";


@NgModule({
  declarations: [PrivacyPolicyComponent, SliderComponent, BestsellerComponent, QItemsComponent, BankaccountPipe],
  imports: [
    CommonModule,
    // FormsModule,
    // ReactiveFormsModule,
    FontAwesomeModule,
    RouterModule,
    AngularMarkdownEditorModule.forRoot({ iconlibrary: 'fa' }),
    SharedRoutingModule
  ],
  providers: [],
  exports: [SliderComponent, BestsellerComponent, QItemsComponent, AngularMarkdownEditorModule, BankaccountPipe]
})
export class SharedModule { }
