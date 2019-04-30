import {
  FETCH_USER_PENDING,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILED
} from '../actionTypes';

const fetchUser = () => ({
  type: FETCH_USER_PENDING,
});

const fetchUserSuccess = (data) => ({
  type: FETCH_USER_SUCCESS,
  payload: data,
});

const fetchUserError = (error) => ({
  type: FETCH_USER_FAILED,
  payload: error,
})

export const fetchUserData = (userName) => (dispatch) => {
  dispatch(fetchUser());
  fetch(`https://api.github.com/users/${userName}`)
      .then(response => response.json())
      .then(data => dispatch(fetchUserSuccess(data)))
      .catch(error => dispatch(fetchUserError(error)))
}
