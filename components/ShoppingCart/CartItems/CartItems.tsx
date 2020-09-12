import React from "react";
import { ICartItems } from "../../../interfaces/ISnipcartStore";
import CartItem from "./CartItem/CartItem";

export interface IProps {
  cartItems: ICartItems;
}

export default function CartItems(props: IProps) {
  return (
    <div>
      {props.cartItems.items.map((item, i) => (
        <CartItem item={item} key={i} />
      ))}
    </div>
  );
}
