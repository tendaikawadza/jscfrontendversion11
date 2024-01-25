import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CentralinvetorycategoryRoutingModule } from './centralinvetorycategory-routing.module';
import { CentralInventoryComponent } from '../central-inventory/central-inventory.component';
import { CentralinventoryconsumablesComponent } from '../centralinventoryconsumables/centralinventoryconsumables.component';
import { CentralinventoryictComponent } from '../centralinventoryict/centralinventoryict.component';
import { CentralinvetorycategoryComponent } from './centralinvetorycategory.component';
import { CentralinventorystationerypensComponent } from '../centralinventorystationerypens/centralinventorystationerypens.component';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToolbarModule } from 'primeng/toolbar';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CentralinventoryteasandprovisionsComponent } from '../centralinventoryteasandprovisions/centralinventoryteasandprovisions.component';
import { CentralinventorystationeryComponent } from '../centralinventorystationery/centralinventorystationery.component';
import { CentralinventorysecurityitemsComponent } from '../centralinventorysecurityitems/centralinventorysecurityitems.component';


@NgModule({
  declarations: [
    CentralInventoryComponent,
    CentralinventoryconsumablesComponent,
    CentralinventoryictComponent,   
    CentralinventorystationerypensComponent,
    
    CentralinventoryteasandprovisionsComponent,
    CentralinventorystationeryComponent,
    CentralinventorysecurityitemsComponent,
    

    
  ],
  imports: [
    CommonModule,
    CentralinvetorycategoryRoutingModule,
    ConfirmDialogModule,
    ToolbarModule,
    DropdownModule,
    TableModule,
    DialogModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class CentralinvetorycategoryModule { }
