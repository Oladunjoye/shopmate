import productsSaga from './productsSaga';
import cartSaga from './cartSaga'
import authSaga from './authSaga'
import {all, fork} from 'redux-saga/effects'

export default function* rootSaga () {  
    yield all([authSaga(), productsSaga(), cartSaga()])
  }