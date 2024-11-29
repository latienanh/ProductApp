import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { Category } from '../../../category/models/category';
import { ProductService } from '../../services/product.service';
import { CategoryService } from '../../../category/services/category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.scss',
})
export class UpdateProductComponent {
  newProduct: Product = {
    id: 0,
    name: '',
    code: '',
    soldQuantity: 0,
    stockQuantity: 0,
    expirationDate: '',
    category: '',
  };
  categories: Category[] = [];
  productId: number = 0;
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.categories = categoryService.getCategories();
  }

  ngOnInit() {
    this.productId = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    if (this.productId) {
      this.loadProduct(this.productId);
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
    this.newProduct = {
      id: 0,
      name: '',
      code: '',
      soldQuantity: 0,
      stockQuantity: 0,
      expirationDate: '',
      category: '',
    };
    this.router.navigate(["../.."],{relativeTo:this.route})
  }
  discardUpdateProduct(): void {
    this.router.navigate(["../.."],{relativeTo:this.route})
  }
}
