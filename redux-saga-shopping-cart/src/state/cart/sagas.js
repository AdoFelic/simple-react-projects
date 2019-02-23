import {
  call,
  put,
  takeLatest,
  fork
} from 'redux-saga/effects'

import {
  addToCartSuccess,
  addToCartFailure,
  fetchCartSuccess,
  fetchCartFailure,
  removeFromCartSuccess,
  removeFromCartFailure
} from '../cart/actions';

import {
  ADD_TO_CART, FETCH_CART, REMOVE_FROM_CART
} from '../actionTypes';

import * as cartService from '../../service/cartService';

export function* fetchCart() {
  try {
    const cart = yield call(cartService.fetch);
    yield put(fetchCartSuccess(cart));
  } catch (error) {
    yield put(fetchCartFailure(error));
  }
}

export function* addToCart(action) {  
  try {    
    const cart = yield call(cartService.addToCart, action.robot, action.quantity);
    yield put(addToCartSuccess(cart));
  } catch (error) {
    yield put(addToCartFailure(error));
  }
}

export function* removeFromCart(action) {
  try {
    const cart = yield call(cartService.removeFromCart, action.productId);
    yield put(removeFromCartSuccess(cart));
  } catch (error) {
    yield put(removeFromCartFailure("Error while removing from the cart: ", error));
  }
}

export function* watchFetchCart() {
  yield takeLatest(FETCH_CART, fetchCart)
}

export function* watchAddToCart() {
  yield takeLatest(ADD_TO_CART, addToCart)
}

export function* wathRemoveFromCart() {
  yield takeLatest(REMOVE_FROM_CART, removeFromCart);
}

export default function* () {
  yield fork(watchFetchCart);
  yield fork(watchAddToCart);
  yield fork(wathRemoveFromCart);
}

