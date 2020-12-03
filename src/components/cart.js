import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import axios from "axios";
import {Button,Form} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

import logo from '../assets/logorus.png';


export default class Cart extends React.Component{
  constructor() {
    super();
    this.state = {
        items: [],
        isLoaded: false,
    };

  }

  componentDidMount() {
    fetch("https://rfwy1ua5al.execute-api.us-east-1.amazonaws.com/dev/category/TestCategory/items").then(res => res.json()).then(json => {
        this.setState({
            isLoaded: true,
            items: json, 
        })

    });

  }


  render(){
    var {isLoaded, items} = this.state;

    if(!isLoaded) {
        
        return (
            <div className="Homepage">
                <header className="App-header">
                Loading ...

                </header>
            </div>
        );
    }else{
        return(
      
            <div className="Homepage">
                <header className="App-header">
                    <div className="position-absolute">
                    <button>UpdateCart</button>
                    <ul>
                        {items.map(item => (
                            <li key={item.id}>
                                {item.name}
                            </li>
                        ))}
                    </ul>

                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Shopping Cart</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>HOLDER</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>HOLDER</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td colSpan="2">HOLDER</td>
                            </tr>
                        </tbody>
                    </Table>
                    </div>
    
                </header>
            </div>
    
    
        )

    }

    
  }
}