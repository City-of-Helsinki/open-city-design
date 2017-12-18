import React, { Component } from 'react'
import { Container, Button, Grid, Jumbotron, Col, Row, ButtonToolbar, Nav, Navbar } from 'reactstrap';
import Image from './Image';
import { NavLink } from 'react-router-dom';


class ContentCard extends Component {
      render() {


            

            return (
                <div >
                                          <h3 style={{ marginBottom: '30px', marginTop: '30px' }}>{this.props.text.header}</h3>
                                          <p>{this.props.text.body}</p>
                              
                  </div>
            );
      }

}

export default ContentCard;