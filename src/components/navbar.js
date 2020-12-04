import React, { Component } from 'react';
import {Nav, Navbar, Form,FormControl,Button} from 'react-bootstrap';
import {HashRouter} from 'react-router-dom';
import logo from '../assets/logorus.png';
import { Basket2Fill, HouseDoorFill } from 'react-bootstrap-icons';
import cartVal from './homepage';


export default class Navbarjs extends React.Component{
  constructor(){
    super();
    this.state = {
      itemsCart: 0,


    }


  }

  handlerGetCartVal(){
    //GET VALUE

  }

  componentDidMount() {
    //FETCH FORM API TO GET Number of items in cart
    // fetch("").then(res => res.json()).then(json => {
    //     this.setState({
    //         isLoaded: true,
    //         items: json, 
    //     })
    // });
  }

  callbackFunction = () => {

    this.props.parentCallback(this.state.itemsCart);
  
  }

  render(){
    var {itemsCart} = this.state

    if (itemsCart == 0){
      return(
        <div>
          <Navbar bg="dark" variant="dark">
          <HashRouter basename='/'>
            <Navbar.Brand href="/bigblackcollection_frontend/#/"><img className="Logo" src={logo} alt="logo" /></Navbar.Brand>
            <Nav className="mr-auto">
             
                <Nav.Link href="/bigblackcollection_frontend/#/"><HouseDoorFill style={{fontSize: 25}}/></Nav.Link>
                
                <Nav.Link href="/bigblackcollection_frontend/#/register">Sign Up</Nav.Link>
                <Nav.Link href="/bigblackcollection_frontend/#/login">Sign In</Nav.Link>
                {/* <Nav.Link href="/bigblackcollection_frontend/#/checkout">Checkout</Nav.Link> */}
              
          </Nav>
          </HashRouter>
          <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button onClick={this.callbackFunction} variant="outline-info">Search</Button>
          </Form>
          <Nav >
            <Nav.Link  href="/bigblackcollection_frontend/#/cart"><Basket2Fill style={{fontSize: 25}}/></Nav.Link>
          </Nav>
          </Navbar>
        </div>
      )
    } else{ 
      return(
        <div>
          <Navbar bg="dark" variant="dark">
          <HashRouter basename='/'>
            <Navbar.Brand href="/bigblackcollection_frontend/#/"><img className="Logo" src={logo} alt="logo" /></Navbar.Brand>
            <Nav className="mr-auto">
             
                <Nav.Link href="/bigblackcollection_frontend/#/"><HouseDoorFill style={{fontSize: 25}}/></Nav.Link>
                
                <Nav.Link href="/bigblackcollection_frontend/#/register">Sign Up</Nav.Link>
                <Nav.Link href="/bigblackcollection_frontend/#/login">Sign In</Nav.Link>
                {/* <Nav.Link href="/bigblackcollection_frontend/#/checkout">Checkout</Nav.Link> */}
              
          </Nav>
          </HashRouter>
          <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button onClick={this.callbackFunction} variant="outline-info">Search</Button>
          </Form>
          <Nav >
      <Nav.Link  href="/bigblackcollection_frontend/#/cart"><Basket2Fill style={{fontSize: 25}}/> {itemsCart}</Nav.Link>
          </Nav>
          </Navbar>
        </div>
      )
  }

   
  }
}



