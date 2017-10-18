import { Injectable } from '@angular/core';
import { User } from './shared/User';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Picture } from './shared/Picture';
import { AuthService } from './shared/auth.service';

import 'rxjs/add/operator/mergeMap';
@Injectable()
export class PictureService {
  private urlAPI:string = 'http://localhost:3000/picture';
  constructor(private http:HttpClient) { }





  getAllPicture():Observable<Picture[]> {
    return this.http.get<Picture[]>(this.urlAPI);
  }
  getPictureById(id:number):Observable<Picture>{
    return this.http.get<Picture>(this.urlAPI+"/"+id);
  }
  addPicture(picture:Picture): Observable<Picture> {
    return this.http.post<Picture>(this.urlAPI, picture);
  }
  update(id:number ,entity:Picture): Observable<Picture>{
    return this.http.patch<Picture>(this.urlAPI+'/'+id, entity);
  }

  likePicture(idPicture, id){
    return this.getPictureById(idPicture).mergeMap((Pic)=>{
          Pic.like.push(id);
          return this.update(idPicture, Pic);
        }
    )}
}
