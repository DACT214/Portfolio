import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { EmailComponent } from './email/email.component';
import { EnterComponent } from './enter/enter.component';
import { InitialComponent } from './initial/initial.component';

const routes: Routes = [
  {path:'', redirectTo:'/initial', pathMatch:'full'},
  {path:'initial', component:InitialComponent},
  {path:"enter", component:EnterComponent},
  {path:"email", component:EmailComponent},
  {path:"calendar", component:CalendarComponent},
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
