import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import axios from "axios";
import {Button,Container,Form, Spinner, Table} from 'react-bootstrap';

import { tsParticles } from "tsparticles";
import Particles from "react-tsparticles";

import logo from '../assets/logorus.png';
import { isConstructorDeclaration } from 'typescript';





export default class Cart extends React.Component{
  constructor() {
    super();
    this.state = {
        items: [],
        isLoaded: false,
        total: 0,
        
    };

  }

  componentDidMount() {
    fetch("https://rfwy1ua5al.execute-api.us-east-1.amazonaws.com/dev/category/TestCategory/items").then(res => res.json()).then(json => {
        this.setState({
            isLoaded: true,
            items: json, 
        })
    });


    //CHECK For cart and load number of items 

  }


//   countTotal() {
//     let totalVal = 0
//     for (let i = 0; i< this.items.size(); i++){
//         totalVal = this.items[i] + totalVal;
//         console.log(totalVal)
//     }
//     this.setState({
//         total: totalVal,
//     })


 // }


  headtoPay = () => {
    let path = `payment`;
    this.props.history.push(path)
  }




  render(){
    


    var {isLoaded, items, total} = this.state;

    if(!isLoaded) {
        
        return (
            // <body>
            //     <div id='tsparticles'>LOADING</div>
            

            //     <script src="tsparticles.min.js"></script>

            //     </body>
                
            <div id="tsparticles">
                
                <div className="LoadingTask">Loading  <Spinner size="sm" animation="grow"/> <Spinner size="sm" animation="grow"/> <Spinner  size="sm" animation="grow"/></div>
                













                 <Particles
                    id="tsparticles"
                    options={{
                    background: {
                        color: {
                        value: "#282c34",
                        },
                    },
                    backgroundMode: {
                        enable: true,
                        zIndex: -1,
                    },
                    fpsLimit: 144,
                    interactivity: {
                        detectsOn: "canvas",
                        events: {
                        onClick: {
                            enable: false,
                            mode: "push",
                        },
                        onHover: {
                            enable: false,
                            mode: "repulse",
                        },
                        resize: true,
                        },
                        modes: {
                        bubble: {
                            distance: 400,
                            duration: 2,
                            opacity: 0.8,
                            size: 40,
                        },
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                        },
                    },
                    particles: {
                        color: {
                        value: "#ffffff",
                        },
                        links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                        },
                        collisions: {
                        enable: true,
                        },
                        move: {
                        direction: "none",
                        enable: true,
                        outMode: "bounce",
                        random: false,
                        speed: 6,
                        straight: false,
                        },
                        number: {
                        density: {
                            enable: true,
                            value_area: 800,
                        },
                        value: 80,
                        },
                        opacity: {
                        value: 0.5,
                        },
                        shape: {
                        type: "circle",
                        },
                        size: {
                        random: true,
                        value: 5,
                        },
                    },
                    detectRetina: true,
                    }}
                    
                    />
                </div> 
          
        )
    }else{
        return(
            
      
            <div className="Homepage">
                <header className="Cart-header">
                    
                    {/* <div className="Purchase-cart">
                        



                    </div> */}

                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                
                                <th><h1>Shopping Cart</h1></th>
                                <th><h1>Price</h1></th>
                            </tr>
                        </thead>
                        <tbody>
                                {items.map(item => (
                                    <tr>
                                        <th key={item.id}>
                                            {item.name}
                                        </th>
                                        <th key={item.price}>
                                            {item.price}
                                        </th>
                                    </tr>
                                ))}
                        </tbody>
                        <tbody>
                                <tr>
                                    <th>Total</th>
                                    <th> {total}</th>
                                </tr>
                        </tbody>
                    </Table>


                    <Button variant="Primary" onClick={this.headtoPay}>PRESS TO HEAD TO PAYMENT</Button>





                    
    
                </header>
            </div>
    
    
        )

    }

    
  }
}