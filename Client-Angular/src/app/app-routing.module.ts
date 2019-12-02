import { ConfirmbookingComponent } from './confirmbooking/confirmbooking.component';
import { ResultComponent } from './result/result.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import the generated components
import { LoginComponent } from "./users/login/login.component";
import { RegisterComponent } from './users/register/register.component';
import { PostComponent } from "./rides/post/post.component";
import { SearchComponent } from "./rides/search/search.component";
import { HomeComponent } from './home/home.component';





const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'post',
    component: PostComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'result',
    component: ResultComponent
  },
  {
    path:'confirmbooking',
    component : ConfirmbookingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
