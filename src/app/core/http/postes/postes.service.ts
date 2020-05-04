import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Post } from '../../../shared/models/post.model';
import {environment} from '../../../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class PostesService {
  BASIC_URL = environment.api;
  MODEL = 'postes';

  private dataSource = new BehaviorSubject<Post>(null);
  selectedPost = this.dataSource.asObservable();

  constructor(private http: HttpClient) { }


  public get_all_postes(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.BASIC_URL}/${this.MODEL}`);
    // return Postes;
  }


  public get_poste(id: string): Observable<Post> {
    return this.http.get<Post>(`${this.BASIC_URL}/${this.MODEL}/${id}`);
    // return {};
  }


  public get_postes_by_link(link: string): Observable<Post> {
    return this.http.get<Post>(`${this.BASIC_URL}/${this.MODEL}/link/${link}`);
  }

  public set_selected_poste(post: Post) {
    console.log('SERVICES SHOW POST.');
    console.log(post);
    this.dataSource.next(post);
  }

}
