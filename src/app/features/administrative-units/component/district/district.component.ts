import { Component } from '@angular/core';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrl: './district.component.scss'
})
export class DistrictComponent {
  items = [
    { name: 'Option 1', checked: false },
    { name: 'Option 2', checked: false },
    { name: 'Option 3', checked: false },
  ];

  // Getter cho checkbox "Select All"
  get allChecked() {
    return this.items.every(item => item.checked);
  }

  // Getter cho trạng thái "indeterminate"
  get indeterminate() {
    return this.items.some(item => item.checked) && !this.allChecked;
  }

  // Thiết lập trạng thái cho tất cả checkbox con khi "Select All" thay đổi
  setAll(event: any) {
    const isChecked = event.target.checked;
    this.items.forEach(item => item.checked = isChecked);
  }

  // Cập nhật trạng thái khi một checkbox con thay đổi
  updateSingleCheckbox(index: number) {
    // Cập nhật giá trị của checkbox con
    const item = this.items[index];
    item.checked = !item.checked;
  }
}
