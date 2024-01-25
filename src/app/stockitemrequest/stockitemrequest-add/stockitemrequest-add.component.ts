import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-stockitemrequest-add',
  templateUrl: './stockitemrequest-add.component.html',
  styleUrls: ['./stockitemrequest-add.component.css'],
})
export class StockitemrequestAddComponent implements OnInit {
  @ViewChild('pdfContent') pdfContent: ElementRef;
  selecteddepartmentcode:any=[];
  viewmodal=false;
  gridRows: any;
  stockItemRequestDetails: any;
  visible=false;
stockItemRequest: any[];
  
  ngOnInit(): void {
    
  }
  deletepurchaserequest(_t53: any) {
    throw new Error('Method not implemented.');
  }
  editpurchaserequestaction(_t53: any) {
    throw new Error('Method not implemented.');
  }
  viewDetails(_t53: any) {
    throw new Error('Method not implemented.');
  }
 
  clearSignature() {
    throw new Error('Method not implemented.');
  }
  onFileSelected($event: Event) {
    throw new Error('Method not implemented.');
  }

  newstockitemrequests(){}
  addnew(){
    this.visible=true;
  }
  addRow() {
    throw new Error('Method not implemented.');
  }
  removeRow(_t56: number) {
    throw new Error('Method not implemented.');
  }
  myForm: FormGroup<any>;


  newstockitemrequest() {
    throw new Error('Method not implemented.');
  }

  exportAsPDF(): void {
    const pdf = new jsPDF();

    // Get the HTML content of the div
    const content = this.pdfContent.nativeElement;

    // Convert the HTML content to a canvas
    html2canvas(content).then((canvas) => {
      // Convert the canvas to an image
      const imgData = canvas.toDataURL('image/png');

      // Add the image to the PDF
      pdf.addImage(imgData, 'PNG', 15, 40, 180, 180); // Adjust the dimensions as needed

      // Download the PDF
      pdf.save('exported-document.pdf');
    });
  }
}
