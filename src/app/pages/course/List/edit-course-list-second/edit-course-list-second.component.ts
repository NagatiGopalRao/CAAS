import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-course-list-second',
  templateUrl: './edit-course-list-second.component.html',
  styleUrls: ['./edit-course-list-second.component.css']
})
export class EditCourseListSecondComponent {
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
  constructor(private router: Router) { }
  Back() {
    console.log("submitted!");
    this.router.navigate(['/edit-course-list']);
  }

  submit() {
    console.log("submitted!");
  }

}
