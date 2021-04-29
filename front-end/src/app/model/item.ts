import {CartOrder} from './cart-order';

export class Item {

  img: string;
  quantity: number;
  price: number;

  constructor(cartOrder: CartOrder) {
    this.img  = cartOrder.img;
    this.quantity = cartOrder.quantity;
    this.price = cartOrder.price
  }
}
