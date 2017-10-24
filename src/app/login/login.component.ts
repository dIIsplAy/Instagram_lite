import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  connected:boolean = false;

  constructor(private router:Router ,private auth:AuthService) { }

  ngOnInit() {
  }
login(){
this.auth.login(this.username, this.password).subscribe
(logged => 
{if(logged) {
  this.router.navigate(["/picture"]);
}});
}

logout(){
  this.auth.logout();
  this.connected = false;
}


}
