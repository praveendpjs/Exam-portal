import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddQuizComponent } from './admin-add-quiz.component';

describe('AdminAddQuizComponent', () => {
  let component: AdminAddQuizComponent;
  let fixture: ComponentFixture<AdminAddQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddQuizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
