import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticsRoutingModule } from './statistics-routing.module';
import { StatisticsComponent } from './statistics/statistics.component';
import { StatisticspurchaserequestComponent } from './statisticspurchaserequest/statisticspurchaserequest.component';
import { StatisticsStockitemRequestComponent } from './statistics-stockitem-request/statistics-stockitem-request.component';


@NgModule({
  declarations: [
    StatisticsComponent,
    StatisticspurchaserequestComponent,
    StatisticsStockitemRequestComponent
  ],
  imports: [
    CommonModule,
    StatisticsRoutingModule
  ]
})
export class StatisticsModule { }
