import { CommonResources } from "../interfaces/interfaces";

export const getCommonResources = async (): Promise<Array<CommonResources>> => {
  const resp = await fetch(`${process.env.NEXT_PUBLIC_STRAPIAPILINK}/common-resources`);
  const data: Promise<Array<CommonResources>> = resp.json();
  return data;
};
