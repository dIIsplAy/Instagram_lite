import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { PictureComponent } from './picture/picture.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { AuthService } from './shared/auth.service';
import { UserService } from './user.service';
import { AdduserComponent } from './addUser/adduser/adduser.component';
import { PictureService } from './picture.service';
import { AddpictureComponent } from './addPicture/addpicture/addpicture.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { HomepageComponent } from './Homepage/homepage/homepage.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PictureComponent,
    LoginComponent,
    AdduserComponent,
    AddpictureComponent,
    HomepageComponent,

    

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [AuthService, UserService, PictureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
