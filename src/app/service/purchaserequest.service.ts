import { Observable } from 'rxjs';
import { CustomHttpRespone } from '../model/custom-http-response';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class purchaserequestService {
  server: any;
  host: any = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public createpurchaserequest(Form: any): Observable<any | HttpErrorResponse> {
    return this.http.post<any>(
      '${this.host}/purchase-requisition/create',
      FormData
    );
  }

  getAllpurchaserequest() {
    const url = `${this.host}/purchase-requisition/all`;
    return this.http.get<any[]>(url);
  }
  // you can contionue here


  editPurchaseRequest(id: number) {
    const url = `${this.host}/purchase-requisition/${id}`;
    return this.http.get<any[]>(url);
  }




  public adminApproval(Form: any): Observable<any | HttpErrorResponse> {
    return this.http.post<any>(
      '${this.host}/adminApproval/create',
      FormData
    );
  }





  
//   editPurchaseRequest(purchaserequest:purchaserequest):Observable<purchaserequest>{

//   return this.http.put<purchaserequest>('${this.host}/purchase-requisition/${data.id}', purchaserequest);
// }








}
