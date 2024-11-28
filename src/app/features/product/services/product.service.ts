import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable()
export class ProductService {

  constructor() { }

  private products: Product[] = [
    { id: 1, name: 'Product 1', code: 'P001', soldQuantity: 50, stockQuantity: 150, expirationDate: '2025-12-31', category: 'Category 1' },
    { id: 2, name: 'Product 2', code: 'P002', soldQuantity: 30, stockQuantity: 70, expirationDate: '2024-06-30', category: 'Category 2' },
    { id: 3, name: 'Product 3', code: 'P003', soldQuantity: 20, stockQuantity: 180, expirationDate: '2023-11-15', category: 'Category 3' }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(product: Product): void {
    this.products.push(product);
  }
  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }
  updateProduct(updatedProduct: Product): void {
    const index = this.products.findIndex(product => product.id === updatedProduct.id);
    if (index !== -1) {
      this.products[index] = updatedProduct;
    }
  }

  deleteProduct(id: number): void {
    this.products = this.products.filter(product => product.id !== id);
  }
}
