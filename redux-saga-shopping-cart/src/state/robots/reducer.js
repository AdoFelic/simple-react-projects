import {
  FETCH_ROBOTS,
  FETCH_ROBOTS_SUCCESS,
  FETCH_ROBOTS_FAILURE
} from '../actionTypes';

const initialState = {
  loading: false,
  payload: [],
  error: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_ROBOTS:
      return {
        ...state,
        loading: true
      }
    case FETCH_ROBOTS_SUCCESS:
      return {
        ...state,
        loading: false,
        payload: action.payload
      }
    case FETCH_ROBOTS_FAILURE:
      return {
        ...state,
        loading: true,
        error: action.error
      }
    default: 
      return state;
  }
}