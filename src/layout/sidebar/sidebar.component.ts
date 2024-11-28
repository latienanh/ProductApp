import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  @Output() toggleView = new EventEmitter<string>();
  
  showAddProduct():void{
  
    this.toggleView.emit('add-product')
  }
  showProduct():void{
    console.log("vao day")
    this.toggleView.emit('product')
  }
  showAddCategory():void{
  
    this.toggleView.emit('add-category')
  }
  showCategory():void{
  
    this.toggleView.emit('category')
  }
  
}
