import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPhysicsComponent } from './student-physics.component';

describe('StudentPhysicsComponent', () => {
  let component: StudentPhysicsComponent;
  let fixture: ComponentFixture<StudentPhysicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentPhysicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentPhysicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
