import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { getListDistrictResponse } from '../models/district/get-list-district-response.model';

@Injectable()
export class DistrictService  {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }
  createAndUpdateDistrict(district: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/master-data/huyen/create-or-update`, district);
  }
  deleteDistrict(id: number): Observable<any> {
    console.log("da vao day")
    return this.http.post<any>(`${this.apiUrl}/master-data/huyen/delete-common-result/${id}`,{});
  }
  getPaging(page: number, size: number,nameSearch?:string,codeProvice?:string): Observable<any> {
    const body = {
      filter: nameSearch??null,
      isActive: null,
      skipCount: (page - 1) * size,
      maTinh:codeProvice,
      maxResultCount: size
    };
    return this.http.post<getListDistrictResponse>(`${this.apiUrl}/master-data/huyen/get-list`, body);
  }
  getAll(codeProvince?:string): Observable<any> {
    const body = {
      filter: null,
      isActive: null,
      skipCount: 0,
      maxResultCount: 999,
      maTinh:codeProvince
    }
    return this.http.post<getListDistrictResponse>(`${this.apiUrl}/master-data/huyen/get-list`, body);
  }
}
