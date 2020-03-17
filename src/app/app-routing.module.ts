import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { LandingComponent } from './landing/landing.component';
import { TestingComponent } from './testing/testing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashcontainerComponent } from './dashcontainer/dashcontainer.component';
import { InicioComponent } from './inicio/inicio.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';


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
        component: InicioComponent, 
        outlet:'dashboard'
      },
      {
        path: 'noticias',
        component: NoticiasComponent,
        outlet:'dashboard'
      },
      {
        path: 'proveedores',
        component: ProveedoresComponent,
        outlet:'dashboard'
      },
      {
        path: 'calendario',
        component: CalendarioComponent,
        outlet:'dashboard'
      },
      {
        path: 'usuarios',
        component: UsuariosComponent,
        outlet:'dashboard'
      },
      {
        path: 'notificaciones',
        component: NotificacionesComponent,
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
