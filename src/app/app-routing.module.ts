import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { LandingComponent } from './landing/landing.component';
import { TestingComponent } from './testing/testing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashcontainerComponent } from './dashcontainer/dashcontainer.component';


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

  {
    path:'dashboard',
    component: DashboardComponent,
    children:[
      {
        path: '',
        component: DashcontainerComponent, 
        outlet:'dashboard'
      },
      {
        path: 'prueba',
        component: TestingComponent,
        outlet:'dashboard'
      }
      // {
      //   path: 'stream/:id',
      //   component: TestingComponent,
      //   outlet:'details'
      // }
    ]
  },

  {
    path:'testing',
    component: TestingComponent,
  },

  {
    path: "prueba",
    component: DashboardComponent,
    outlet: "dashboard"
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
