import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentComputerScienceComponent } from './student-computer-science.component';

describe('StudentComputerScienceComponent', () => {
  let component: StudentComputerScienceComponent;
  let fixture: ComponentFixture<StudentComputerScienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentComputerScienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentComputerScienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
