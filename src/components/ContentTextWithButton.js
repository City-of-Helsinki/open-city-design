import React, { Component } from 'react'
import { Container, Button, Grid, Jumbotron, Col, Row, ButtonToolbar, Nav, Navbar } from 'reactstrap';
import Image from './Image';
import { NavLink } from 'react-router-dom';


class ContentTextWithButton extends Component {
      render() {
            const image = { url: this.props.card.imageURL };
            
            return (
                  <div style={style}>
                        <h3 style={{ marginBottom: '30px', marginTop: '30px' }}>{this.props.card.header}</h3>
                        <p>{this.props.card.paragraph}</p>
                        <NavLink to={this.props.card.buttonURL}>

                              <Button style={buttonStyle} color='primary' outline >
                              <Row>
                              <Col xs='4' lg='2'>
                                     <Image image={image} imageStyle={imageStyle} /> 
                                   </Col>
                                   <Col xs='8' lg='10' >
                                   <h4 style={textStyle}>
                              {this.props.card.buttonText}
                                    </h4>
                                    </Col> 
                              </Row>
                              </Button>
                        </NavLink>
                  </div>
            );
      }

}
const style = {
      height: 200,
}
const buttonStyle = {
      maxHeight: 50,
      textAlign: 'left',
      padding: 0,
      width: '80%',
      bottom: 0,
      position: 'absolute'
      
}
const imageStyle = { maxHeight: 25, margin: 10, float: 'left', };
const textStyle = { marginTop: 10 }
export default ContentTextWithButton;