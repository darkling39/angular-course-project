import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subscription, catchError, map, pipe, throwError } from 'rxjs';
import { Post } from './post.model';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css'],
})
export class HttpComponent {
  constructor(private http: HttpClient) {}
  title = '';
  content = '';
  loadedPosts: Post[] = [];
  isFetching = false;
  url = 'https://angular-http-dbd99-default-rtdb.firebaseio.com/posts.json';
  error = ''
  errorHidden = false


  ngOnInit() {
    this.fetchPosts();
  }


  fetchPosts() {
    if(this.loadedPosts.length < 1){
      this.isFetching = false
    }else this.isFetching = true;
    this.http
      .get(this.url)
      .pipe(
        map((data) => {
          return Object.values(data);
        })
      )
      .subscribe((postData) => {
        this.isFetching = false;
        this.loadedPosts = postData;
      }, error => {
        // this.error = error.message 
        // this.errorHidden = false 
      })
  }


  deletePosts() {
    this.http.delete(this.url).subscribe(() => {
      this.loadedPosts = []
      this.isFetching = false
    }
    );
  } 


  onCreatePost(postData: Post) {
    if(postData.title != '' && postData.content != ''){
      this.http.post(this.url, postData).subscribe(() => {
        this.fetchPosts();
        this.title = ''
        this.content = ''
      })
    }
  }


  onFetchPosts() {
    this.fetchPosts();
  }

}
