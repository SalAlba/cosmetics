import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Title, Meta } from '@angular/platform-browser';

// services ...
import { PostesService } from '../../../../core/http/postes/postes.service';

import { Post } from '../../../../shared/models/post.model';
import { DESCRITPTION } from '../../../../shared/mock/mock-desc';

@Component({
  selector: 'app-poste',
  templateUrl: './poste.component.html',
  styleUrls: ['./poste.component.css']
})
export class PosteComponent implements OnInit {

  post: Observable<Post>;

  constructor(
    private route: ActivatedRoute,
    private postesService: PostesService,
    private title: Title,
    private meta: Meta
  ) { }

  ngOnInit() {
    // this.route.params.subscribe(d => this.postesService.get_postes_by_link(d.link).subscribe(p => this.post = p));
    this.route.params.subscribe(d => this.post = this.postesService.get_postes_by_link(d.link));

    this.post.subscribe(d => {
      this.title.setTitle(d.title);
      this.meta.addTag({
        name: 'description',
        content: DESCRITPTION
        // content: d.description
      });
    });

  }

  showBasicPost(postType: any) {
    if (postType === 'markdown') {
      return true;
    }
    return false;
  }

  onLoad(e: any) {
    console.log(e);
  }

  onError(e: any) {
    console.log(e);
  }

}
