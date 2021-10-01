import * as types from "./types";

export const getCart = () => dispatch => dispatch({ type: types.GET_CART });

export const addProductCart = product => dispatch =>
  dispatch({ type: types.ADD_PRODUCT_CART, payload: product });

export const updateCart = (id, operator) => dispatch =>
  dispatch({ type: types.UPDATE_CART, payload: { id, operator } });

export const removeProductCart = id => dispatch =>
  dispatch({ type: types.REMOVE_PRODUCT_CART, payload: id });
