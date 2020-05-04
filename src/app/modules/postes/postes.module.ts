import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// modules ...
import { PostesRoutingModule } from './postes-routing.module';
import { MarkdownModule } from 'ngx-markdown';


// components ...
import { PostesComponent } from './components/postes/postes.component';
import { PosteComponent } from './components/poste/poste.component';



@NgModule({
  declarations: [PostesComponent, PosteComponent],
  imports: [
    CommonModule,
    PostesRoutingModule,
    // MarkdownModule.forChild({ loader: HttpClient })
    MarkdownModule.forChild()
  ]
})
export class PostesModule { }
