import React from "react";
import { Typography } from "@material-ui/core";
import NavBar from "../NavBar/NavBar";
import { CommonResources } from "../../interfaces/interfaces";
import { ICart } from "../../interfaces/ISnipcartStore";
export interface IProps {
  resources: CommonResources;
  cart: ICart;
}
export default function Header(props: IProps) {
  const { resources, cart } = props;
  return (
    <div>
      <NavBar cart={cart} title={resources.titleWebsite} />
      <Typography
        variant="h1"
        style={{ fontSize: "32px", textAlign: "center" }}
      ></Typography>
    </div>
  );
}
