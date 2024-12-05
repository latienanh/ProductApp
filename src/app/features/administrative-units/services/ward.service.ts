import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class WardService {

  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }
  createAndUpdateWard(ward: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/master-data/xa/create-or-update`, ward);
  }
  deleteWard(id: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/master-data/xa/delete-common-result/${id}`,{});
  }
  getPaging(page: number, size: number,nameSearch?:string,codeProvice?:string,codeDistrict?:string): Observable<any> {
    const body = {
      filter: nameSearch??null,
      isActive: null,
      skipCount: (page - 1) * size,
      maTinh: codeProvice,
      maHuyen:codeDistrict,
      maxResultCount: size
    };
    return this.http.post<any>(`${this.apiUrl}/master-data/xa/get-list`, body);
  }
  getAll(codeProvince?:string,codeDistrict?:string): Observable<any> {
    
    const body = {
      filter: null,
      isActive: null,
      skipCount: 0,
      maxResultCount: 999,
      maTinh:codeProvince,
      maHuyen:codeDistrict
    }
    return this.http.post<any>(`${this.apiUrl}/master-data/xa/get-list`, body);
  }
}
