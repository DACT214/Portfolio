import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CaculatorComponent } from './caculator/caculator.component';
import { CalendarComponent } from './calendar/calendar.component';
import { EmailComponent } from './email/email.component';
import { EnterComponent } from './enter/enter.component';
import { InitialComponent } from './initial/initial.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  {path:'', redirectTo:'/initial', pathMatch:'full'},
  {path:'initial', component:InitialComponent},
  {path:"enter", component:EnterComponent},
  {path:"email", component:EmailComponent},
  {path:"calendar", component:CalendarComponent},
  {path:"caculator", component:CaculatorComponent},
  {path:"weather", component:WeatherComponent},
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
