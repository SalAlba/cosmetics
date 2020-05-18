import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient ,HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarkdownModule } from 'ngx-markdown';
// modules ...
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './modules/home/home.module';
import { BasketModule } from "./modules/basket/basket.module";
import { ProductsModule } from "./modules/products/products.module";
import { AppRoutingModule } from './app-routing.module';
// import {PostesModule} from './modules/postes/postes.module';
// import {QuestionBaseModule} from './modules/question-base/question-base.module';
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
    ProductsModule,
    BasketModule,
    // PostesModule,
    // QuestionBaseModule,
    AppRoutingModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
