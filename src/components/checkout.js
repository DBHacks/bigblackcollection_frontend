import React, { Component } from 'react';
import {BrowserRouter,Route,Switch, useHistory} from 'react-router-dom';
import axios from "axios";
import {Button,Form} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
//import {Nav, Navbar, Form,FormControl,Button} from 'react-bootstrap';
import logo from '../assets/logorus.png';


import HomePage from './homepage.js';



export default class Cart extends React.Component{
  constructor() {
    super();
    this.state = {

        
    };

  }


  headtoPay =()=> {
    let path = `payment`;
    this.props.history.push(path)
    //history.push(path);
    

  }

  componentDidMount() {
   

  }


  render(){




        return(
      
            <div className="Homepage">
                <header className="App-header">
                <button onClick={this.headtoPay}>PRESS TO HEAD TO PAYMENT</button>




                </header>
            </div>
    
    
        )

    }

    
  
}