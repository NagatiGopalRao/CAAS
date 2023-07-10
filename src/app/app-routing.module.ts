import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CourseListComponent } from './pages/course/List/course-list/course-list.component';
import { CourseApprovalComponent } from './pages/course/course-approval/course-approval.component';
import { CategoryComponent } from './pages/course/category/category.component';
import { EditCourseListComponent } from './pages/course/List/edit-course-list/edit-course-list.component';
import { EditCourseListSecondComponent } from './pages/course/List/edit-course-list-second/edit-course-list-second.component';
import { CoursekitComponent } from './pages/course/coursekit/coursekit.component';
import { ListComponent } from './pages/Scheduleclass/list/list.component';
import { AddScheduleComponent } from './pages/schedule/add-schedule/add-schedule.component';
import { ApprovalListComponent } from './pages/Scheduleclass/approval-list/approval-list.component';
import { CompletionListComponent } from './pages/Scheduleclass/completion-list/completion-list.component';


const routes: Routes = [
  { path: 'Course', component: CourseListComponent },
  { path: 'Course/List', component: CourseListComponent},
  { path: 'Course/Course Kit', component: CoursekitComponent },
  { path: 'Course/Categories', component: CategoryComponent },
  { path: 'login', component: LoginComponent },
  { path: 'edit-course-list', component: EditCourseListComponent},
  { path: 'edit-course-list-second', component: EditCourseListSecondComponent},
  { path: 'Course/Course Approval', component: CourseApprovalComponent},
  { path: 'Schedule Class/List', component: ListComponent},

  { path: 'Schedule Class/Add', component: AddScheduleComponent}

  { path: 'Schedule Class/Approve List', component: ApprovalListComponent},
  { path: 'Schedule Class/Completion List', component: CompletionListComponent},



  // { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
