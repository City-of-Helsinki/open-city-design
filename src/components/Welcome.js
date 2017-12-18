import React, { Component } from 'react'
import { Button, Grid, Jumbotron, Col, Row, ButtonToolbar, Nav, Navbar, Container } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Welcome extends Component {
      render()  {
            var welcomeStyle = {
                  marginTop: 150 || this.props.marginTop,
                  marginBottom: 150,
                  borderRadius: 0,
                  padding: 0,
                  backgroundColor: 'transparent'
                 }
            return(
                  <div className="col">
                              <Jumbotron style={welcomeStyle}>
                                <h1 className='display-1' style={this.props.headerStyle} >{this.props.welcome.heading}</h1>
                                <p className='lead' style={this.props.paragraphStyle} >{this.props.welcome.paragraph}</p>
                                { this.props.welcome.buttonUrl &&
                                    <NavLink to={this.props.welcome.buttonUrl} ><Button outline color={'light'} >{this.props.welcome.buttonText}</Button></NavLink>
                                }
                              </Jumbotron>
                  </div>
            );
      }

}

export default Welcome;