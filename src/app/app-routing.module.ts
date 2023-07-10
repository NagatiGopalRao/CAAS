import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CourseListComponent } from './pages/course/List/course-list/course-list.component';
import { CourseApprovalComponent } from './pages/course/course-approval/course-approval.component';
import { CategoryComponent } from './pages/course/category/category.component';
import { EditCourseListComponent } from './pages/course/List/edit-course-list/edit-course-list.component';
import { EditCourseListSecondComponent } from './pages/course/List/edit-course-list-second/edit-course-list-second.component';
import { CoursekitComponent } from './pages/course/coursekit/coursekit.component';

const routes: Routes = [
  { path: '', component: CoursekitComponent },
  { path: 'Course', component: CourseListComponent},
  { path: 'Course/Course Kit', component: CoursekitComponent },
  { path: 'Course/Categories', component: CategoryComponent },
  { path: 'login', component: LoginComponent },
  { path: 'edit-course-list', component: EditCourseListComponent},
  { path: 'edit-course-list-second', component: EditCourseListSecondComponent},
  // { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
