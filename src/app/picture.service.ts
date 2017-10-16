import { Injectable } from '@angular/core';
import { User } from './shared/User';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Picture } from './shared/Picture';
@Injectable()
export class PictureService {
  private urlAPI:string = 'http://localhost:3000/picture';
  constructor(private http:HttpClient) { }





  getAllUser():Observable<Picture[]> {
    return this.http.get<Picture[]>(this.urlAPI);
  }
  getChienById(id:number):Observable<Picture>{
    return this.http.get<Picture>(this.urlAPI+"/"+id);
  }
}
