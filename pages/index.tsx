import Head from "next/head";

import { getProducts } from "../services/getProducts";
import { Product, CommonResources } from "../interfaces/interfaces";
import ProductsComponent from "../components/Products/Products";
import { GetStaticProps } from "next";
import Header from "../components/Header/Header";
import { getCommonResources } from "../services/getCommonResources";
import { ICart, IStore } from "../interfaces/ISnipcartStore";

export interface IProps {
  products: Product[];
  resources: CommonResources;
  store: IStore;
}

export const getStaticProps: GetStaticProps = async () => {
  const resources = await getCommonResources();
  const products = await getProducts();
  return { props: { products, resources }, revalidate: 5 };
};

export default function Home(props: IProps) {
  const { products, resources, store } = props;
  return (
    <div>
      <Head>
        <title>{resources.titleWebsite}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header store={store} resources={resources} />

      <div style={{ marginTop: 24 }}>
        {products && <ProductsComponent products={products} />}
      </div>
    </div>
  );
}
