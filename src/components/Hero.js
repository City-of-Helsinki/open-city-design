import React, { Component } from 'react'
import LazyHero from 'react-lazy-hero';
import { NavLink } from 'react-router-dom';
import {
      Button, Container, Badge, Row, Col, Card, CardImg, CardText, CardBody,
      CardTitle, CardSubtitle, CardColumns
} from 'reactstrap';
import 'font-awesome/css/font-awesome.min.css';
import SidebarButton from './Sidebar/SidebarButton';
import SidebarDropdown from './Sidebar/SidebarDropdown';
import HorizontalCard from './HorizontalCard';
import Welcome from './Welcome'

class Hero extends Component {
      render() {

            const heroStyle = {
                  minHeight: this.props.heroHeight,
            }
            const heroContentStyle = {
                  color: this.props.heroContentColor,
                  marginTop: this.props.hero.marginTop,
                  minWidht: this.props.hero.minWidht
            }
            const header = {
                  fontSize: 70
            }

            const rowStyle = {
                  paddingTop: '10%',
                  paddingBottom: '10%',
            }
            const border = {
                  border: 'solid 1px #000',
                  marginBottom: '5%',
                  marginTop: '5%',

            }
            const welcome = {
                  heading: 'Open City Design System',
                  paragraph: 'Welcome - Please select City'
            }
            return (
                  <div>
                        <LazyHero isCentered={true} color={this.props.heroColor} style={heroStyle} imageSrc="">
                              <Container>
                                    <Welcome welcome={welcome} />
                                    <Row style={border} />
                                    <Row style={rowStyle}>
                                          <Col>
                                                <Card   >
                                                      <CardBody>
                                                            <CardTitle><h1>Helsinki</h1></CardTitle>
                                                            <CardSubtitle>Card subtitle</CardSubtitle>
                                                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                                            <NavLink to='/development/developmentoverview' >  <Button color='primary' outline >Explore</Button></NavLink>
                                                      </CardBody>
                                                </Card>
                                          </Col>
                                          <Col>
                                                <Card  >
                                                      <CardBody >
                                                            <CardTitle><h1>Turku</h1></CardTitle>
                                                            <CardSubtitle>Card subtitle</CardSubtitle>
                                                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                                            <Button color='primary' className='text-muted' outline >Explore</Button>
                                                      </CardBody>
                                                </Card>
                                          </Col>
                                          <Col>
                                                <Card  >
                                                      <CardBody>
                                                            <CardTitle><h1>Tampere</h1></CardTitle>
                                                            <CardSubtitle>Card subtitle</CardSubtitle>
                                                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                                            <Button color='primary' className='text-muted' outline >Explore</Button>
                                                      </CardBody>
                                                </Card>
                                          </Col>
                                    </Row>
                              </Container>
                        </LazyHero>
                  </div>
            );
      }
}

export default Hero;