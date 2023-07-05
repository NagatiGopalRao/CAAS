import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header/header.component';
import { FooterComponent } from './common/footer/footer/footer.component';
import { AddCourseComponent } from './pages/course/Add/add-course/add-course.component';
import { CourseListComponent } from './pages/course/List/course-list/course-list.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { TabsComponent } from './components/side-bar/tabs/tabs.component';
import { SubTabsComponent } from './components/side-bar/tabs/sub-tabs/sub-tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AddCourseComponent,
    CourseListComponent,
    SideBarComponent,
    TabsComponent,
    SubTabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
