import { Component } from '@angular/core';

@Component({
  selector: 'app-add-schedule',
  templateUrl: './add-schedule.component.html',
  styleUrls: ['./add-schedule.component.css']
})
export class AddScheduleComponent {
  pageone = false;
  pressed = [false, false, false, false];
  toggleCheck(num: number) {
    this.pressed[num] = !this.pressed[num];
   }

   togglePage() {
    this.pageone = !this.pageone;
   }

   headeritems = ['Start Date', 'End Date', 'Instructor', 'Lab']
  items = ['', '']
  index = 0;

  deleteItem(i:number) {
    this.items.splice(i, 1);
    console.log(i);
  }

  addItem() {
    this.items.push('');
  }
}
