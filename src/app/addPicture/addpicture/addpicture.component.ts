import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Picture } from '../../shared/Picture';
import { PictureService } from '../../picture.service';

@Component({
  selector: 'app-addpicture',
  templateUrl: './addpicture.component.html',
  styleUrls: ['./addpicture.component.css']
})
export class AddpictureComponent implements OnInit {
  newPicture:Picture;
  @Input()
  numberPicture:number = 0;
  @Output("onAdd")
  eventAjouter:EventEmitter<Picture> = new EventEmitter();

  constructor(private pictureService:PictureService) { 

    this.newPicture = {
      description: '',
      link: '',
      like:[],
      owner:null
    } 
  }

  ngOnInit() {
  }
  ajouter(){
    console.log('ga');
    this.eventAjouter.emit(this.newPicture);
  }
  

}
