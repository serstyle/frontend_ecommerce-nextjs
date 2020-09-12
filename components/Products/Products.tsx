import { Grid } from "@material-ui/core";
import ProductCard from "../ProductCard/ProductCard";

import React from "react";
import { Product } from "../../interfaces/interfaces";

export interface IProps {
  products: Array<Product>;
}
export default function Products(props: IProps) {
  const { products } = props;
  return (
    <Grid container justify="center" spacing={3}>
      {products.map((product, i) => (
        <Grid key={i} item xs={12} sm={6} style={{maxWidth: 350}}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
