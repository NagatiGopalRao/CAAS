import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sub-tab',
  templateUrl: './sub-tabs.component.html',
  styleUrls: ['./sub-tabs.component.css']
})
export class SubTabsComponent {
  @Output() navigate = new EventEmitter();
  @Input() sub: any;
  @Input() tab: any;

  select() {
    for(let s of this.tab.subs) {
      s.type = "none";
    }
    this.navigate.emit();
    this.sub.type = "selected";
  }
}
