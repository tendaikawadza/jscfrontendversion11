import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  BehaviorSubject,
  Observable,
  catchError,
  map,
  of,
  startWith,
  switchMap,
} from 'rxjs';
import { DataState } from 'src/app/enum/datastate.enum';
import { CustomHttpResponse, Page } from 'src/app/interface/appstates';
import { Invoice } from 'src/app/interface/invoice';
import { State } from 'src/app/interface/state';
import { User } from 'src/app/interface/user';
import { CustomerService } from 'src/app/service/customer.service';
import { NotificationService } from 'src/app/service/notification.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { purchaserequestService } from 'src/app/service/purchaserequest.service';
import { Table } from 'primeng/table';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { SignaturePad } from 'angular2-signaturepad';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css'],
})
export class PurchaseComponent implements OnInit, AfterViewInit {
  isModalBoard: boolean = false;
  div: any;
  boardapproval: FormGroup<any>;
  isAdministationOffice: boolean;
  isModalRequestingAdmin: boolean;
  RequestingAdminapproval: FormGroup<any>;
  isModalAdministationOffice: boolean;
  isModalAdministationOfficer: boolean;

  showModal4() {
    throw new Error('Method not implemented.');
  }
  showModal3() {
    throw new Error('Method not implemented.');
  }
  showModal2() {
    throw new Error('Method not implemented.');
  }
  adminapproval: FormGroup<any>;
  secretaryapproval: FormGroup<any>;
  administrationOfficerForm: FormGroup<any>;
  isModalSecretary = false;
  isAdministationOfficer = false;

