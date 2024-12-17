import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../features/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'], // Sửa `styleUrl` thành `styleUrls`
})
export class HeaderComponent {
  constructor(private router: Router, private authService: AuthService) {}

  logout() {
    const confirmLogout = confirm('Bạn có chắc chắn muốn đăng xuất?');
    if (confirmLogout) {
      this.authService.logout();

      this.router.navigate(['/auth/logout']); // Điều hướng đến trang logout
    }
  }
}
