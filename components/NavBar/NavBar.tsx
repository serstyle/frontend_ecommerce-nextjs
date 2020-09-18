import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Button from "@material-ui/core/Button";
import styles from "./NavBar.module.css";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import * as NextLink from "next/link";
import { IStore, Status } from "../../interfaces/ISnipcartStore";
import ShoppingIcon from "@material-ui/icons/ShoppingCart";
export interface IProps {
  title: string;
  store: IStore;
}

export interface NavBarCart {
  totalPrice: number;
}

export default function NavBar(props: IProps) {
  const { store, title } = props;
  return (
    <div>
      <AppBar position="static">
        <Toolbar className={styles.root}>
          <NextLink.default href="/">
            <Button color="inherit" className={styles.title}>
              {title}
            </Button>
          </NextLink.default>
          <div style={{ display: "flex" }}>
            {/* <span className="snipcart-items-count"></span>
            <span className="snipcart-total-price"></span> */}
            {store && store.customer.status === Status.SignedIn ? (
              <button className="btn snipcart-customer-signin">
                my account
              </button>
            ) : (
              <>
                <button className="btn snipcart-customer-signin">signin</button>
                <button className="btn snipcart-customer-register">
                  register
                </button>
              </>
            )}
            {store && store.cart ? (
              <ShoppingCart cart={store.cart} />
            ) : (
              <ShoppingIcon className="btn" />
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
