import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


// services ...
import { PostesService } from '@shared/providers/postes/postes.service';

// models ...
import { Post } from '../../../../shared/models/post.model';
import { Title, Meta } from '@angular/platform-browser';
import { DESCRITPTION } from '../../../../shared/mock/mock-desc';


@Component({
  selector: 'app-postes',
  templateUrl: './postes.component.html',
  styleUrls: ['./postes.component.css']
})
export class PostesComponent implements OnInit {

  POSTES_BASIC_URL = '/postes';
  postes: Observable<Post[]>;


  constructor(
    private postesService: PostesService,
    private router: Router,
    private title: Title,
    private meta: Meta
  ) { }

  ngOnInit() {
    this.postes = this.postesService.get_all_postes();
    this.postesService.get_all_postes().subscribe(d => console.log(d));
    this.title.setTitle('List of all postes');
    this.meta.addTag({
      name: 'description',
      content: DESCRITPTION
      // content: d.description
    });
  }


  public show(post: Post) {
    console.log('SELECTED POST : ', post);
    this.postesService.set_selected_poste(post);
    this.router.navigate([this.POSTES_BASIC_URL, post.link]);
    // return [this.POSTES_BASIC_URL, post.link]
  }

}
