import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { Observable } from 'rxjs/Observable';
import { User } from './shared/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUser:Observable<User>;
  title = 'app';
  constructor(private auth:AuthService){}



  ngOnInit(): void {
this.currentUser = this.auth.user
}
}
