import { 
  ADD_TO_CART,
  ADD_TO_CART_FAILURE,
  ADD_TO_CART_SUCCESS,
  FETCH_CART,
  FETCH_CART_SUCCESS,
  FETCH_CART_FAILURE,
  REMOVE_FROM_CART,
  REMOVE_FROM_CART_SUCCESS,
  REMOVE_FROM_CART_FAILURE
 } from '../actionTypes';

 const initialState = {
  loading: false,
  payload: [],
  error: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_TO_CART:
    case FETCH_CART:
    case REMOVE_FROM_CART:
      return {
        ...state,
        loading: true
      }
    case ADD_TO_CART_SUCCESS:
    case FETCH_CART_SUCCESS:
    case REMOVE_FROM_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        payload: action.payload
      }
    case ADD_TO_CART_FAILURE: 
    case FETCH_CART_FAILURE:
    case REMOVE_FROM_CART_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default: 
      return state
  }
}
