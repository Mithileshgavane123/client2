import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { DeleteComponent } from './delete/delete.component';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthService } from './auth.service';

 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    DeleteComponent,
    EditComponent,
    LoginComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
      RouterModule.forRoot([
       {path:"",component:HomeComponent,canActivate:[AuthService]},   
        {path:"home",component:HomeComponent,canActivate:[AuthService]},
        {path:"delete/:id",component:DeleteComponent,canActivate:[AuthService]},
        {path:"register",component:RegisterComponent,canActivate:[AuthService]},
        {path:"edit/:id",component:EditComponent,canActivate:[AuthService]},
        {path:"login",component:LoginComponent}
      
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
