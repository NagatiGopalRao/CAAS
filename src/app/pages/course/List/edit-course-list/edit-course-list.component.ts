import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-course-list',
  templateUrl: './edit-course-list.component.html',
  styleUrls: ['./edit-course-list.component.css']
})
export class EditCourseListComponent {
  constructor(private router: Router) { }

  Next() {
    console.log("Submitted!")
    this.router.navigate(['edit-course-list-second']);
  }

}
