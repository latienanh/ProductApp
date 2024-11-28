import { Component } from '@angular/core';

@Component({
  selector: 'app-background-layout',
  templateUrl: './background-layout.component.html',
  styleUrl: './background-layout.component.scss',  
})
export class BackgroundLayoutComponent {
  currentPage: string = 'product';
  selectedProductId: number = 0;
  selectedCategoryId:number =0;

  toggleView(pageName: string): void {
    console.log(pageName);
    this.currentPage = pageName;
  }

  setSelectedProductId(id: number): void {
    console.log(id);
    this.selectedProductId = id;
  }
  setSelectedCategoryId(id: number): void {
    console.log(id);
    this.selectedCategoryId = id;
  }
}
