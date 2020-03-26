export const GET_PRODUCT_LIST_REQUEST = 'GET_PRODUCT_LIST_REQUEST';
export const GET_PRODUCT_LIST_SUCCESS = 'GET_PRODUCT_LIST_SUCCESS';
export const GET_PRODUCT_LIST_FAILED = 'GET_PRODUCT_LIST_FAILED';

// PRODUCT TYPES
export type ProductItem = {
  name: string;
  description: string;
  price: number;
}