import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralinventoryteasandprovisionsComponent } from './centralinventoryteasandprovisions.component';

describe('CentralinventoryteasandprovisionsComponent', () => {
  let component: CentralinventoryteasandprovisionsComponent;
  let fixture: ComponentFixture<CentralinventoryteasandprovisionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentralinventoryteasandprovisionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentralinventoryteasandprovisionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
