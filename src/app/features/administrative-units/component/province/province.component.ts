import { Component } from '@angular/core';
import { ProvinceService } from '../../services/province.service';
import { ProvinceResponse } from '../../models/province/province-response.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-province',
  templateUrl: './province.component.html',
  styleUrl: './province.component.scss',
})
export class ProvinceComponent {
  provinces: ProvinceResponse[] = [];
  currentPage = 1;
  pageSize = 10;
  constructor(
    private provinceService: ProvinceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.loadProvinces();
  }
  loadProvinces(): void {
    this.provinceService.getPaging(this.currentPage, this.pageSize).subscribe({
      next: (data) => {
        this.provinces = data.items;
      },
      error: (error) => {
        console.error('Error fetching provinces', error);
      },
    });
  }
  showAddProvince(): void {
    this.router.navigate(['/add'],{relativeTo:this.route})
  }
}
