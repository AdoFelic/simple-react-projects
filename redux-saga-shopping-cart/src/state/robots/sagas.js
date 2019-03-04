import {
  fork,
  takeLatest,
  put,
  call
} from 'redux-saga/effects';
import {
  FETCH_ROBOTS
} from '../actionTypes';
import * as robotsService from '../../service/robotsService';
import {
  fetchRobotSuccess,
  fetchRobotsError
} from './actions';

export function* fetchRobots() {
  try {
    const robots = yield call(robotsService.fetchAllRobots);
    yield put(fetchRobotSuccess(robots));
  } catch(error) {
    yield put(fetchRobotsError(error));
  }
}

export function* watchFetchRobots() {
  yield takeLatest(FETCH_ROBOTS, fetchRobots);
}

export default function* () {
  yield fork(watchFetchRobots);
}