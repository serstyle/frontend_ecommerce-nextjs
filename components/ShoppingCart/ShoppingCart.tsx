import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu, { MenuProps } from "@material-ui/core/Menu";
import ShoppingIcon from "@material-ui/icons/ShoppingCart";
import { ICart, ICartItems } from "../../interfaces/ISnipcartStore";
import CartItems from "./CartItems/CartItems";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
));

export interface IProps {
  cart: ICart;
}

export default function ShoppingCart(props: IProps) {
  const { cart } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <button
        className="btn"
        aria-controls="customized-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <ShoppingIcon />
        {cart.items.count}
      </button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div style={{ width: "350px", padding: "0 16px" }}>
          <CartItems cartItems={cart.items} />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>Prix total</p>
            <p>{cart.total}€</p>
          </div>
          <button
            style={{ border: "blue solid 1px", padding: "4px" }}
            onClick={handleClose}
            className="snipcart-checkout"
          >
            Click here to checkout
          </button>
        </div>
      </StyledMenu>
    </div>
  );
}
