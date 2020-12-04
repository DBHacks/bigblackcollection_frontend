import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import {Button,Form} from 'react-bootstrap';
import Particles from "react-tsparticles";
import logo from '../assets/logorus.png';








export default class Register extends React.Component{
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
  }
}