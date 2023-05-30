import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMathematicsComponent } from './student-mathematics.component';

describe('StudentMathematicsComponent', () => {
  let component: StudentMathematicsComponent;
  let fixture: ComponentFixture<StudentMathematicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentMathematicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentMathematicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
