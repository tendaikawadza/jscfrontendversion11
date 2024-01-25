import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralinventoryconsumablesissueComponent } from './centralinventoryconsumablesissue.component';

describe('CentralinventoryconsumablesissueComponent', () => {
  let component: CentralinventoryconsumablesissueComponent;
  let fixture: ComponentFixture<CentralinventoryconsumablesissueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentralinventoryconsumablesissueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentralinventoryconsumablesissueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
