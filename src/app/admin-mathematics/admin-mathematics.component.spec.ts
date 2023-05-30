import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMathematicsComponent } from './admin-mathematics.component';

describe('AdminMathematicsComponent', () => {
  let component: AdminMathematicsComponent;
  let fixture: ComponentFixture<AdminMathematicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMathematicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminMathematicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
