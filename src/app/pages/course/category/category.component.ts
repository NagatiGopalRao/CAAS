import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  
  list :boolean = true;
  constructor(){

  }
  headeritems = ["Main Category", "Sub Category"];
  listitems = [
    {maincategory: "Air Traffic Safety", subcategory: "Air Traffic Safety", ld: "Air Traffic Safety"},
    {maincategory: "Air Traffic Safety", subcategory: "Air Traffic Safety", ld: "Air Traffic Safety"},
    {maincategory: "Air Traffic Safety", subcategory: "Air Traffic Safety", ld: "Air Traffic Safety"},
    {maincategory: "Air Traffic Safety", subcategory: "Air Traffic Safety", ld: "Air Traffic Safety"},
    {maincategory: "Air Traffic Safety", subcategory: "Air Traffic Safety", ld: "Air Traffic Safety"}
  ];


ngOnInt(){

}
  toggleList() {
    this.list = !this.list;
  }

}
