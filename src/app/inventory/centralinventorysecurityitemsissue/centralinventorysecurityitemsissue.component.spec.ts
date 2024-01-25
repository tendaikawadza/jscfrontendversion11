import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralinventorysecurityitemsissueComponent } from './centralinventorysecurityitemsissue.component';

describe('CentralinventorysecurityitemsissueComponent', () => {
  let component: CentralinventorysecurityitemsissueComponent;
  let fixture: ComponentFixture<CentralinventorysecurityitemsissueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentralinventorysecurityitemsissueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentralinventorysecurityitemsissueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
