import React, { Component } from 'react'
import { Button, Grid, Jumbotron, Col, Row, ButtonToolbar, Nav, Navbar } from 'reactstrap';


class Welcome extends Component {
      render()  {
            var welcomeStyle = {
                  marginBottom: 0,
                  borderRadius: 0,
                  padding: 10,
                  backgroundColor: 'transparent',
                }
            return(
                              <Jumbotron style={welcomeStyle}>
                                <h1>{this.props.heading}</h1>
                                <p>{this.props.paragraph}</p>
                                <p><Button color="primary">Learn more</Button></p>
                              </Jumbotron>
                  
            );
      }

}

export default Welcome;