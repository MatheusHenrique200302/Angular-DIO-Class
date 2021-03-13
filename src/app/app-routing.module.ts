import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { Error404Component } from './error404/error404.component';

const routes: Routes = [

  {
    path:'',
    redirectTo: 'courses',
    pathMatch: 'full'
  },
  {
    path:'courses',
    component: CoursesListComponent
  },
  {
    path: "**",
    component: Error404Component
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
