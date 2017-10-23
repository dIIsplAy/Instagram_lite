import { Component, OnInit } from '@angular/core';
import { Picture } from '../shared/Picture';
import { PictureService } from '../picture.service';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {
  picture:Picture;
  listePicture:Picture[] = [];
  aModifier:Picture;

  constructor(private pictureserv:PictureService,  private auth:AuthService) { }

  ngOnInit() 
  {
    this.pictureserv.getAllPicture()
    .subscribe((picturs) => this.listePicture = picturs);
  }
  ajouter(picture:Picture) {
    console.log('zo');
    this.pictureserv.addPicture(picture)
    .subscribe((users) => this.listePicture.push(picture));
  }
  like(pic:Picture){
    this.auth.getConect().subscribe((user)=>{
      if(!pic.like.find((like) => user.id === like)){
        this.pictureserv.likePicture(pic.id, user.id).subscribe((Pic)=>{
  
          this.ngOnInit();
          })
      }

    })
  }
    // if(!pic.like.find((like) => this.auth.getConect().id === like)){
    //   this.pictureserv.likePicture(pic.id, this.auth.getConect().id).subscribe((Pic)=>{

    //     this.ngOnInit();
    //   })
    // }
  // }
  

}
