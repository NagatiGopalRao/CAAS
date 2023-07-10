import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header/header.component';
import { FooterComponent } from './common/footer/footer/footer.component';
import { AddCourseComponent } from './pages/course/Add/add-course/add-course.component';
import { CourseListComponent } from './pages/course/List/course-list/course-list.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { TabsComponent } from './components/side-bar/tabs/tabs.component';
import { SubTabsComponent } from './components/side-bar/tabs/sub-tabs/sub-tabs.component';
import { ProfileBannerComponent } from './pages/Banner/profile-banner/profile-banner.component';
import { InstructorBannerComponent } from './pages/Banner/instructor-banner/instructor-banner.component';
import { StudentBannerComponent } from './pages/Banner/student-banner/student-banner.component';
import { CourseApprovalComponent } from './pages/course/course-approval/course-approval.component';

import { ListComponent } from './pages/Scheduleclass/list/list.component';

import { CategoryComponent } from './pages/course/category/category.component';

import { EditCourseListComponent } from './pages/course/List/edit-course-list/edit-course-list.component';
import { EditCourseListSecondComponent } from './pages/course/List/edit-course-list-second/edit-course-list-second.component';

import { CoursekitComponent } from './pages/course/coursekit/coursekit.component';
import { FormsModule } from '@angular/forms';
import { AddScheduleComponent } from './pages/schedule/add-schedule/add-schedule.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AddCourseComponent,
    CourseListComponent,
    SideBarComponent,
    TabsComponent,
    SubTabsComponent,
    ProfileBannerComponent,
    InstructorBannerComponent,
    StudentBannerComponent,
    CourseApprovalComponent,

    ListComponent,

    CategoryComponent,

    EditCourseListComponent,
    EditCourseListSecondComponent,

    CoursekitComponent,
     AddScheduleComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
