import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivateChild } from './components/auth/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { CourseListComponent } from './pages/course/List/course-list/course-list.component';

const routes: Routes = [
  { path: '', component: CourseListComponent, canActivate: [canActivateChild] },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
