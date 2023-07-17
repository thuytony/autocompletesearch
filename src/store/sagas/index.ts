import { all } from 'redux-saga/effects';
import mapLocationSaga from './mapLocation';

export default function* rootSaga() {
  yield all([mapLocationSaga()]);
}