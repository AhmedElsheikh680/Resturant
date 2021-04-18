export class Order {

  id: number;
  name: string;
  price: number;
  img: string;
  description: string;
  data_create: Date;
  data_update: Date;

  constructor(id: number, name: string, price: number, img: string, description: string, data_create: Date, data_update: Date) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.img = img;
    this.description = description;
    this.data_create = data_create;
    this.data_update = data_update;
  }
}
