import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import {Button,Form} from 'react-bootstrap';

import logo from '../assets/logorus.png';








export default class Login extends React.Component{
  render(){
    return(
      
      <div className="Homepage">
        <header className="App-header">
        <Form>
            <Form.Group controlId="formBasicEmail">
                <img className="LogoPhoto" src={logo} alt="logo" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>

            


          </header>
        </div>


      



    )
  }
}