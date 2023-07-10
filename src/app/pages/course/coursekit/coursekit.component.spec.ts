import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursekitComponent } from './coursekit.component';

describe('CoursekitComponent', () => {
  let component: CoursekitComponent;
  let fixture: ComponentFixture<CoursekitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursekitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursekitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
