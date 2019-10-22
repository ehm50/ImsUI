import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Issue } from '../domain/issue';
import { CommentInfo } from '../domain/comment';
import { Comment } from '../domain/comment';
import { User } from '../domain/user';

@Injectable()
export class IssuesService {

    constructor(private http: HttpClient) { }

    public getAll(): Observable<Array<Issue>> {
      return this.http.get<Array<Issue>>('http://localhost:8082/ims-issues/resources/issues');
    }
 
    public get(id: number): Observable<any> {
      return this.http.get(`http://localhost:8082/ims-issues/resources/issues/${id}`);
    }
  
    public getComments(id: number): Observable<any> {
      return this.http.get(`http://localhost:8081/ims-comments/resources/comments/${id}`);
    }
  
    public addComment(id: number, comment: Comment) : Observable<any> {
      return this.http.post(`http://localhost:8081/ims-comments/resources/comments/${id}`, comment ,
        { responseType: 'text' }
      );
    }
  
    public add(issue: Issue): Observable<any> {
      return this.http.post('http://localhost:8082/ims-issues/resources/issues', issue,
         { responseType: 'text' }
      );
    }
  
    public update(issue: Issue): Observable<any> {
      return this.http.put(`http://localhost:8082/ims-issues/resources/issues/${issue.id}`, issue);
    }
  
    public delete(id: number): Observable<any> {
      return this.http.delete(`http://localhost:8082/ims-issues/resources/issues/${id}`,
        { responseType: 'text' }
      );
    } 

}