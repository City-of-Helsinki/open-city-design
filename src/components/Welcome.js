import React, { Component } from 'react'
import { Button, Grid, Jumbotron, Col, Row, ButtonToolbar, Nav, Navbar, Container } from 'reactstrap';


class Welcome extends Component {
      render()  {
            var welcomeStyle = {
                  marginTop: 150,
                  marginBottom: 150,
                  borderRadius: 0,
                  padding: 0,
                  backgroundColor: 'transparent'
                 }
            return(
                  <Container>
                              <Jumbotron style={welcomeStyle}>
                                <h1 className='display-1' style={this.props.headerStyle} >{this.props.welcome.heading}</h1>
                                <p className='lead' style={this.props.paragraphStyle} >{this.props.welcome.paragraph}</p>
                                <Button outline color={'light'} >{this.props.welcome.buttonText}</Button>

                              </Jumbotron>
                  </Container>
            );
      }

}

export default Welcome;