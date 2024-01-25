import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { InventoryService } from 'src/app/service/inventory.service';


@Component({
  selector: 'app-centralinventoryict',
  templateUrl: './centralinventoryict.component.html',
  styleUrls: ['./centralinventoryict.component.css'],
})
export class CentralinventoryictComponent implements OnInit {

  constructor(private router: Router, private inventoryService: InventoryService) {}

  ngOnInit(): void {}
  onSubmit() {
    throw new Error('Method not implemented.');
  }
  productDialog = false;
  addProductForm: FormGroup<any>;
  editProduct(_t122: any) {
    throw new Error('Method not implemented.');
  }
  products: any[];
  logout() {
    throw new Error('Method not implemented.');
  }
  openNew() {
    this.productDialog = true;
  }
  getPcode(arg0: any) {
    throw new Error('Method not implemented.');
  }
  selectedProducts: any;
  pcodeList: any[];
  selectedCode: any;
  deleteSelectedProducts() {
    throw new Error('Method not implemented.');
  }
  hideDialog() {}

  //is this correct
  f: any;
  submitted: any;

  gotoPage(urlRoute: string): void {
  //  this.inventoryService.gotoPage(urlRoute);
  }
}
