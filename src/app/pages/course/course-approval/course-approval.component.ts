import { Component } from '@angular/core';

@Component({
  selector: 'app-course-approval',
  templateUrl: './course-approval.component.html',
  styleUrls: ['./course-approval.component.css']
})
export class CourseApprovalComponent {
  headeritems = ['Course Name', 'Course Code', 'Main Category', 'Sub Category', 'Fee', 'Action'];
  items = [{coursename: 'Air Navigation', coursecode: 'AN9191', mc: 'Navigation', sc: 'Air Navigation Service', fee: '2500'}];

  upload() {
    document.getElementById('input')?.click();
  }
}
