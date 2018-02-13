import React, { Component } from 'react'
import { Container, Button, Grid, Jumbotron, Col, Row, ButtonToolbar, Nav, Navbar, Badge } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './DownloadButton.scss';
import Image from '../Image'

class DownloadButton extends Component {
      render() {
            const image = { url: this.props.DownloadButtonImage.imageURL };
            
            return (
                  <a className="download-btn" href={this.props.url}>
                        <Col xs="12" lg="12">
                              <Col  xs="2">
                               <Image image={image} imageStyle={imageStyle}/>
                              </Col>
                              <Col className="download-btn-text" xs="10">
                                     {this.props.text.text}
                              </Col>
                        </Col>
                  </a>

            );
      }

}
const imageStyle = { maxHeight: 30,  float: 'left', marginRight: 20  };

export default DownloadButton;