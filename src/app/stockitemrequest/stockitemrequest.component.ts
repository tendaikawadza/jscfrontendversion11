import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-stockitemrequest',
  templateUrl: './stockitemrequest.component.html',
  styleUrls: ['./stockitemrequest.component.css'],
})
export class StockitemrequestComponent implements OnInit {
  visible: boolean = false;
  editstockitemrequests(arg0: () => void) {
    throw new Error('Method not implemented.');
  }
  deletestockitemrequests(arg0: () => void) {
    throw new Error('Method not implemented.');
  }
  myForm: FormGroup<any>;
  selecteddepartmentcode: any[];
  // you wrong put this method no have return value where your variable contain value,ok ok the value must be array of object for now ,we put array empty you later can put value to display on table,ok
  stockitemrequest: any[] = [];
  onStockitemrequest(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    this.initForm();
  }


  initForm(): void {
    this.myForm =  new FormGroup({
      date: new FormControl(''),
      reason: new FormControl(''),
      departmentCode: new FormControl(''),
      receiverEmail: new FormControl(''),
      itemDescription: new FormControl(''),
      itemNumber: new FormControl(''),
      unitPrice: new FormControl(''),
      estimatedValue: new FormControl(''),
      quantity: new FormControl(''),
      id: new FormControl('')
    })
  }

  signaturePadOptions: any;

  viewDetails(_t10: any) {
    throw new Error('Method not implemented.');
  }
  getEventValue($event: Event): any {
    throw new Error('Method not implemented.');
  }
  dt1: any;
  addnew() {
   this.visible=true;
  }
}
