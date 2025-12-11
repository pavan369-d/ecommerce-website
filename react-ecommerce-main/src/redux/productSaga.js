import { call, put, takeEvery } from 'redux-saga/effects';
import { PRODUCT_LIST, SET_PRODUCT_LIST } from './constant';

function* getProducts() {
  try {
    const response = yield call(fetch, 'https://fakestoreapi.com/products/');
    const data = yield response.json();
    console.warn('action is called', data);
    yield put({ type: SET_PRODUCT_LIST, data });
  } catch (error) {
    console.error('Error fetching products:', error);
    // You might want to dispatch an error action here
  }
}

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
}

export default productSaga;