import { AuthGuardService } from './helpers/auth-guard.service';
import { HomeComponent } from './pages/home/home.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'login',
    component: ConnexionComponent
  },
  {
    path: '',
    component: HomeComponent, canActivate: [AuthGuardService] 
  },
  {
    path:'**', redirectTo: ''
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }