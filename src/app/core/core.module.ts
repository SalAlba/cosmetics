import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PrivacyPloicyComponent } from "./privacy-ploicy/privacy-ploicy.component";

// modules ...


@NgModule({
  declarations: [FooterComponent, HeaderComponent, PageNotFoundComponent, PrivacyPloicyComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
