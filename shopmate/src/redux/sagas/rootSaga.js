import productsSaga from './productsSaga';
import cartSaga from './cartSaga'
import {all, fork} from 'redux-saga/effects'

export default function* rootSaga () {  
    yield all([productsSaga(), cartSaga()])
  }