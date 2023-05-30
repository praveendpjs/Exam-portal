import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComputerScienceComponent } from './admin-computer-science.component';

describe('AdminComputerScienceComponent', () => {
  let component: AdminComputerScienceComponent;
  let fixture: ComponentFixture<AdminComputerScienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminComputerScienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminComputerScienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
