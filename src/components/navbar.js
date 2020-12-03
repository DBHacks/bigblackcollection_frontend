import React, { Component } from 'react';
import {Nav, Navbar, Form,FormControl,Button} from 'react-bootstrap';
import logo from '../assets/logorus.png';

export default class Navbarjs extends React.Component{
  render(){
    return(
      <div>
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="home"><img className="Logo" src={logo} alt="logo" /></Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="cart">Cart</Nav.Link>
            <Nav.Link href="register">Sign Up</Nav.Link>
            <Nav.Link href="login">Sign In</Nav.Link>
            <Nav.Link href="checkout">Checkout</Nav.Link>
        </Nav>
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
        </Form>
        </Navbar>
      </div>
    )
  }
}



