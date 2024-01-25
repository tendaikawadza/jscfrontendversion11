import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import 'jspdf-autotable';


@Component({
  selector: 'app-stockitemrequest-details',
  templateUrl: './stockitemrequest-details.component.html',
  styleUrls: ['./stockitemrequest-details.component.css']
})
export class StockitemrequestDetailsComponent {
signaturePadOptions: any;

assistAdminApproval() {
throw new Error('Method not implemented.');
}
displayModal: any;
adminapproval: FormGroup<any>; 
@ViewChild('pdfContent') pdfContent: ElementRef;
showModal() {
throw new Error('Method not implemented.');
}
events1: any[];
state: any;
stockitemrequestDetails: any;




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