  assistAdminApproval() {
    throw new Error('Method not implemented.');
  }
  constructor(
    private purchaserequestService: purchaserequestService,
    private customerService: CustomerService,
    private messageservice: MessageService,
    public fb: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {}
  @ViewChild('pdfContent') pdfContent: ElementRef;
  visible = false;
  viewmodal = false;
  displayModal: boolean = false;
  date: any;
  signatureImg: string;
  // @ViewChild(SignaturePad) signaturePad: SignaturePad;
  myForm: FormGroup;
  signaturePadOptions: Object = {
    minWidth: 2,
    canvasWidth: 700,
    canvasHeight: 300,
  };
  files: any;
  userId: any = localStorage.getItem('user');
  departmentcode: any;
  selecteddepartmentcode: { name: string; code: string }[];
  purchaserequests: any[];
  purchaseRequestState$: Observable<State<CustomHttpResponse<any>>>;
  private dataSubject = new BehaviorSubject<any>(null);
  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoadingSubject.asObservable();
  readonly DataState = DataState;
  purchaserequest: any;
  state: any;
  events: string[];
  PURCHACE_ID = 'id';
  purchaeDetails: any;
  roles: any = localStorage.getItem('roles');
  @ViewChild(SignaturePad) signaturePad: SignaturePad;
  isEdit = false;

  ngOnInit(): void {
    this.getALlPurchaserequests();
    this.groupingForm();
  }

  purchaseDetails() {
    this.events = ['2020', '2021', '2022', '2023'];
    this.purchaseRequestState$ = this.activatedRoute.paramMap.pipe(
      switchMap((params: any) => {
        return this.customerService
          .invoice$(+params.get(this.PURCHACE_ID))
          .pipe(
            map((response) => {
              //  this.notification.onDefault(response.message);
              console.log(response);
              this.dataSubject.next(response);
              return { dataState: DataState.LOADED, appData: response };
            }),
            startWith({ dataState: DataState.LOADING }),
            catchError((error: string) => {
              // this.notification.onError(error);
              return of({ dataState: DataState.ERROR, error });
            })
          );
      })
    );
  }
  viewDetails(item: any) {
    this.viewmodal = true;
    this.purchaeDetails = item;

    this.customerService.getPurchaseDetails(item?.id, '');
  }

  ngAfterViewInit() {
    console.log('firrirrrrrr');
    this.roles = JSON.parse(this.roles);

    // this.signaturePad.set('minWidth', 5);
    // this.signaturePad.clear();
  }

  drawComplete() {
    console.log(this.signaturePad.toDataURL());
  }

  drawStart() {
    console.log('begin drawing');
  }

  formSetup() {
    this.myForm = this.fb.group({
      date: ['', Validators.required],
      departmentCode: ['', Validators.required],
      receiverEmail: ['', Validators.required],
      reason: ['', Validators.required],
      itemDescription: ['', Validators.required],
      itemNumber: ['', Validators.required],
      unitPrice: ['', Validators.required],
      estimatedValue: ['', Validators.required],
      quantity: ['', Validators.required],
      id: [''],
    });
    this.selecteddepartmentcode = [
      { name: 'IT', code: 'ITPR12' },
      { name: 'FINANCE', code: 'FINPR12' },
      { name: 'ADMINSTRATION', code: 'ADMINPR13' },
      { name: 'ACCOUNTS', code: 'ACCPR14' },
      { name: 'HUMANRESOURSE', code: 'HRPR15' },
    ];
  }

  formSetup2() {
    this.adminapproval = this.fb.group({
      date: ['', Validators.required],

      receiverEmail: ['', Validators.required],

      id: [''],
    });
    this.selecteddepartmentcode = [
      { name: 'IT', code: 'ITPR12' },
      { name: 'FINANCE', code: 'FINPR12' },
      { name: 'ADMINSTRATION', code: 'ADMINPR13' },
      { name: 'ACCOUNTS', code: 'ACCPR14' },
      { name: 'HUMANRESOURSE', code: 'HRPR15' },
    ];
  }

  groupingForm() {
    this.formSetup();
    this.initSecretaryForm();
    this.initAdministrationOfficerForm();
    this.initAdminapprovalForm();
    this.initBoardForm();
    this.initRequestingAdminapprovalForm();
  }

  initSecretaryForm() {
    this.secretaryapproval = this.fb.group({
      date: ['', Validators.required],
      receiverEmail: ['', Validators.required],
      id: [''],
    });
  }

  initAdministrationOfficerForm() {
    this.administrationOfficerForm = this.fb.group({
      date: ['', Validators.required],
      receiverEmail: ['', Validators.required],
      id: [''],
    });
  }

  initBoardForm() {
    this.boardapproval = this.fb.group({
      date: ['', Validators.required],
      receiverEmail: ['', Validators.required],
      id: [''],
    });
  }

  initAdminapprovalForm() {
    this.adminapproval = this.fb.group({
      date: ['', Validators.required],
      receiverEmail: ['', Validators.required],
      id: [''],
    });
  }

  initRequestingAdminapprovalForm() {
    this.RequestingAdminapproval = this.fb.group({
      date: ['', Validators.required],
      receiverEmail: ['', Validators.required],
      id: [''],
    });
  }

  showModal(kind?: string) {
    console.log(kind);
    switch (kind) {
      case 'secretary':
        this.isModalSecretary = true;
        break;
      case 'administration-officer':
        this.isModalAdministationOfficer = true;
        break;
      case 'assist-administration':
        this.isModalAdministationOffice = true;
        break;
        case 'principal-administration':
          this.isModalAdministationOffice = true;
          break;
      case 'board':
        this.isModalBoard = true;
        break;
      case 'Requesting Admin':
        this.isModalRequestingAdmin = true;
        break;
      default:
        this.displayModal = true;
        break;
    }
  }

  createPurchaserrequests(item: any) {
    this.purchaserequestService.createpurchaserequest(item);
  }

  addnew() {
    this.visible = true;
    this.isEdit = false;
  }

  deletepurchaserequest(item: any) {
    // this.purchaserequestService.delete$(item);
  }

  getALlPurchaserequests() {
    this.purchaserequestService
      .getAllpurchaserequest()
      .subscribe((data: any) => {
        this.purchaserequests = data;

        data;
        console.log(data, 'this.purchaserequests:::::');
      });
  }

  editPurchaserequests(data: any) {
    this.isEdit = true;
    console.log(data);
    this.myForm.patchValue(data);
    this.visible = true;
  }

  showSuccessMessage(arg0: string) {
    throw new Error('Method not implemented.');
  }

  getEventValue($event: Event): any {
    throw new Error('Method not implemented.');
  }

  newInvoice(): void {
    if (this.myForm.invalid) {
      return;
    }

    const obj = {};
    const tmparr: any = [];
    const resobj = this.myForm.value;
    resobj['signature'] = 'test';
    resobj['departmentCode'] = resobj['departmentCode']?.code;
    console.log(resobj);
    tmparr.push(resobj);

    if (this.isEdit === false) {
      this.customerService.createpurchaserequest(tmparr).subscribe((res) => {
        console.log(res);
        this.messageservice.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Succsssfull Added Purchase Information',
          life: 3000,
        });
      });
    } else {
      this.customerService
        .updatepurchaserequest(tmparr, resobj?.id)
        .subscribe((res) => {
          console.log(res);
          this.messageservice.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Succsssfull Updated Purchase Information',
            life: 3000,
          });
        });
    }
  }
  getBase64Image(img: any) {
    var canvas = document.createElement('canvas');
    console.log('image');
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx: any = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL('image/png');
    return dataURL;
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
