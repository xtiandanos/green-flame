import { put, takeLatest } from 'redux-saga/effects';
import * as types from './actions-types';

function* getProductsList(action: any) {
  const data = {
    status: {

    },
    data: [
      {
        name: 'Classic Milk Tea',
        description: 'Traditional Hong Kong Milk Tea, no toppings inside',
        price: 5.50
      },
      {
        name: 'Bubble Milk Tea',
        description: 'Classic Milk Tea + Bubbles',
        price: 6.00
      },
      {
        name: 'Pudding Milk Tea',
        description: 'Classic Milk Tea + Pudding',
        price: 6.00
      },
      {
        name: 'Bubble Milk Tea with Puff Cream',
        description: 'Bubble Milk Tea with Puff Cream',
        price: 7.00
      },
      {
        name: 'Taro Balls Milk Tea',
        description: 'Signature Top 6, Taste Real Taro, Hot one surprises',
        price: 6.50
      }
    ]

  };

  try {
    yield put({
      type: types.GET_PRODUCT_LIST_SUCCESS,
      payload: data
    });
  } catch (e) {
    yield put({
      type: types.GET_PRODUCT_LIST_FAILED
    });
  }
}

export function getProductsListRequest() {
  takeLatest(types.GET_PRODUCT_LIST_REQUEST, getProductsList);
}