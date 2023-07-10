import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  headeritems = ['Course Name', 'Start Date', 'End Date', 'Options'];
  items = [{ coursename: 'Aviation Security Programme', startdate: '01-07-2023', enddate: '10-07-2023', optselected: false },
  { coursename: 'Air Traffic Safety Electronics Personal Basic', startdate: '26-06-2023', enddate: '27-07-2023', optselected: false },
  { coursename: 'ICAO PAN-OPS Instrument', startdate: '01-07-2023', enddate: '27-09-2023', optselected: false },
  { coursename: "Senior Airport Fire Safety Officers", startdate: '23-06-2023', enddate: '24-07-2023', optselected: false },
  { coursename: 'Aeronautical Search and Rescue Operation', startdate: '23-06-2023', enddate: '24-07-2023', optselected: false }]
  edit = false;
  partone = true;

  constructor(private router: Router) {

  }

  upload() {
    document.getElementById('input')?.click();
  }

  selectopt(item: any) {
    item.optselected = !item.optselected;
  }

  toggleEdit() {
    this.edit = !this.edit;
  }

  togglePart() {
    this.partone = !this.partone;
  }
}
