import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticspurchaserequestComponent } from './statisticspurchaserequest.component';

describe('StatisticspurchaserequestComponent', () => {
  let component: StatisticspurchaserequestComponent;
  let fixture: ComponentFixture<StatisticspurchaserequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticspurchaserequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatisticspurchaserequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
