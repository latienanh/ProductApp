import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { Category } from '../../../category/models/category';
import { ProductService } from '../../services/product.service';
import { CategoryService } from '../../../category/services/category.service';


@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.scss'
})
export class UpdateProductComponent {
  @Input() Id:any; 
  @Output() toggleView = new EventEmitter<string>();

  newProduct: Product = { id: 0, name: '', code: '', soldQuantity: 0, stockQuantity: 0, expirationDate: '', category: '' };
  categories : Category[] = [];

  constructor(private productService: ProductService,private categoryService:CategoryService) {
    this.categories = categoryService.getCategories();
  }

  ngOnInit() {
    console.log(this.Id)
    if (this.Id) {
      this.loadProduct(this.Id);
    }
  }
  loadProduct(id: number): void {
    // Lấy thông tin sản phẩm từ ProductService bằng id và cập nhật newProduct
    const product = this.productService.getProductById(id);
    if (product) {
      this.newProduct = { ...product };
    }
  }

  updateProduct(): void {
    // Cập nhật sản phẩm
    this.productService.updateProduct(this.newProduct);
    this.newProduct = { id: 0, name: '', code: '', soldQuantity: 0, stockQuantity: 0, expirationDate: '', category: '' };
    this.toggleView.emit('product');
  }
}
