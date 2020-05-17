import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
// modules ...
import {AppRoutingModule} from './app-routing.module';
import {CoreModule} from './core/core.module';
import {HomeModule} from './modules/home/home.module';
import {PostesModule} from './modules/postes/postes.module';
import {BasketModule} from "./modules/basket/basket.module";
import {QuestionBaseModule} from './modules/question-base/question-base.module';
import {MarkdownModule} from 'ngx-markdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
// components ...
import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MarkdownModule.forRoot({loader: HttpClient}),
    CoreModule,
    SharedModule,
    HomeModule, // in angular page ex. no import !!!  https://stackblitz.com/angular/aqqyljyojye
    BasketModule,
    PostesModule,
    QuestionBaseModule,
    AppRoutingModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
