import React, { Component } from 'react';
import {Button,Container,Form,Row, Col} from 'react-bootstrap';

import logo from '../assets/logorus.png';


export default class Payment extends React.Component{
    constructor(){
        super();
        this.state={
            trystoAuth: 1,
        }

    }

    incrementAuth =()=>{
        let val =  this.state.trystoAuth + 1
        this.setState({trystoAuth: val})
        console.log(val)

    }





  render(){
    var {trystoAuth} = this.state;

    if (trystoAuth%3 == 0){
        return (

            <div className="Homepage">
                <header className="App-header">
                    Failed to load
                </header>
            </div>
        )
    }
    else{
        return(
      
            <div className="Homepage">
            <header className="App-header">
            <Form>
                <Form.Group controlId="Email">
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
    
                <Form.Group controlId="NameOnCard">
                    <Form.Control type="name" placeholder="Name on the card" />
                </Form.Group>
    
                <Form.Group controlId="CardNumber">
                    <Form.Control type="cardnumber" placeholder="Card number" />
                </Form.Group>
    
                <Container>
                    <Row style={{}}>
                        <Col>
                            <Form.Group controlId="MMYY">
                                <Form.Control type="date" placeholder="MM/YY" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="CVC">
                                <Form.Control type="cvc" placeholder="CVC" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="Zip">
                                <Form.Control type="postalcode" placeholder="Zip / Postal code" />
                            </Form.Group>
                        </Col>
                    </Row>
    
                </Container>
    
    
    
                <Button onClick={this.incrementAuth} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
    
                
    
    
              </header>
            </div>
    
        )
    }

    
  }
}