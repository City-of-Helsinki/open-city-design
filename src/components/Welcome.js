import React, { Component } from 'react'
import { Button, Grid, Jumbotron, Col, Row, ButtonToolbar, Nav, Navbar } from 'reactstrap';


class Welcome extends Component {
      render()  {
            var welcomeStyle = {
                  marginTop: 50,
                  marginBottom: 0,
                  borderRadius: 0,
                  padding: 0,
                  backgroundColor: 'transparent',
                  width: '90%',
 
                  color: '#000'
                }
            return(
                              <Jumbotron style={welcomeStyle}>
                                <h1 className='display-1' style={this.props.headerStyle} >{this.props.welcome.heading}</h1>
                                <p className='lead' style={this.props.paragraphStyle} >{this.props.welcome.paragraph}</p>
                              </Jumbotron>
                  
            );
      }

}

export default Welcome;