import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralinventoryictissueComponent } from './centralinventoryictissue.component';

describe('CentralinventoryictissueComponent', () => {
  let component: CentralinventoryictissueComponent;
  let fixture: ComponentFixture<CentralinventoryictissueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentralinventoryictissueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentralinventoryictissueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
