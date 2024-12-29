import { takeEvery, put, call } from 'redux-saga/effects';
import { fetchCategories } from '../../api/index.js';
import {
  fetchCategoriesRequest,
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
} from '../reducers/categoriesSlice.js';

export function* fetchCategoriesSaga() {
  try {
    const categories = yield call(fetchCategories);
    yield put(fetchCategoriesSuccess(categories));
  } catch (error) {
    yield put(fetchCategoriesFailure(error));
  }
}

export function* watchCategoriesSaga() {
  yield takeEvery(fetchCategoriesRequest.type, fetchCategoriesSaga);
}