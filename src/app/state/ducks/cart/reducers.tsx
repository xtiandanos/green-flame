import { combineReducers } from 'redux';
import * as types from './actions-types';
import { createReducer } from '../../utils';

const data = createReducer([])({
  [types.ADD_PRODUCT_TO_CART]: (state: any, actions: any) => {

    let oldData = state;

    oldData.push(actions.payload);

    return oldData;
  },
  [types.DELETE_PRODUCT_IN_CART]: (state: any, actions: any) => {
    console.log(state, 'here i am')

    let filtered = state.filter((elem: any) => {
      return elem != actions.payload;
    });

    return filtered;
  }
});

export default combineReducers({
  data
})