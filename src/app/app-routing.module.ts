import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { LandingComponent } from './landing/landing.component';


const routes: Routes = [

  //redirect to home
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },

  {
    path:'home',
    component: LandingComponent
  },

  //404 error
  {
    path:'**',
    component: NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
