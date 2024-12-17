import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateProductRequestModel } from '../models/create-product-request.model';
import { ResponseWithDataModel } from '../../../core/models/reponse-with-data.model';
import { UpdateProductRequestModel } from '../models/update-product-request.model';
import { ResponseWithListDataModel } from '../../../core/models/response-with-listdata.model';
import { ProductResponseModel } from '../models/product-response.model';

@Injectable()
export class GroupProductService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }
  create(product: CreateProductRequestModel): Observable<ResponseWithDataModel<string>> {
    return this.http.post<ResponseWithDataModel<string>>(`${this.apiUrl}/Product`, product);
  }
  update(product: UpdateProductRequestModel): Observable<ResponseWithDataModel<string>> {
    return this.http.put<ResponseWithDataModel<string>>(`${this.apiUrl}/Product`, product);
  }
  delete(id: string): Observable<ResponseWithDataModel<string>> {
    return this.http.delete<ResponseWithDataModel<string>>(`${this.apiUrl}/Product/${id}`,{});
  }
  getPaging(page: number, size: number,nameSearch?:string,codeProvice?:string): Observable<any> {
    return this.http.get<ResponseWithListDataModel<ProductResponseModel>>(`${this.apiUrl}/Product/GetPaging?index=${page}&pageSize=${size}`);
  }
}
