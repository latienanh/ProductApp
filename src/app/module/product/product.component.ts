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
  
  products: Product[] = [];

  constructor(private productService:ProductService){
      
  }
  ngOnInit(): void {
    this.products = this.productService.getProducts()
  }
  showAddProduct():void{
    console.log("da vao day")
    this.toggleView.emit('add-product')
  }
}
