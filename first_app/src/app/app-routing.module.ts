import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolComponent } from './tool/tool.component';
import {  SubjectComponent } from './subject/subject.component';
import { EventComponent } from './event/event.component';
import { SubjectFormComponent } from './subject-form/subject-form.component';
import { SubjectAffectComponent } from './subject-affect/subject-affect.component';
import { LoginComponent } from './login/login.component';
import { EventCreateComponent } from './event-create/event-create.component';
import { StudentFormComponent } from './student-form/student-form.component';

const routes: Routes = [
  {
    path:'student',
    pathMatch:'full',
    component:StudentComponent
  },
  {
    path:'dashboard',
    pathMatch:'full',
    component:DashboardComponent
  },
{   path:'tools',
    pathMatch:'full',
    component:ToolComponent},
  {
    path:'subjects',
    pathMatch:'full',
    component:SubjectComponent
  },
  {
    path:'Events',
    pathMatch:'full',
    component:EventComponent
  },
  {
    path:'login',
    pathMatch:'full',
    component:LoginComponent
  },
  {
    path:'student/create',
    pathMatch:'full',
    component:StudentFormComponent
  },
  {
    path:'subjects/create',
    pathMatch:'full',
    component:SubjectFormComponent
  },

  {
    path:'',
    pathMatch:'full',
    redirectTo:"login"
  },
  {
    path:'subjects/:id/edit',
    pathMatch:'full',
    component:SubjectFormComponent
  },
  {
    path:':id/edit',
    pathMatch:'full',
    component:StudentFormComponent
  },
  {
    path:':id/affect',
    pathMatch:'full',
    component:SubjectAffectComponent
  },

  {
    path:'event/create',
    pathMatch:'full',
    component:EventCreateComponent
  },


  {
    path:'**',
    pathMatch:'full',
    redirectTo:"dashboard"
  },
  ];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
