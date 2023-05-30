import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentChemistryComponent } from './student-chemistry.component';

describe('StudentChemistryComponent', () => {
  let component: StudentChemistryComponent;
  let fixture: ComponentFixture<StudentChemistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentChemistryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentChemistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
