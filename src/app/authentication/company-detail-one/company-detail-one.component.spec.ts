import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDetailOneComponent } from './company-detail-one.component';

describe('CompanyDetailOneComponent', () => {
  let component: CompanyDetailOneComponent;
  let fixture: ComponentFixture<CompanyDetailOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyDetailOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDetailOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
