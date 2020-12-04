
import Axios from 'axios';
import React, { Component } from 'react';



import {Button,Container,Form,Row, Col,Card, Spinner} from 'react-bootstrap';

import Particles from "react-tsparticles";
//import other components



export default class Homepage extends React.Component{
  constructor(){
    super();
    this.state={
      isSCILoaded: false,
      isFICLoaded: false,
      isENGLoaded: false,
      TotalItems: {
        SciItems: [],
        FicItems: [],
        EngItems: [],

      },
      cartItems: 0,
      
    }

}
componentDidMount(){
  let val = this.props.parentCallback
  this.setState({cartItems: val})
  console.log(this.state.cartItems);
}

callbackFunction = () => {

  let val = this.props.dataFromApp
  this.setState({cartItems: val})
  console.log(this.state.cartItems);

}

handleCartChange =()=> {
  this.setState({ cartItems: this.state.cartItems+1 })
  console.log(this.state.cartItems);
  this.props.parentCallback(this.state.cartItems);
}

// componentDidMount() {
//   fetch("https://rfwy1ua5al.execute-api.us-east-1.amazonaws.com/dev/category/TestCategory/items").then(res => res.json()).then(json => {
//       this.setState({
//           isSCILoaded: true,
//           TotalItems: {SciItems: json},

          
//       })
//   });
//   fetch("https://rfwy1ua5al.execute-api.us-east-1.amazonaws.com/dev/category/TestCategory/items").then(res => res.json()).then(json => {
//       this.setState({
//           isFICLoaded: true,
//           TotalItems: {FicItems: json},
//       })
//   });
//   fetch("https://rfwy1ua5al.execute-api.us-east-1.amazonaws.com/dev/category/TestCategory/items").then(res => res.json()).then(json => {
//       this.setState({
//           isENGLoaded: true,
//           TotalItems: {EngItems: json},
//       })
//   });

  

// }

addtocart(){
  //Axios.post("API URL",)
  console.log("HELLO WORLD");

}

    render(){
      var {isSCILoaded, SciItems, isENGLoaded, EngItems, isFICLoaded, FicItems} = this.state;

      let items = []

      // for (let i = 0; i<this.TotalItems.length;i++){
       
      // }


      // if (!isSCILoaded && !isENGLoaded && !isFICLoaded){
      //   return (
      //     <div className="Homepage">
      //         <header className="App-header">
      //           <div>Loading  <Spinner size="sm" animation="grow"/> <Spinner size="sm" animation="grow"/> <Spinner  size="sm" animation="grow"/></div>

      //         </header>
      //         <Particles
      //               id="tsparticles"
      //               options={{
      //               background: {
      //                   color: {
      //                   value: "#282c34",
      //                   },
      //               },
      //               backgroundMode: {
      //                   enable: true,
      //                   zIndex: -1,
      //               },
      //               fpsLimit: 144,
      //               interactivity: {
      //                   detectsOn: "canvas",
      //                   events: {
      //                   onClick: {
      //                       enable: false,
      //                       mode: "push",
      //                   },
      //                   onHover: {
      //                       enable: false,
      //                       mode: "repulse",
      //                   },
      //                   resize: true,
      //                   },
      //                   modes: {
      //                   bubble: {
      //                       distance: 400,
      //                       duration: 2,
      //                       opacity: 0.8,
      //                       size: 40,
      //                   },
      //                   push: {
      //                       quantity: 4,
      //                   },
      //                   repulse: {
      //                       distance: 200,
      //                       duration: 0.4,
      //                   },
      //                   },
      //               },
      //               particles: {
      //                   color: {
      //                   value: "#ffffff",
      //                   },
      //                   links: {
      //                   color: "#ffffff",
      //                   distance: 150,
      //                   enable: true,
      //                   opacity: 0.5,
      //                   width: 1,
      //                   },
      //                   collisions: {
      //                   enable: true,
      //                   },
      //                   move: {
      //                   direction: "none",
      //                   enable: true,
      //                   outMode: "bounce",
      //                   random: false,
      //                   speed: 6,
      //                   straight: false,
      //                   },
      //                   number: {
      //                   density: {
      //                       enable: true,
      //                       value_area: 800,
      //                   },
      //                   value: 80,
      //                   },
      //                   opacity: {
      //                   value: 0.5,
      //                   },
      //                   shape: {
      //                   type: "circle",
      //                   },
      //                   size: {
      //                   random: true,
      //                   value: 5,
      //                   },
      //               },
      //               detectRetina: true,
      //               }}
                    
      //               />
      //     </div>
      // );
      // }else{

        return(
          <div className="Homepage">
            <header className="App-header">
              
            
            <Container >
     
                                    <Row style={{marginTop:10}}>
                                        <Col>
                                          <Card border="primary" style={{ width: '18rem', color: "black" }}>
                                            <Card.Img variant="top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_175f1d6f05a%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_175f1d6f05a%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22108.5390625%22%20y%3D%2297.5%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
                                            <Card.Body>
                                                <Card.Title>SSS</Card.Title>
                                                <Card.Text>
                                                    ETC
                                                </Card.Text>
                                            <Button onClick={this.handleCartChange} variant="primary">Add To Cart</Button>
                                            </Card.Body>
                                          </Card>
                                        </Col>
                                        
                                    </Row>
                              





                          
                                    <Row style={{marginTop:10}}>
                                        <Col >
                                          <Card border="primary" style={{ width: '18rem', color: "black" }}>
                                            <Card.Img variant="top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_175f1d6f05a%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_175f1d6f05a%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22108.5390625%22%20y%3D%2297.5%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
                                            <Card.Body>
                                                <Card.Title>SSSS</Card.Title>
                                                <Card.Text>
                                                    ETC
                                                </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                            </Card.Body>
                                          </Card>
                                        </Col>
                                        
                                    </Row>
                               

            </Container>
  
              
  
  
  
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
 // }