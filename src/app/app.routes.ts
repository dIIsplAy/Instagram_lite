import { Routes} from "@angular/router";
import { PictureComponent } from "./picture/picture.component";
import { LoginComponent } from "./login/login.component";
import { AdduserComponent } from "./addUser/adduser/adduser.component";
import { AddpictureComponent } from "./addPicture/addpicture/addpicture.component";
import { UserComponent } from "./user/user.component";
import { HomepageComponent } from "./Homepage/homepage/homepage.component";





export const appRoutes = [
    {path : 'picture', component: PictureComponent},
     {path : 'login', component: LoginComponent},
     {path : 'user', component: UserComponent},
     {path : 'user', component: AdduserComponent},
  {path : '', component: HomepageComponent},
    // {path : 'template', component: TemplateComponent},
    // {path: '', pathMatch:'full', redirectTo:'/liste-chien'},
    // {path: '**', component:ErrorComponent}
    
];