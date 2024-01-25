import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Centralinventorystationerypens } from 'src/app/interface/centralinventorystationerypens';
import { InventoryService } from 'src/app/service/inventory.service';


@Component({
  selector: 'app-centralinventorystationerypens',
  templateUrl: './centralinventorystationerypens.component.html',
  styleUrls: ['./centralinventorystationerypens.component.css'],
})
export class CentralinventorystationerypensComponent implements OnInit {
  products: any[];
  constructor(private inventoryService: InventoryService) {}
  ngOnInit(): void {
    this.inventoryService.getcentralinventorystationerypens().subscribe(res=>{
console.log(res);
  this.products=res;
  
    });
  }
  productDialog: boolean = false;
  fb: any;
  hideDialog() {
    throw new Error('Method not implemented.');
  }
  submitted: any;
  f: any;
  onSubmit() {
    throw new Error('Method not implemented.');
  }
  addProductForm: FormGroup<any>;
  editProduct(_t124: any) {
    throw new Error('Method not implemented.');
  }

  logout() {
    throw new Error('Method not implemented.');
  }
  getPcode(arg0: any) {
    throw new Error('Method not implemented.');
  }
  pcodeList: any[];
  selectedCode: any;
  openNew() {
    this.productDialog = true;
  }
  selectedProducts: any;

  forms() {
    this.addProductForm = this.fb.group({
      date: ['', [Validators.required]],
      productName: ['', [Validators.required]],
      productCode: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      productId: [''],
    });
  }

  gotoPage(url: string): void {
   // this.inventoryService.gotoPage(url);
  }
}
