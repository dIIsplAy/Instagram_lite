import { Injectable } from '@angular/core';
import { User } from './shared/User';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {
  private urlAPI:string = 'http://localhost:3000/user';
  constructor(private http:HttpClient) {

    
   }

  getAllUser():Observable<User[]> {
    return this.http.get<User[]>(this.urlAPI);
  }
  getUserById(id:number):Observable<User>{
    return this.http.get<User>(this.urlAPI+"/"+id);
  }
  addUser(user:User): Observable<User> {
    return this.http.post<User>(this.urlAPI, user);
  }

}
