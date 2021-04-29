import {Client} from './client';
import {RequestOrder} from './request-order';
import {Address} from './address';
import {Item} from './item';

export class PurchaseRequest {

  client: Client;
  requestOrder: RequestOrder;
  fromAddress: Address;
  toAddress: Address;
  items: Item[];
}
