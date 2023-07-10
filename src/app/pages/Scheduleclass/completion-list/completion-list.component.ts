import { Component } from '@angular/core';

@Component({
  selector: 'app-completion-list',
  templateUrl: './completion-list.component.html',
  styleUrls: ['./completion-list.component.css']
})
export class CompletionListComponent {

  list_items = [{coursename: "Traffic Safety", student_name: "Testing", std: "23-04-2023", cdd: "23-04-2023",  selectopt: false},
  {coursename: "Traffic Safety", student_name: "Testing", std: "23-04-2023", cdd: "23-04-2023",  selectopt: false},
  {coursename: "Traffic Safety", student_name: "Testing", std: "23-04-2023", cdd: "23-04-2023",  selectopt: false},
  {coursename: "Traffic Safety", student_name: "Testing", std: "23-04-2023", cdd: "23-04-2023",  selectopt: false},
  {coursename: "Traffic Safety", student_name: "Testing", std: "23-04-2023", cdd: "23-04-2023",  selectopt: false},
  {coursename: "Traffic Safety", student_name: "Testing", std: "23-04-2023", cdd: "23-04-2023",  selectopt: false},
  {coursename: "Traffic Safety", student_name: "", std: "23-04-2023", cdd: "23-04-2023",  selectopt: false},];

}
