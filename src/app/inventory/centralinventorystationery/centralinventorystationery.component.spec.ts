import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralinventorystationeryComponent } from './centralinventorystationery.component';

describe('CentralinventorystationeryComponent', () => {
  let component: CentralinventorystationeryComponent;
  let fixture: ComponentFixture<CentralinventorystationeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentralinventorystationeryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentralinventorystationeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
