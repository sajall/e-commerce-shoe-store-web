import { handleAPICall } from "../handleApi";
import urls from "./urls";

export const getSingleOrderApi = async (id) => {
  const res = await handleAPICall(`${urls.orders}/${id}`, "GET");
  return res;
};

export const getOrdersApi = async () => {
  const response = await handleAPICall(`${urls.orders}`, "GET");
  return response;
};

export const placeOrderApi = async (data) => {
  const body = data;
  const res = await handleAPICall(`${urls.orders}`, "POST", body);
  return res;
};
