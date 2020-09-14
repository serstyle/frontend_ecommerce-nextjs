import React from "react";
import Head from "next/head";
import { getProductById, getProducts } from "../../services/getProducts";
import { Product, CommonResources } from "../../interfaces/interfaces";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import Header from "../../components/Header/Header";
import { getCommonResources } from "../../services/getCommonResources";
import styles from "./[pid].module.css";
import InfoCard from "../../components/InfoCard/InfoCard";
import { ICart } from "../../interfaces/ISnipcartStore";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { Snackbar } from "@material-ui/core";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await getProducts();
  const paths = res.map((product) => ({
    params: { pid: product.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const resources = await getCommonResources();
  const product = await getProductById(Number(params?.pid));
  return { props: { product, resources }, revalidate: 5 };
};

export interface IProps {
  product: Product;
  resources: CommonResources;
  strapiLink: string;
  cart: ICart;
}

export default function ProductById(props: IProps) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  React.useEffect(() => {
    const unsub1 = (window as any).Snipcart.events.on("item.added", () => {
      handleClick();
    });
    const unsub2 = (window as any).Snipcart.events.on("item.updated", () => {
      handleClick();
    });
    return () => {
      unsub2();
      unsub1();
    };
  }, []);
  const router = useRouter();
  const { product, resources, cart } = props;
  return (
    <div>
      <Head>
        <title>{product.name}</title>
      </Head>
      <Header cart={cart} resources={resources} />
      <div>
        <Link href="/">Go back</Link>
      </div>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img
            alt={product.images[0].alternativeText}
            src={product.images[0].url}
          />
        </div>

        <div className={styles.infoContainer}>
          <InfoCard route={router.asPath} product={product} />
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="info">
          {product.name} a ete a ajouter a votre panier
        </Alert>
      </Snackbar>
    </div>
  );
}
