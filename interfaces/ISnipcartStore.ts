export interface ICartItems {
  count: number;
  items: Array<IItems>;
}

export interface IItems {
  id: string;
  name: string;
  price: number;
  totalPrice: number;
  quantity: number;
  image: string;
}

export interface ICart {
  items: ICartItems;
  total: number;
}

export enum Status {
  SignedIn = "SignedIn",
  SignedOut = "SignedOut",
}

export interface ICustomer {
  email: string;
  sessionToken: string;
  status: Status;
}

export interface IStore {
  cart: ICart;
  customer: ICustomer;
}
