import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostesComponent } from './components/postes/postes.component';
import { PosteComponent } from './components/poste/poste.component';

const routes: Routes = [
  {
    path: 'postes',
    component: PostesComponent
  },
  {
    path: 'postes/:link',
    component: PosteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PostesRoutingModule { }
