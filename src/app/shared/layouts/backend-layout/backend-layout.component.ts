import { Component } from '@angular/core';

@Component({
  selector: 'app-backend-layout',
  templateUrl: './backend-layout.component.html',
  styleUrl: './backend-layout.component.scss',
  host: { '[attr.ngSkipHydration]': 'true' // Thêm thuộc tính ngSkipHydration vào host component 
    }
})
export class BackendLayoutComponent  {
  
}


