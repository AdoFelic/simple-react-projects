import { 
  ADD_TO_CART,
  ADD_TO_CART_FAILURE,
  ADD_TO_CART_SUCCESS,
  FETCH_CART,
  FETCH_CART_FAILURE,
  FETCH_CART_SUCCESS,
  REMOVE_FROM_CART_FAILURE,
  REMOVE_FROM_CART,
  REMOVE_FROM_CART_SUCCESS
 } from '../actionTypes';

export const fetchCart = () => ({
  type: FETCH_CART
})

export const fetchCartSuccess = (cart) => ({
  type: FETCH_CART_SUCCESS,
  payload: cart.payload
})

export const fetchCartFailure = (error) => ({
  type: FETCH_CART_FAILURE,
  error
})

export const addToCart = (robot, quantity) => ({
  type: ADD_TO_CART,
  robot,
  quantity
})

export const addToCartSuccess = (cart) => ({
  type: ADD_TO_CART_SUCCESS,
  payload: cart.payload
})

export const addToCartFailure = (error) => ({
  type: ADD_TO_CART_FAILURE,
  error
})

export const removeFromCartSuccess = (cart) => ({
  type: REMOVE_FROM_CART_SUCCESS,
  payload: cart.payload
})

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  productId
})

export const removeFromCartFailure = (error) => ({
  type: REMOVE_FROM_CART_FAILURE,
  error
})