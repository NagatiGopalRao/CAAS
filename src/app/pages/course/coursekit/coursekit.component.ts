import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-coursekit',
  templateUrl: './coursekit.component.html',
  styleUrls: ['./coursekit.component.css']
})
export class CoursekitComponent {
  @ViewChild("fileDropRef", { static: false })
  fileDropEl!: ElementRef;
  files: any[] = [];
  list = true;
  edit= false;
  headeritems = ["Course Name", "Short Description", "Long Description",
  "Video Link", "Document Link", "Actions"]
  listitems = [{coursename: "Air Traffic Safety", sd: "Air Traffic Safety", ld: "Air Traffic Safety", vltitle: "Air Traffic", dl: "https://www.caas.gov.sg/", selectopt: false},
{coursename: "Aviation", sd: "Aviation Management", ld: "Aviation Management", vltitle: "SAA", dl: "https://www.caas.gov.sg/saa", selectopt: false},
{coursename: "Airport Fire Safety", sd: "Fire Safety", ld: "Importance of Airport Fire Safety", vltitle: "CAAS", dl: "https://www.caas.gov.sg/saa", selectopt: false },
{coursename: "Safety Oversight", sd: "Safety Oversight Inspectors", ld: "Safety Oversight Inspectors", vltitle: "Safety", dl: "https://www.caas.gov.sg/", selectopt: false},
{coursename: "Aviation Leaders Programme", sd: "Leadership Programme", ld: "Aviation Leaders Programme", vltitle: "Leadership", dl: "https://www.caas.gov.sg/", selectopt: false}];
model = {coursename: "", sd: "", ld: "", dl: "", vltitle: "", selectopt: false};

toggleEdit(item: any) {
  this.edit = !this.edit;
  this.model = item;
}

selectoption(item: any) {
  item.selectopt = !item.selectopt;
}

toggleList() {
  this.list = !this.list;
}
  /**
   * on file drop handler
   */
  onFileDropped($event: any) {
    this.prepareFilesList($event);
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler(f: any) {
    this.prepareFilesList(f.files);
  }

  /**
   * Convert Files list to normal array list
   * @param files (Files List)
   */
   prepareFilesList(files: Array<any>) {
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
      this.model.vltitle = item.name;
    }
    this.fileDropEl.nativeElement.value = "";
  }

  onSubmit() {
    console.log(this.model);
    this.listitems.push(this.model);
    this.toggleList();
  }

  onEdit() {
    console.log(this.model);
    this.toggleEdit(this.model);
  }

  addCourseName(id: string) {
    this.model.coursename = id;
  }
}
