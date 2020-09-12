import { Product } from "../interfaces/interfaces";

export const getProducts = async (): Promise<Array<Product>> => {
  const resp = await fetch(`${process.env.NEXT_PUBLIC_STRAPIAPILINK}/products`);
  const data: Promise<Array<Product>> = resp.json();
  return data;
};
export const getProductById = async (id: number): Promise<Product> => {
  const resp = await fetch(`${process.env.NEXT_PUBLIC_STRAPIAPILINK}/products/${id}`);
  const data: Promise<Product> = resp.json();
  return data;
};
