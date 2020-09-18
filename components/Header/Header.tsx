import React from "react";
import { Typography } from "@material-ui/core";
import NavBar from "../NavBar/NavBar";
import { CommonResources } from "../../interfaces/interfaces";
import { ICart, IStore } from "../../interfaces/ISnipcartStore";
export interface IProps {
  resources: CommonResources;
  store: IStore;
}
export default function Header(props: IProps) {
  const { resources, store } = props;
  return (
    <div>
      <NavBar store={store} title={resources.titleWebsite} />
      <Typography
        variant="h1"
        style={{ fontSize: "32px", textAlign: "center" }}
      ></Typography>
    </div>
  );
}
