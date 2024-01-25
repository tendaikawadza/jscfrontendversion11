import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralinventorysecurityitemsComponent } from './centralinventorysecurityitems.component';

describe('CentralinventorysecurityitemsComponent', () => {
  let component: CentralinventorysecurityitemsComponent;
  let fixture: ComponentFixture<CentralinventorysecurityitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentralinventorysecurityitemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentralinventorysecurityitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
