import React from "react";
import { IItems } from "../../../../interfaces/ISnipcartStore";
export interface IProps {
  item: IItems;
}
export default function CartItem(props: IProps) {
  const { item } = props;
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <img src={item.image} alt={item.name} style={{ width: 100 }} />
      </div>
      <div style={{ marginLeft: "24px", width: "100%" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>{item.name}</p>
          <p>{item.totalPrice}€</p>
        </div>
        <p>Quantite: {item.quantity}</p>
      </div>
    </div>
  );
}
