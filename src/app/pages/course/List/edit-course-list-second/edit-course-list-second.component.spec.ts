import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCourseListSecondComponent } from './edit-course-list-second.component';

describe('EditCourseListSecondComponent', () => {
  let component: EditCourseListSecondComponent;
  let fixture: ComponentFixture<EditCourseListSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCourseListSecondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCourseListSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
