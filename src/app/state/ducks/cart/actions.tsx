import * as cartTypes from './actions-types';
import * as productTypes from '../product/actions-types';

export const getProductsInCart = () => ({
  type: cartTypes.GET_PRODUCT_FROM_CART
});

export const addProductToCart = (data: productTypes.ProductItem) => ({
  type: cartTypes.ADD_PRODUCT_TO_CART,
  payload: data
});

export const deleteProductInCart = (data: productTypes.ProductItem) => ({
  type: cartTypes.DELETE_PRODUCT_IN_CART,
  payload: data
});