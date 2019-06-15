import React from 'react';
import Home from './Home'
import Shop from './Shop';
import SingleItem from './Shop/Single/SingleItem'
import Cart from "./Checkout/Cart"
import Checkout from './Checkout/Checkout'
import './styles.scss';
import {Link, Route, BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
   <Router>
    <div>
   <Route exact path ='/' component ={Home} />
   <Route exact path ='/products' component ={Shop} />
   <Route path ='/products/:id' component ={SingleItem} />
   <Route path ='/cart' component ={Cart} />
      <Route path ='/checkout' component ={Checkout} />
   </div>
    </Router>
  );
}

export default App;
