import { Component, OnInit } from '@angular/core';
import { User } from '../shared/User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user:User;
  listeUser:User[] = [];
  aModifier:User;

  constructor(private userServ:UserService) { }

  ngOnInit() {this.userServ.getAllUser()
    .subscribe((users) => this.listeUser = users);
  }
  ajouter(user:User) {
    console.log('zo');
    this.userServ.addUser(user)
    .subscribe((users) => this.listeUser.push(user));
  }

  // supprimer(id:number) {
  //   this.userServ.removeUser(id)
  //   .then(() => this.ngOnInit());
  // }
  // modifier(user:User){
  //   this.userServ.update(user.id, user);

  // }

}
