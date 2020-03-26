import { combineReducers } from 'redux';
import * as types from './actions-types';
import { createReducer } from '../../utils';

const data = createReducer([])({
  [types.ADD_PRODUCT_TO_CART]: (state: any, actions: any) => {

    let oldData = state;

    oldData.push(actions.payload);

    return oldData;
  },
});

export default combineReducers({
  data
})