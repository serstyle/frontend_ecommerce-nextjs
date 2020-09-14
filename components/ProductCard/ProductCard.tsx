import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Product } from "../../interfaces/interfaces";
import { Button, CardActionArea } from "@material-ui/core";
import { useRouter } from "next/dist/client/router";
import styles from "./ProductCard.module.css";

export interface IProps {
  product: Product;
}

export default function ProductCard(props: IProps) {
  const router = useRouter();
  const { product } = props;
  const goToProduct = (e: any) => {
    e.preventDefault();
    router.push("/product/[pid]", `/product/${product.id}`);
  };
  return (
    <Card>
      <CardActionArea onClick={goToProduct} href={`/product/${product.id}`}>
        <CardMedia
          image={product.images[0].url}
          title={product.name}
          className={styles.media}
        />
        <CardContent>
          <Typography variant="body1" component="p">
            {product.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {product.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <div className={styles.flex}>
        <Typography className={styles.price} variant="caption" component="p">
          Prix: {product.price}€
        </Typography>
        <Button onClick={goToProduct} color="primary">
          Achetez maintenant!
        </Button>
      </div>
    </Card>
  );
}
