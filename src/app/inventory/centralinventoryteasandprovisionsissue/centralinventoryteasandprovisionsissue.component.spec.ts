import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralinventoryteasandprovisionsissueComponent } from './centralinventoryteasandprovisionsissue.component';

describe('CentralinventoryteasandprovisionsissueComponent', () => {
  let component: CentralinventoryteasandprovisionsissueComponent;
  let fixture: ComponentFixture<CentralinventoryteasandprovisionsissueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentralinventoryteasandprovisionsissueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentralinventoryteasandprovisionsissueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
