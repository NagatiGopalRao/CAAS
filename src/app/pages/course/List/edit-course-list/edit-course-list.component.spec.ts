import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCourseListComponent } from './edit-course-list.component';

describe('EditCourseListComponent', () => {
  let component: EditCourseListComponent;
  let fixture: ComponentFixture<EditCourseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCourseListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
