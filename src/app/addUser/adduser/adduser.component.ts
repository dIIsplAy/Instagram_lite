import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../shared/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  newUser:User;
  @Input()
  numberUser:number = 0;
  @Output("onAdd")
  eventAjouter:EventEmitter<User> = new EventEmitter();

  constructor(private router:Router) { 

      this.newUser = {
      username:'',
      password: ''
    } 
  }

  ngOnInit() {
    
  }

  ajouter(){
    console.log('ga' +this.newUser);
    this.eventAjouter.emit(this.newUser);
    this.router.navigate(["/login"]);
  }

}
