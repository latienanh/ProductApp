import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent implements OnChanges {
  @Input() currentPage: number = 1; // Trang hiện tại
  @Input() maxPage: number = 1; // Tổng số trang
  @Output() pageChanged= new EventEmitter<number>(); // Emit sự kiện khi trang thay đổi

  pages: number[] = [];

  ngOnChanges(): void {
    this.updatePages();
  }

  private updatePages(): void {
    const totalPages = this.maxPage;
    const currentPage = this.currentPage;
    const pageLimit = 5; // Hiển thị tối đa 5 nút

    this.pages = [];

    if (totalPages <= pageLimit) {
      // Nếu tổng số trang ít hơn hoặc bằng giới hạn, hiển thị tất cả trang
      this.pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
      // Hiển thị các trang với dấu ba chấm (ellipsis)
      if (currentPage <= 3) {
        this.pages = [1, 2, 3, -1, totalPages];
      } else if (currentPage >= totalPages - 2) {
        this.pages = [1, -1, totalPages - 2, totalPages - 1, totalPages];
      } else {
        this.pages = [1, -1, currentPage - 1, currentPage, currentPage + 1, -1, totalPages];
      }
    }
  }

  goToPage(page: number): void {
    if (page !== -1 && page !== this.currentPage) {
      this.pageChanged.emit(page);  // Emit page change
    }
  }
}
