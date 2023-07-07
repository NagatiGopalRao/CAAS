import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {


  constructor(private router: Router) { }

  Next() {
    console.log("Submitted!")
    this.router.navigate(['/course/List/course-list2']);
  }


}


