import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-centralinventoryteaandprovisions',
  templateUrl: './centralinventoryteaandprovisions.component.html',
  styleUrls: ['./centralinventoryteaandprovisions.component.css']
})
export class CentralinventoryteaandprovisionsComponent  implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  productDialog: boolean = true;
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
products: any[];
logout() {
throw new Error('Method not implemented.');
}
getPcode(arg0: any) {
throw new Error('Method not implemented.');
}
pcodeList: any[];
selectedCode: any;
openNew() {
throw new Error('Method not implemented.');
}
selectedProducts: any;


forms(){
  this.addProductForm = this.fb.group({
      date: ['', [Validators.required]],
      productName: ['', [Validators.required]],
      productCode: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      productId: [''],

  });


}
}