import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegComponent } from './components/reg/reg.component';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';
import { ErrorlinkComponent } from './components/errorlink/errorlink.component';
import { UsersComponent } from './components/users/users.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: 'login' ,component: LoginComponent},
  {path: 'reg',component : RegComponent},
  {path: 'users',component : UsersComponent,canActivate:[AuthGuard]},
  {path: '',component : HomeComponent},
  {path: '**',component : ErrorlinkComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
