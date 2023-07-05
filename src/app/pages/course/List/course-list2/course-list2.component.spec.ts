import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseList2Component } from './course-list2.component';

describe('CourseList2Component', () => {
  let component: CourseList2Component;
  let fixture: ComponentFixture<CourseList2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseList2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
