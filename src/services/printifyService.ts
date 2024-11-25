import axios, { AxiosInstance } from "axios";
import { PRINTIFY_API_KEY } from "../config/dotenvConfig";

if (!PRINTIFY_API_KEY) {
  throw new Error("PRINTIFY_API_KEY is not defined");
}

const printifyClient: AxiosInstance = axios.create({
  baseURL: "https://api.printify.com/v1",
  headers: {
    Authorization: `Bearer ${PRINTIFY_API_KEY}`,
    "Content-Type": "application/json",
  },
});

export const getShops = async (): Promise<any> => {
  try {
    const response = await printifyClient.get("shops.json");
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching shops: ${(error as Error).message}`);
  }
};

export const getProducts = async (shopId: string): Promise<any> => {
  try {
    const response = await printifyClient.get(`shops/${shopId}/products.json`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching products: ${(error as Error).message}`);
  }
};

export default { getShops, getProducts };
