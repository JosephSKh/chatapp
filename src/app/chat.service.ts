import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getMessages(): Observable<any> {
    const myParam = 123;
    const params = {postId: 1};
    return this.httpClient.get(`https://jsonplaceholder.typicode.com/comments/`, {params});
  }
}
