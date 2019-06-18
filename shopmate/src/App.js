import React from 'react';
import Home from './Home'
import Shop from './Shop';
import SingleItem from './Shop/Single/SingleItem'
import Cart from "./Checkout/Cart"
import Checkout from './Checkout/Checkout'
import './styles.scss';
import {Link, Route, BrowserRouter as Router} from 'react-router-dom'
import {Provider} from "react-redux"
import { applyMiddleware, createStore, compose, combineReducers } from 'redux'  
import rootSaga from './redux/sagas/rootSaga'
import createSagaMiddleware from 'redux-saga' 
import productReducer from './redux/reducers/productReducer';
import loadingReducer from "./redux/reducers/loadingReducer"
import errorReducer from "./redux/reducers/errorReducer"



//redux setup

const sagaMiddleware = createSagaMiddleware()

const composeSetup = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose


const rootReducer = combineReducers({
    products: productReducer,
    isLoading: loadingReducer,
    error: errorReducer

})

const store = createStore(  
  rootReducer,
  composeSetup(applyMiddleware(sagaMiddleware)), // allows redux devtools to watch sagas
)
sagaMiddleware.run(rootSaga)

//redux setup ends


function App() {
  return (
    <Provider store ={store}>
   <Router>
    <div>
   <Route exact path ='/' component ={Home} />
   <Route exact path ='/products' component ={Shop} />
   <Route path ='/products/:id' component ={SingleItem} />
   <Route path ='/cart' component ={Cart} />
      <Route path ='/checkout' component ={Checkout} />
   </div>
    </Router>
    </Provider>
  );
}

export default App;
