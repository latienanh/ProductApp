import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserUpdate } from '../models/user.update';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  apiURL =
    'http://test.nghiencuukhoahoc.com.vn/api/app/account';
  constructor(private httpClient : HttpClient) {}

  getUserProfile(): Observable<any> {
    return this.httpClient.get<any>(this.apiURL+"/get-account-bootstrap");
  }
  updateUser(userUpdate:UserUpdate): Observable<any> {
    return this.httpClient.post<any>(this.apiURL+"/update-account-info",userUpdate);
  }
}
