import {
  FETCH_USER_PENDING,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILED
} from '../actionTypes';

const initialStateUser = {
  isPending: false,
  user: [],
  error: null
}

export const userData = (state=initialStateUser, action={}) => {
  switch(action.type) {
    case FETCH_USER_PENDING:
    return {
      ...state,
      isPending: true
    }
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isPending: false
      }
    case FETCH_USER_FAILED:
      return {
        ...state,
        error: action.payload,
        isPending: false
      }
    default:
      return state;
  }
}