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
}

export default function ProductById(props: IProps) {
  React.useEffect(() => {
    console.log(router);
  });
  const router = useRouter();
  const { product, resources } = props;
  return (
    <div>
      <Head>
        <title>{product.name}</title>
      </Head>
      <Header resources={resources} />
      <div>
        <Link href="/">Go back</Link>
      </div>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img
            alt={product.images[0].alternativeText}
            src={`${process.env.NEXT_PUBLIC_STRAPIAPILINK}${product.images[0].url}`}
          />
        </div>

        <div className={styles.infoContainer}>
          <InfoCard route={router.asPath} product={product} />
        </div>
      </div>
    </div>
  );
}
