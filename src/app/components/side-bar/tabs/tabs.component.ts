import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  @Output() selection = new EventEmitter<number>();
  @Input() tab: any;
  @Input() index: any;

  unselect() {
    this.tab.selected = false;
  }

  select() {
    this.tab.selected = true;
  }

  navsub() {
    this.selection.emit();
  }

  nav() {
    this.selection.emit();
    if(this.tab.subs.length != 0) {
      this.tab.subs[0].type = "selected";
    }
    this.tab.selected = true;
  }
}
