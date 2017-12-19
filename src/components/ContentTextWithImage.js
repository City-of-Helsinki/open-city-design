import React, { Component } from 'react'
import { Container, Button, Grid, Jumbotron, Col, Row, ButtonToolbar, Nav, Navbar } from 'reactstrap';
import Image from './Image';
import { NavLink } from 'react-router-dom';


class ContentTextWithImage extends Component {
      render() {
            const image = { url: this.props.card.imageURL };
            
            return (
                  <div style={style}>
                        <h5 style={{ marginBottom: '30px', marginTop: '30px' }}>{this.props.card.header}</h5>
                        <p>{this.props.card.paragraph}</p>
                        <NavLink to={this.props.card.buttonURL}>
                              <Image image={image}  imageStyle={imageStyle}/>
                        </NavLink>
                  </div>
            );
      }

}
const style = {
      height: 300,
}

const imageStyle = { width: '100%', marginTop: 20,  float: 'left', boxShadow: '0 2px 2px rgba(0, 0, 0, 0.5)', alignSelf: 'flex-end' };
const textStyle = { marginTop: 10 }
export default ContentTextWithImage;