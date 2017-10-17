import { Component, OnInit } from '@angular/core';
import { Picture } from '../shared/Picture';
import { PictureService } from '../picture.service';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {
  picture:Picture;
  listePicture:Picture[] = [];
  aModifier:Picture;

  constructor(private pictureserv:PictureService) { }

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

}
