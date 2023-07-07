import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CAAS';
  
  isSideBarcollapsed = false;
  constructor(public router: Router){
  }

  setIsCollapsed(isCollapsed: boolean) {
    this.isSideBarcollapsed = isCollapsed;
  }
}
