import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { HttpClient } from '@angular/common/http';
import { Product } from './shared/models/product';
import { Pagination } from './shared/models/pagination';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  // protected readonly title = signal('client');
  baseUrl = 'https://localhost:5001/api/';
  private http = inject(HttpClient);
  title = 'Skinet';
  // products: Product[] = [];
  products = signal<Product[]>([]);
  // private cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.http.get<Pagination<Product>>(this.baseUrl + 'products').subscribe({
      // next: (response) => (this.products = response.data),
      next: (response) => {
        this.products.set(response.data);
      },
      error: (error) => console.log(error),
      // console.log('after assignment', this.products);
      complete: () => console.log('complete'),
    });
  }
}
