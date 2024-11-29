import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrl: './customize.component.scss'
})
export class CustomizeComponent implements OnInit,AfterViewInit {
  isFluid: boolean = false;


  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      // Chạy trên trình duyệt
      const savedIsFluid = JSON.parse(
        localStorage.getItem('isFluid') || 'false'
      );
      this.isFluid = savedIsFluid;
    }
  }
  ngAfterViewInit(): void {
    if (typeof document !== 'undefined') {
      // Cập nhật lại các lớp CSS cho phần tử container
      const container = document.querySelector('[data-layout]');
      if (container) {
        if (this.isFluid) {
          container.classList.remove('container');
          container.classList.add('container-fluid');
        } else {
          container.classList.remove('container-fluid');
          container.classList.add('container');
        }
      }
    }
  }
  onModeChange(event: any): void {
    // Khi checkbox thay đổi, cập nhật giá trị isFluid trong localStorage
    this.isFluid = event.target.checked;
    localStorage.setItem('isFluid', JSON.stringify(this.isFluid));

    // Cập nhật lại các lớp CSS cho phần tử container
    const container = document.querySelector('[data-layout]');
    if (container) {
      if (this.isFluid) {
        container.classList.remove('container');
        container.classList.add('container-fluid');
      } else {
        container.classList.remove('container-fluid');
        container.classList.add('container');
      }
    }
  }
}
