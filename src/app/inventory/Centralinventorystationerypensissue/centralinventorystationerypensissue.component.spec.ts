import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralinventorystationerypensissueComponent } from './centralinventorystationerypensissue.component';

describe('CentralinventorystationerypensissueComponent', () => {
  let component: CentralinventorystationerypensissueComponent;
  let fixture: ComponentFixture<CentralinventorystationerypensissueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentralinventorystationerypensissueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentralinventorystationerypensissueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
