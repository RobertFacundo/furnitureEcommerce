export interface CartItemType {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface CartType {
  items: CartItemType[];
}