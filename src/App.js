import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

//import other components
import Navi from './components/navbar.js';
import HomePage from './components/homepage.js';
import LoginPage from './components/login.js';
import RegisterPage from './components/register.js';
import CartPage from './components/cart.js';
import AnalyticsPage from './components/analytics.js';
import CheckoutPage from './components/cart.js';

import 'bootstrap/dist/css/bootstrap.min.css';


import logo from './logo.svg';
import './App.css';




export default class App extends React.Component{
  render(){
    return(
      <div className="App">
        <BrowserRouter>
          <div>
            <Navi/>
              <Switch>
                <Route path="/home" component={HomePage} exact/>
                <Route path="/login" component={LoginPage}/>
                <Route path="/register" component={RegisterPage}/>
                <Route path="/cart" component={CartPage}/>
                <Route path="/analytics" component={AnalyticsPage}/>
                <Route path="/checkout" component={CheckoutPage}/>
                
              </Switch>
          </div>
        </BrowserRouter>
        
        


       



      </div>
    )
  }
}