import { applyMiddleware, createStore, compose, combineReducers } from 'redux'  
import rootSaga from './sagas/rootSaga'
import createSagaMiddleware from 'redux-saga' 

const sagaMiddleware = createSagaMiddleware()

const composeSetup = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose


const rootReducer = combineReducers({
    
})

const store = createStore(  
  rootReducer,
  composeSetup(applyMiddleware(sagaMiddleware)), // allows redux devtools to watch sagas
)
sagaMiddleware.run(rootSaga)
export default store