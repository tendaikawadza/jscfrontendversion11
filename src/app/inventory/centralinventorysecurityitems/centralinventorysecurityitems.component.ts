import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Dialog } from 'primeng/dialog';

@Component({
  selector: 'app-centralinventorysecurityitems',
  templateUrl: './centralinventorysecurityitems.component.html',
  styleUrls: ['./centralinventorysecurityitems.component.css'],
})
export class CentralinventorysecurityitemsComponent implements OnInit{
  addProductForm: FormGroup;
  productDialog = false;
  products: any;
  ngOnInit(): void {
    
  }
  openNew() {
    throw new Error('Method not implemented.');
  }
  pcodeList: any[];
  getPcode(arg0: any) {
    throw new Error('Method not implemented.');
  }
  selectedCode: any;
  logout() {
    throw new Error('Method not implemented.');
  }
  editProduct(_t124: any) {
    throw new Error('Method not implemented.');
  }
  selectedProd() {}
  selectedProducts(_t124: any) {
    throw new Error('Method not implemented.');
  }
  hideDialog() {}

  onSubmit() {
    throw new Error('Method not implemented.');
  }
  f: any;
  submitted: any;
}
