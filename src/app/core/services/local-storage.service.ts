import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({ providedIn: 'root'})
export class LocalStorageService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  removeItemLocalStorage(key: string): void {
    if (this.isCheckPlatformBrowser()) {
      localStorage.removeItem(key); // Remove item from localStorage
    }
  }
  
  getItemLocalStorage(key: string): string | null {
    return this.isCheckPlatformBrowser() ? localStorage.getItem(key) : null;
  }
  
  setItemLocalStorage(key: string, value: string): void {
    if (this.isCheckPlatformBrowser()) {
      localStorage.setItem(key, value);
    }
  }  
  isCheckPlatformBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }
}
