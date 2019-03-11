import {
  call,
  put,
  takeLatest,
  fork,
  all
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

function* fetchCart() {
  try {
    const cart = yield call(cartService.fetchCart);
    yield put(fetchCartSuccess(cart));
  } catch (error) {
    yield put(fetchCartFailure(error));
  }
}

function* addToCart(action) {
  try {
    const cart = yield call(cartService.addToCart, action.robot, action.quantity);
    yield put(addToCartSuccess(cart));
  } catch (error) {
    yield put(addToCartFailure(error));
  }
}

function* removeFromCart(action) {
  try {
    const cart = yield call(cartService.removeFromCart, action.productId);
    yield put(removeFromCartSuccess(cart));
  } catch (error) {
    yield put(removeFromCartFailure("Error while removing from the cart: ", error));
  }
}

function* watchFetchCart() {
  yield takeLatest(FETCH_CART, fetchCart)
}

function* watchAddToCart() {
  yield takeLatest(ADD_TO_CART, addToCart)
}

function* wathRemoveFromCart() {
  yield takeLatest(REMOVE_FROM_CART, removeFromCart);
}

export default function* () {
  yield all([
    fork(watchFetchCart),
    fork(watchAddToCart),
    fork(wathRemoveFromCart)
  ])
}

