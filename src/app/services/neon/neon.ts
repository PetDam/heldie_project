import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

export interface Product {
  id?: number;
  img: string;
  title: string;
  subtitle: string;
  text: string;
}

@Injectable({
  providedIn: 'root',
})
export class Neon {
  http = inject(HttpClient);
  url = 'https://node-api-nine-zeta.vercel.app';

  getProducts() {
    return this.http.get<Product[]>(`${this.url}/api/products`);
  }
}
