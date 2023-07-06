import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-course-list2',
  templateUrl: './course-list2.component.html',
  styleUrls: ['./course-list2.component.css']
})
export class CourseList2Component {
  @ViewChild("fileDropRef", { static: false })
  fileDropEl!: ElementRef;
  files: any[] = [];

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
    }
    this.fileDropEl.nativeElement.value = "";
  }
  upload() {
    document.getElementById('input')?.click();
  }
  back = false;
  goBack() {
    this.back = !this.back;
  }

  submit() {
    console.log("submitted!");
  }

}
