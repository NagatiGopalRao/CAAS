import { Component } from '@angular/core';
import { Router } from '@angular/router';


declare var $: any 
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {
  edit :boolean = false;
  constructor(private router: Router){}

  headeritems = ['Course Name', 'Course Code', 'Sc Code', 'Hours','Days','Main Category', 'Sub Category', 'WBS','Fees','Status','Action'];
  items = [{coursename: 'Aviation Security Programme', CourseCode: 'SAP954', Sccode: 'SC0987',hours:'12',days:'3',MianCat:'Aviation Management',subCate:'Aviation',Wbs:'',fees:'1000',status:'Active', optselected: false},
{coursename: 'Air Traffic Safety Electronics Personal Basic', CourseCode: 'SAP954', Sccode: 'SC0987',hours:'23',days:'5',MianCat:'Aviation Management',subCate:'Aviation',Wbs:'',fees:'1000',status:'Active', optselected: false},
{coursename: 'ICAO PAN-OPS Instrument', CourseCode: 'SAP954', Sccode: 'SC0987',hours:'18',days:'5',MianCat:'Airport Fire Safety',subCate:'Fire Safety',Wbs:'',fees:'1000',status:'Active', optselected: false},
{coursename: "Senior Airport Fire Safety Officers", CourseCode: 'SAP954', Sccode: 'SC0987',hours:'34',days:'6',MianCat:'Aviation Management',subCate:'Aviation',Wbs:'',fees:'1000',status:'Active', optselected: false},
{coursename: 'Aeronautical Search and Rescue Operation', CourseCode: 'SAP954', Sccode: 'SC0987',hours:'56',days:'7',MianCat:'Airport Fire Safety',subCate:'Fire Safety',Wbs:'',fees:'1000',status:'Active', optselected: false} ]

  upload() {
    document.getElementById('input')?.click();
  }
  selectopt(item: any) {
    item.optselected = !item.optselected;
  }

  editList() {
    this.router.navigate(['edit-course-list']);
  }

  openPopup(){
    console.log("`openPopup")
    $('#exampleModal').modal('show');
  }
  closePopup(){
    $('#exampleModal').modal('hide');
  }


  toggleEdit() {
    this.edit = !this.edit;
  }
}
