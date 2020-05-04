import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules ...
// import { MaterialModule } from "../../shared/modules/material.module";
import { CoreModule } from '../../core/core.module';
import { HomeRoutingModule } from './home-routing.module';

// components ...
import { HomeComponent } from './components/home/home.component';




@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    CoreModule,
    // MaterialModule,
    HomeRoutingModule
  ],
  exports: [
  ]
})
export class HomeModule { }
