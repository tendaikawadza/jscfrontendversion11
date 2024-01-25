import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralinventorydetergentsandcleaningmaterialComponent } from './centralinventorydetergentsandcleaningmaterial.component';

describe('CentralinventorydetergentsandcleaningmaterialComponent', () => {
  let component: CentralinventorydetergentsandcleaningmaterialComponent;
  let fixture: ComponentFixture<CentralinventorydetergentsandcleaningmaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentralinventorydetergentsandcleaningmaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentralinventorydetergentsandcleaningmaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
