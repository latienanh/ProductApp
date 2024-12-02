import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../../core/services/http.service';
import { UserUpdate } from '../models/user.update';

@Injectable()
export class UserService {
  apiURL =
    'http://test.nghiencuukhoahoc.com.vn/api/app/account';
  constructor(private httpService: HttpService) {}

  getUserProfile(): Observable<any> {
    return this.httpService.get<any>(this.apiURL+"/get-account-bootstrap");
  }
  updateUser(userUpdate:UserUpdate): Observable<any> {
    return this.httpService.post<any>(this.apiURL+"/update-account-info",userUpdate);
  }
}
