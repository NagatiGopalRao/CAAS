import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CourseListComponent } from './pages/course/List/course-list/course-list.component';
import { CourseApprovalComponent } from './pages/course/course-approval/course-approval.component';
import { CategoryComponent } from './pages/course/category/category.component';

const routes: Routes = [
  { path: '', component: CourseListComponent },
  { path: 'Course', component: CourseListComponent},
  { path: 'Course/Categories', component: CategoryComponent },
  { path: 'login', component: LoginComponent },
  // { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
