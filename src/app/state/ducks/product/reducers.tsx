import { combineReducers } from 'redux';
import * as types from './actions-types';
import { createReducer } from '../../utils';

const list = createReducer({})({
  [types.GET_PRODUCT_LIST_SUCCESS]: (state: any, actions: any) => actions.payload.data,
  [types.GET_PRODUCT_LIST_FAILED]: {}
});

export default combineReducers({
  list: list
});