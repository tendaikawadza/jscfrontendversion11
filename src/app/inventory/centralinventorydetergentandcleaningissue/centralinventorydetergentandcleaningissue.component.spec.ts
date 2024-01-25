import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralinventorydetergentandcleaningissueComponent } from './centralinventorydetergentandcleaningissue.component';

describe('CentralinventorydetergentandcleaningissueComponent', () => {
  let component: CentralinventorydetergentandcleaningissueComponent;
  let fixture: ComponentFixture<CentralinventorydetergentandcleaningissueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentralinventorydetergentandcleaningissueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentralinventorydetergentandcleaningissueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
