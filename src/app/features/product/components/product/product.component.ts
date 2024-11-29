import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { CategoryService } from '../../../category/services/category.service';
import { Category } from '../../../category/models/category';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  categories: Category[] = [];
  selectedCategory: number | null = null;
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.categories = this.categoryService.getCategories();
  }
  removeProduct(id: number) {
    this.productService.deleteProduct(id);
    this.products = this.productService.getProducts();
  }
  showAddProduct(): void {
    this.router.navigate(['add'], { relativeTo: this.route});
  }
  showUpdateProduct(id: number): void {
    this.router.navigate([`update/${id}`], { relativeTo: this.route});
  }
  filterProduct() {
    console.log(this.selectedCategory);
  }
}
