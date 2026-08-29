import { inject, Service } from '@angular/core';
import { CartService } from './cart.service';
import { of } from 'rxjs';

@Service()
export class InitService {
  private cartService = inject(CartService);

  init() {
    const cartId = localStorage.getItem('cart_id');
    const cart$ = cartId ? this.cartService.getCart(cartId) : of(null);

    return cart$;
  }
}
