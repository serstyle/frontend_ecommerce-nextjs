import React from "react";
import { Typography } from "@material-ui/core";
import NavBar from "../NavBar/NavBar";
import { CommonResources } from "../../interfaces/interfaces";
export interface IProps {
  resources: CommonResources;
}
export default function Header(props: IProps) {
  const { resources } = props;
  return (
    <div>
      <NavBar title={resources.titleWebsite} />
      <Typography
        variant="h1"
        style={{ fontSize: "32px", textAlign: "center" }}
      ></Typography>
    </div>
  );
}
