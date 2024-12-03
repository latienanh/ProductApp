import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable()
export class ProvinceService {
  private apiUrl = environment.apiUrl; // URL API của bạn

  constructor(private http: HttpClient) {}

  // Phương thức để lấy thông tin chi tiết của một tỉnh theo ID
  getProvinceById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Phương thức để tạo mới một tỉnh
  createProvince(province: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, province);
  }

  // Phương thức để cập nhật thông tin một tỉnh theo ID
  updateProvince(id: number, province: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, province);
  }

  // Phương thức để xóa một tỉnh theo ID
  deleteProvince(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  getPaging(page: number, size: number): Observable<any> {
    const body = {
      filter: null,
      isActive: null,
      skipCount: (page - 1) * size,
      maxResultCount: size
    };
    return this.http.post<any>(`${this.apiUrl}/master-data/tinh/get-list`, body);
  }
  
}
