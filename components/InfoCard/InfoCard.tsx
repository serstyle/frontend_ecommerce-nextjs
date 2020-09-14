import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styles from "./InfoCard.module.css";
import { Product } from "../../interfaces/interfaces";

export interface IProps {
  product: Product;
  route: string;
}

export default function SimpleCard(props: IProps) {
  const { product, route } = props;
  return (
    <div className={styles.root}>
      <Typography variant="h5" component="h2">
        {product.name}
      </Typography>
      <Typography className={styles.pos} variant="body2" component="p">
        {product.description}
      </Typography>
      <div className={styles.buyingContainer}>
        <Typography color="textPrimary">{product.price}€</Typography>

        <Button
          className="snipcart-add-item"
          data-item-id={product.id}
          data-item-price={product.price}
          data-item-url={process.env.NEXT_PUBLIC_DOMAIN}
          data-item-description={product.description}
          data-item-image={`${process.env.NEXT_PUBLIC_STRAPIAPILINK}${product.images[0].url}`}
          data-item-name={product.name}
          size="small"
          color="primary"
        >
          Acheter maintenant !
        </Button>
      </div>
    </div>
  );
}
