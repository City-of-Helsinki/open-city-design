import React, { Component } from 'react'
import { Button, Grid, Jumbotron, Col, Row, ButtonToolbar, Nav, Navbar, NavDropdown, NavItem, MenuItem } from 'react-bootstrap';


class Welcome extends Component {
      render()  {
            var welcomeStyle = {
                  marginBottom: 0,
                  borderRadius: 0,
                  padding: 10,
                  backgroundColor: 'transparent',
                }
            return(
                            <div>
                              <Jumbotron style={welcomeStyle}>
                                <h1>{this.props.welcome.heading}</h1>
                                <p>{this.props.welcome.paragraph}</p>
                                <p><Button bsStyle="primary">Learn more</Button></p>
                              </Jumbotron>
                            </div>
                  
            );
      }

}

export default Welcome;