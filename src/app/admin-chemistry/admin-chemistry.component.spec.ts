import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChemistryComponent } from './admin-chemistry.component';

describe('AdminChemistryComponent', () => {
  let component: AdminChemistryComponent;
  let fixture: ComponentFixture<AdminChemistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminChemistryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminChemistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
