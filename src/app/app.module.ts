import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AlljobsComponent } from './alljobs/alljobs.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JobItemComponent } from './job-item/job-item.component';
import { ExampleInterceptor } from './interceptor/authenticate.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    AlljobsComponent,
    NotfoundComponent,
    JobItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
  
  ],
  providers: [
    provideClientHydration(),
    { 
      provide: HTTP_INTERCEPTORS, useClass: ExampleInterceptor, multi:true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
