import React, { Component } from 'react';
import {HashRouter, BrowserRouter,Route,Switch} from 'react-router-dom';

//import other components
import Navi from './components/navbar.js';
import HomePage from './components/homepage.js';
import LoginPage from './components/login.js';
import RegisterPage from './components/register.js';
import CartPage from './components/cart.js';
import AnalyticsPage from './components/analytics.js';
import CheckoutPage from './components/checkout.js';
import PaymentPage from './components/payment.js';

import 'bootstrap/dist/css/bootstrap.min.css';


import logo from './logo.svg';
import './App.css';


//const HomePage = () => <div><h2>Home</h2></div>

class App extends React.Component{
  constructor(){
    super();
    this.state={
      cart:0,
    }

  };

  callbackFunction = (cartData) => {
    this.setState({cart: cartData})
    console.log(this.state.cart)
  }


  render(){
    return(
      <div className="App">
        <HashRouter basename='/'>
          <div>
            <Navi />
              <Switch>
                <Route exact path="/" component={() => <HomePage parentCallback={this.callbackFunction}/>}/>
                <Route path="/login" component={LoginPage}/>
                <Route path="/register" component={RegisterPage}/>
                <Route path="/cart" component={CartPage}/>
                <Route path="/analytics" component={AnalyticsPage}/>
                <Route path="/checkout" component={CheckoutPage}/>
                <Route path="/payment" component={PaymentPage}/>
                
              </Switch>
          </div>
        </HashRouter>
      </div>
    )
  }
}

//const Home = () => <div><h2>Home</h2></div>

export default App;