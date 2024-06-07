import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AlljobsComponent } from './alljobs/alljobs.component';
import { JobItemComponent } from './job-item/job-item.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  {path:'jobs', component:AlljobsComponent},
  { path: 'jobItem/:id', component: JobItemComponent },
  { path: '**', component: NotfoundComponent },
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
