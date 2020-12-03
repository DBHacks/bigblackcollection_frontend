import React, { Component } from 'react';
import {Nav, Navbar, Form,FormControl,Button} from 'react-bootstrap';
import {HashRouter} from 'react-router-dom';
import logo from '../assets/logorus.png';

export default class Navbarjs extends React.Component{
  render(){
    return(
      <div>
        <Navbar bg="dark" variant="dark">
        <HashRouter basename='/'>
          <Navbar.Brand href="/bigblackcollection_frontend/#/"><img className="Logo" src={logo} alt="logo" /></Navbar.Brand>
          <Nav className="mr-auto">
           
              <Nav.Link href="/bigblackcollection_frontend/#/">Home</Nav.Link>
              <Nav.Link href="/bigblackcollection_frontend/#/cart">Cart</Nav.Link>
              <Nav.Link href="/bigblackcollection_frontend/#/register">Sign Up</Nav.Link>
              <Nav.Link href="/bigblackcollection_frontend/#/login">Sign In</Nav.Link>
              <Nav.Link href="/bigblackcollection_frontend/#/checkout">Checkout</Nav.Link>
            
        </Nav>
        </HashRouter>
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
        </Form>
        </Navbar>
      </div>
    )
  }
}



