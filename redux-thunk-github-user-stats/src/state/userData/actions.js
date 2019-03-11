import {
  FETCH_USER_PENDING,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILED
} from '../actionTypes';


export const fetchUserData = (userName) => (dispatch) => {
  dispatch({ type: FETCH_USER_PENDING });
  fetch(`https://api.github.com/users/${userName}`)
      .then(response => response.json())
      .then(data => dispatch({ type: FETCH_USER_SUCCESS, payload: data }))
      .catch(errror => dispatch({ type: FETCH_USER_FAILED, payload: errror }))
}
