import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../Dto/Product';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {

  @Output() toggleView = new EventEmitter<string>();
  @Output() setSelectedProductId = new EventEmitter<number>();
  products: Product[] = [];
  constructor(private productService:ProductService){
      
  }
  ngOnInit(): void {
    this.products = this.productService.getProducts()
  }
  removeProduct(id:number){
    console.log("vao de xoa",id)
    this.productService.deleteProduct(id);
    this.products = this.productService.getProducts()
  }
  showAddProduct():void{
    this.toggleView.emit('add-product')
  }
  showUpdateProduct(id:number):void{
    console.log("vao update",id)
    this.setSelectedProductId.emit(id);
    this.toggleView.emit('update-product');
  }
}
