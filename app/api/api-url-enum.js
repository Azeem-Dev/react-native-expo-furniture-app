import { API_BASE_URL } from "../constants";

export const apiUrlEnum = {
  getAllProductsCall: {
    endPoint: `${API_BASE_URL}/products`,
    method: "GET",
    params: {},
  },
  getProductByIdCall: {
    endPoint: `${API_BASE_URL}/products/{ID}`,
    method: "GET",
    params: {},
  },
  getNewArrivalsCall: {
    endPoint: `${API_BASE_URL}/products/new-arrivals`,
    method: "GET",
    params: {},
  },
};
