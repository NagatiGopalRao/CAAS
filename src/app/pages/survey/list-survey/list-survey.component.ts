import { Component } from '@angular/core';

@Component({
  selector: 'app-list-survey',
  templateUrl: './list-survey.component.html',
  styleUrls: ['./list-survey.component.css']
})
export class ListSurveyComponent {
  headeritems = ["Course Name", "Actions"];
  items = [{coursename: 'Navigation', selectopt: false},
  {coursename: "ICAO PANS-OPS Instrument Procedures", selectopt: false},
  {coursename: 'Senior Airport Fire Officers', selectopt: false},
  {coursename: 'Air Traffic Safety Electronics Personnel Communications', selectopt: false},
  {coursename: 'Aviation Mangement', selectopt: false},
  {coursename: 'Airport Fire Safety', selectopt: false},
  {coursename: 'Aviation Safety', selectopt: false}]

  selectoption(i: any) {
    i.selectopt = !i.selectopt;
  }
}
