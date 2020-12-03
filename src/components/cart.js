import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import {Button,Form} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

import logo from '../assets/logorus.png';


export default class Cart extends React.Component{
  render(){
    return(
      
        <div className="Homepage">
            <header className="App-header">
                <div className="position-absolute">
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