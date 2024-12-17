import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ResponseWithDataModel } from '../../../core/models/reponse-with-data.model';
import { ResponseWithListDataModel } from '../../../core/models/response-with-listdata.model';
import { CreateGroupProductRequestModel } from '../models/create-group-product-request.model';
import { GroupProductResponseModel } from '../models/group-product-response.model';
import { UpdateGroupProductRequestModel } from '../models/update-group-product-request.model';

@Injectable()
export class GroupProductService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }
  create(product: CreateGroupProductRequestModel): Observable<ResponseWithDataModel<string>> {
    return this.http.post<ResponseWithDataModel<string>>(`${this.apiUrl}/ProductGroup`, product);
  }
  update(product: UpdateGroupProductRequestModel): Observable<ResponseWithDataModel<string>> {
    return this.http.put<ResponseWithDataModel<string>>(`${this.apiUrl}/ProductGroup`, product);
  }
  delete(id: string): Observable<ResponseWithDataModel<string>> {
    return this.http.delete<ResponseWithDataModel<string>>(`${this.apiUrl}/ProductGroup/${id}`,{});
  }
  getPaging(page: number, size: number,nameSearch?:string): Observable<any> {
    return this.http.get<ResponseWithListDataModel<GroupProductResponseModel>>(`${this.apiUrl}/ProductGroup/GetPaging?index=${page}&pageSize=${size}`);
  }
}
