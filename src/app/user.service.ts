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
  getChienById(id:number):Observable<User>{
    return this.http.get<User>(this.urlAPI+"/"+id);
  }

}
