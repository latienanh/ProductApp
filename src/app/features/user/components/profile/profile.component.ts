import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { UserUpdate } from '../../models/user.update';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  validateForm!: FormGroup;
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

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.email, Validators.required]],
      phoneNumber: [null, [Validators.required, Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{10}$/)]],
    });
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
        this.validateForm.patchValue(this.userUpdate);
        console.log(this.userUpdate);
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      },
    });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      this.userUpdate = { ...this.userUpdate, ...this.validateForm.value };
      this.userService.updateUser(this.userUpdate).subscribe({
        next: (response) => {
          console.log('Data updated successfully:', response);
        },
        error: (error) => {
          console.error('Error updating data:', error);
        },
      });
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity();
        }
      });
    }
  }
}
