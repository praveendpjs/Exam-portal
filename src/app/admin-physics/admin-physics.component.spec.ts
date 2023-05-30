import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPhysicsComponent } from './admin-physics.component';

describe('AdminPhysicsComponent', () => {
  let component: AdminPhysicsComponent;
  let fixture: ComponentFixture<AdminPhysicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPhysicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPhysicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
