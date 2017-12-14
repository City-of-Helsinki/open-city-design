import React, { Component } from 'react'
import { Button, Grid, Jumbotron, Col, Row, ButtonToolbar, Nav, Navbar, Container } from 'reactstrap';


class WelcomeSmall extends Component {
      render()  {
            var welcomeStyle = {
                  marginTop: 20,
                  marginBottom: 20,
                  borderRadius: 0,
                  padding: 0,
                  backgroundColor: 'transparent',
                  width: '100%',
                 }
            return(
                  <div>
                              <Jumbotron style={welcomeStyle}>
                                <h1 className='display-1' style={this.props.headerStyle} >{this.props.welcome.heading}</h1>
                                <p className='lead' style={this.props.paragraphStyle} >{this.props.welcome.paragraph}</p>

                              </Jumbotron>
                              <hr />

                  </div>
            );
      }

}

export default WelcomeSmall;