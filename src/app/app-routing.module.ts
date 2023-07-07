import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivateChild } from './components/auth/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { CourseListComponent } from './pages/course/List/course-list/course-list.component';
import { CourseApprovalComponent } from './pages/course/course-approval/course-approval.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HeaderComponent } from './common/header/header/header.component';

const routes: Routes = [
  { path: '', component: CourseListComponent, canActivate: [canActivateChild] },
  { path: 'course', component: CourseListComponent, canActivate: [canActivateChild] },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
