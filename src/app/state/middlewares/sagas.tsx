import { all } from 'redux-saga/effects';

import { productSagas } from '../ducks/product'

export default function* rootSaga() {
  yield all([
    productSagas.getProductsListRequest()
  ]);
}