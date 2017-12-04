import React, { Component } from 'react'
import { Container, Button, Grid, Jumbotron, Col, Row, ButtonToolbar, Nav, Navbar } from 'reactstrap';
import Image from './Image';
import { NavLink } from 'react-router-dom';


class HorizontalCard extends Component {
      render() {

            const image = { url: this.props.card.imageURL };
            const imageStyle = { maxHeight: '90px', maxWidth: '90px', margin: '3px'};
            const cardStyle = {
                  border: 'solid 1px #f4f4f4',
                  borderRadius: 4,
                  $nest: {
                        '&:hover': {
                          backgroundColor: 'red'
                        }
                      },
                  // boxShadow: '0 5px 30px rgba(0, 0, 0, 0.1)',
                  margin: '10px 10px 10px 0px',
                  maxHeight: 100
            }

            return (
                <div style={cardStyle}>
                        <Row style={this.props.rowStyle} >
                              <Col xs='2'>
                                    <Image image={image} imageStyle={imageStyle} />
                              </Col>
                              <Col xs='10' style={{ padding: '20px',  }}>
                              <NavLink to='#'> <h4>{this.props.card.header}</h4></NavLink>
                                    <p>{this.props.card.paragraph}</p></Col>
                        </Row>
                  </div>
            );
      }

}

export default HorizontalCard;