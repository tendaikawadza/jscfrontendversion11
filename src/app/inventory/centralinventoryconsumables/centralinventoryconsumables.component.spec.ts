import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralinventoryconsumablesComponent } from './centralinventoryconsumables.component';

describe('CentralinventoryconsumablesComponent', () => {
  let component: CentralinventoryconsumablesComponent;
  let fixture: ComponentFixture<CentralinventoryconsumablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentralinventoryconsumablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentralinventoryconsumablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
