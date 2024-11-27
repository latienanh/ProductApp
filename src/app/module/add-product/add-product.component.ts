import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../Dto/Product';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {
  newProduct: Product = { id: 0, name: '', code: '', soldQuantity: 0, stockQuantity: 0, expirationDate: '', category: '' };
  @Output() toggleView = new EventEmitter<string>();

  constructor(private productService: ProductService) {}

  addProduct(): void {
    this.newProduct.id = this.productService.getProducts().length + 1;
    this.productService.addProduct(this.newProduct);
    this.newProduct = { id: 0, name: '', code: '', soldQuantity: 0, stockQuantity: 0, expirationDate: '', category: '' };
  }
  showProduct():void{
    this.toggleView.emit('product')
  }
}
