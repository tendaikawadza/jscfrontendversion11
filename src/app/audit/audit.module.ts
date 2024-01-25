import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuditRoutingModule } from './audit-routing.module';
import { AuditComponent } from './audit.component';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { AuditService } from '../service/audit.service';


@NgModule({
  declarations: [
    AuditComponent
  ],
  imports: [
    CommonModule,
    AuditRoutingModule,
    TableModule,
    TableModule, 
    HttpClientModule, 
    FormsModule, 
    ButtonModule
  ],
  providers:[AuditService]
})
export class AuditModule { }
