import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Button from "@material-ui/core/Button";
import styles from "./NavBar.module.css";
import * as NextLink from "next/link";

export interface IProps {
  title: string;
}

export interface NavBarCart {
  totalPrice: number;
  
}

export default function NavBar(props: IProps) {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    document.addEventListener("snipcart.ready", function () {
      let currentValue: any; // TODO: need to fix an interface
      const unsubscribe = (window as any).Snipcart.store.subscribe(() => {
        let previousValue = currentValue;
        currentValue = (window as any).Snipcart.store.getState();

        if (previousValue !== currentValue) {
          const cart = (window as any).Snipcart.store.getState().cart;
          console.log(cart);
        }
      });
    });
  });
  return (
    <div>
      <AppBar position="static">
        <Toolbar className={styles.root}>
          <NextLink.default href="/">
            <Button color="inherit" className={styles.title}>
              {props.title}
            </Button>
          </NextLink.default>
          <div>
            <button className="snipcart-checkout">
              Click here to checkout
            </button>
            <span className="snipcart-items-count"></span>
            <span className="snipcart-total-price"></span>
            <button className="snipcart-customer-signin">My account</button>
            <button className="snipcart-customer-register">register</button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
