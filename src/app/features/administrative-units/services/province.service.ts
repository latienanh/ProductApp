import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable()
export class ProvinceService {
  private apiUrl = environment.apiUrl; // URL API của bạn

  constructor(private http: HttpClient) {}

  createAndUpdateProvince(province: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/master-data/tinh/create-or-update`, province);
  }
  deleteProvince(id: number): Observable<any> {
    console.log("da vao day")
    return this.http.post<any>(`${this.apiUrl}/master-data/tinh/delete-common-result/${id}`,{});
  }
  getPaging(page: number, size: number,nameSearch?:string): Observable<any> {
    const body = {
      filter: nameSearch??null,
      isActive: null,
      skipCount: (page - 1) * size,
      maxResultCount: size
    };
    return this.http.post<any>(`${this.apiUrl}/master-data/tinh/get-list`, body);
  }
  getAll(): Observable<any> {
    const body = {
        type: 1,
        cascader: ""
    };
    return this.http.post<any>(`${this.apiUrl}/master-data/select-data-source/get-combo-data-source`, body);
  }
  
}
