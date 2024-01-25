import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventorydashboardComponent } from './inventorydashboard/inventorydashboard.component';
import { ProvincialinventoryComponent } from './provincialinventory/provincialinventory.component';
import { InventoryComponent } from './inventory.component';

const routes: Routes = [
 

  { path: 'proviancialInventory', component: ProvincialinventoryComponent },
  { path: 'centralinventorycategory',  loadChildren: () => import('./centralinvetorycategory/centralinvetorycategory.module').then(m => m.CentralinvetorycategoryModule)},

  { path: 'inventorydashboard', component: InventorydashboardComponent },
  { path: '', component: InventoryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventoryRoutingModule {}
