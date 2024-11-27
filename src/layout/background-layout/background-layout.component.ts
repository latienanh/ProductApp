import { Component } from '@angular/core';

@Component({
  selector: 'app-background-layout',
  templateUrl: './background-layout.component.html',
  styleUrl: './background-layout.component.scss',  
})
export class BackgroundLayoutComponent {
  currentPage:string  = 'add-product';

  toggleView(namePage: string): void {
    console.log(namePage)
  
    this.currentPage = namePage;
  }
}
