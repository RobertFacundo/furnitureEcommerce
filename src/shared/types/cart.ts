export interface CartItemType {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  size?: string;
  color?: string;
}

export interface CartType {
  items: CartItemType[];
}