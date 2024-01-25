import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToolbarModule } from 'primeng/toolbar';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { CentralInventoryComponent } from './central-inventory/central-inventory.component';
import { ProvincialinventoryComponent } from './provincialinventory/provincialinventory.component';
import { InventoryComponent } from './inventory.component';
import { CentralinvetorycategoryComponent } from './centralinvetorycategory/centralinvetorycategory.component';
import { CentralinventoryteaandprovisionsComponent } from './centralinventoryteaandprovisions/centralinventoryteaandprovisions.component';
import { CentralinventorydetergentsandcleaningmaterialComponent } from './centralinventorydetergentsandcleaningmaterial/centralinventorydetergentsandcleaningmaterial.component';
import { CentralinventoryictissueComponent } from './centralinventoryictissue/centralinventoryictissue.component';
import { CentralinventorystationerypensissueComponent } from './centralinventorystationerypensissue/centralinventorystationerypensissue.component';
import { CentralinventoryconsumablesissueComponent } from './centralinventoryconsumablesissue/centralinventoryconsumablesissue.component';
import { CentralinventoryteasandprovisionsissueComponent } from './centralinventoryteasandprovisionsissue/centralinventoryteasandprovisionsissue.component';
import { CentralinventorysecurityitemsissueComponent } from './centralinventorysecurityitemsissue/centralinventorysecurityitemsissue.component';
import { CentralinventorydetergentandcleaningissueComponent } from './centralinventorydetergentandcleaningissue/centralinventorydetergentandcleaningissue.component';


@NgModule({
  declarations: [
  CentralinvetorycategoryComponent,
  ProvincialinventoryComponent,
  InventoryComponent,
  CentralinventoryteaandprovisionsComponent,
  CentralinventorydetergentsandcleaningmaterialComponent,
  CentralinventoryictissueComponent,
  CentralinventorystationerypensissueComponent,
  CentralinventoryconsumablesissueComponent,
  CentralinventoryteasandprovisionsissueComponent,
  CentralinventorysecurityitemsissueComponent,
  CentralinventorydetergentandcleaningissueComponent,

  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    ConfirmDialogModule,
    ToolbarModule,
    DropdownModule,
    TableModule,
    DialogModule,
    ReactiveFormsModule,
    FormsModule
  
  ],
})
export class InventoryModule {}
