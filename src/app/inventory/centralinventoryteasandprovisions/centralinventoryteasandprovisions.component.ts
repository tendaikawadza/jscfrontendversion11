import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-centralinventoryteasandprovisions',
  templateUrl: './centralinventoryteasandprovisions.component.html',
  styleUrls: ['./centralinventoryteasandprovisions.component.css'],
})
export class CentralinventoryteasandprovisionsComponent implements OnInit {
  
  productDialog=false;
  products: any;

  submitted: any;
  f: any;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  openNew() {
    throw new Error('Method not implemented.');
  }
  getPcode(arg0: any) {
    throw new Error('Method not implemented.');
  }
  selectedCode: any;
  pcodeList: any[];
  logout() {
    throw new Error('Method not implemented.');
  }
  editProduct(_t124: any) {
    throw new Error('Method not implemented.');
  }
  selectedProd(){}
  selectedProducts(_t124: any) {
    throw new Error('Method not implemented.');
  }

  addProductForm: FormGroup<any>;
  hideDialog() {
    throw new Error('Method not implemented.');
  }
  onSubmit(){}
}
