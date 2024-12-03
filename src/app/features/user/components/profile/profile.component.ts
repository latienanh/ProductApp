import {
  Component,
  OnInit
} from '@angular/core';
import { UserUpdate } from '../../models/user.update';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  userUpdate: UserUpdate = {
    userId: '',
    avatarDocumentId: '',
    email: '',
    phoneNumber: null,
    name: '',
    ngaySinh: '',
    gioiTinh: 0,
    diaChi: null,
    maTinh: null,
    maHuyen: null,
    maXa: null,
  };
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.fetchProfile();
  }
  fetchProfile(): void {
    this.userService.getUserProfile().subscribe({
      next: (response) => {
        console.log('Data fetched successfully:', response);
        this.userUpdate = {
          userId: response.id,
          avatarDocumentId: response.userSession.avatarDocumentId,
          email: response.userSession.email,
          phoneNumber: response.userSession.phoneNumber,
          name: response.userSession.name,
          ngaySinh: response.userSession.ngaySinh,
          gioiTinh: response.userSession.gioiTinh,
          diaChi: response.userSession.diaChi,
          maTinh: response.userSession.maTinh,
          maHuyen: response.userSession.maHuyen,
          maXa: response.userSession.maXa,
        };
        console.log(this.userUpdate);
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      },
    });
  }
  updateUser() {
    this.userService.updateUser(this.userUpdate).subscribe({
      next: (response) => {
        console.log('Data fetched successfully:', response);
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      },
    });
  }
}
