import {
  FETCH_ROBOTS,
  FETCH_ROBOTS_SUCCESS,
  FETCH_ROBOTS_FAILURE
} from '../actionTypes';

export const fetchRobots = () => ({
  type: FETCH_ROBOTS
});

export const fetchRobotSuccess = (robots) => ({
  type: FETCH_ROBOTS_SUCCESS, 
  payload: robots
})

export const fetchRobotsError = (error) => ({
  type: FETCH_ROBOTS_FAILURE,
  error
})