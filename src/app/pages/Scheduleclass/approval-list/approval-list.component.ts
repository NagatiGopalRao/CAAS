import { Component } from '@angular/core';

@Component({
  selector: 'app-approval-list',
  templateUrl: './approval-list.component.html',
  styleUrls: ['./approval-list.component.css']
})
export class ApprovalListComponent {


  list_items = [{coursename: "Air Traffic Safety", student_name: "Stephen", std: "23-04-2023", cdd: "23-04-2023", rd: "23-04-2023", selectopt: false},
  {coursename: "Air Traffic Safety", student_name: "Testing", std: "23-04-2023", cdd: "23-04-2023", rd: "23-04-2023", selectopt: false},
  {coursename: "Air Traffic Safety", student_name: "Testing", std: "23-04-2023", cdd: "23-04-2023", rd: "23-04-2023", selectopt: false},
  {coursename: "Air Traffic Safety", student_name: "Testing", std: "23-04-2023", cdd: "23-04-2023", rd: "23-04-2023", selectopt: false},
  {coursename: "Air Traffic Safety", student_name: "Testing", std: "23-04-2023", cdd: "23-04-2023", rd: "23-04-2023", selectopt: false},
  {coursename: "Air Traffic Safety", student_name: "Testing", std: "23-04-2023", cdd: "23-04-2023", rd: "23-04-2023", selectopt: false},
  {coursename: "Air Traffic Safety", student_name: "", std: "23-04-2023", cdd: "23-04-2023", rd: "23-04-2023", selectopt: false},];
}
