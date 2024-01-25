import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralinventoryteaandprovisionsComponent } from './centralinventoryteaandprovisions.component';

describe('CentralinventoryteaandprovisionsComponent', () => {
  let component: CentralinventoryteaandprovisionsComponent;
  let fixture: ComponentFixture<CentralinventoryteaandprovisionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentralinventoryteaandprovisionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentralinventoryteaandprovisionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
