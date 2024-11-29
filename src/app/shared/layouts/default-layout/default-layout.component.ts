import { Component } from '@angular/core';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.scss',
  host: { '[attr.ngSkipHydration]': 'true' // Thêm thuộc tính ngSkipHydration vào host component 
  }
})
export class DefaultLayoutComponent {

}
