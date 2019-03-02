import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { RegComponent } from './components/reg/reg.component';
import { HomeComponent } from './components/home/home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AuthGuard} from './auth.guard';

import { ErrorlinkComponent } from './components/errorlink/errorlink.component';
import {
  ToastrModule,
  ToastNoAnimation,
  ToastNoAnimationModule
} from 'ngx-toastr';
import { NewRequestService } from './service/new-request.service';
import { UsersComponent } from './components/users/users.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    AboutComponent,
    RegComponent,
    HomeComponent,
    ErrorlinkComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,NgbModule,ReactiveFormsModule
    ,HttpClientModule,ToastNoAnimationModule.forRoot(),
    
  ],
  providers: [NewRequestService ,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
