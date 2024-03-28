import baseApiCall from "./api-base";
import { apiUrlEnum } from "./api-url-enum";

export const getAllProducts = () => {
  return baseApiCall(apiUrlEnum.getAllProductsCall);
};
export const getProductById = (id) => {
  let call = { ...apiUrlEnum.getProductByIdCall };
  call.endPoint = call.endPoint.replace("{ID}", id);
  return baseApiCall(call);
};
export const getNewArrivals = () => {
  return baseApiCall(apiUrlEnum.getNewArrivalsCall);
};
