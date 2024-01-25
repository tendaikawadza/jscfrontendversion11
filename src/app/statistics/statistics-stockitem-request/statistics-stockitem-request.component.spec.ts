import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsStockitemRequestComponent } from './statistics-stockitem-request.component';

describe('StatisticsStockitemRequestComponent', () => {
  let component: StatisticsStockitemRequestComponent;
  let fixture: ComponentFixture<StatisticsStockitemRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticsStockitemRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatisticsStockitemRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
