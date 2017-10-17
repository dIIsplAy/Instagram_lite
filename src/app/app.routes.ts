import { Routes} from "@angular/router";
import { PictureComponent } from "./picture/picture.component";
import { LoginComponent } from "./login/login.component";
import { AdduserComponent } from "./addUser/adduser/adduser.component";
import { AddpictureComponent } from "./addPicture/addpicture/addpicture.component";





export const appRoutes = [
    {path : 'picture', component: PictureComponent},
     {path : 'login', component: LoginComponent},
     {path : 'adduser', component: AdduserComponent},
     {path : 'addpicture', component: AddpictureComponent},
    // {path : 'todo-second', component: TodoSecondComponent},
    // {path : 'template', component: TemplateComponent},
    // {path: '', pathMatch:'full', redirectTo:'/liste-chien'},
    // {path: '**', component:ErrorComponent}
    
];