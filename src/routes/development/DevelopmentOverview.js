import React, { Component } from 'react';
import { Container, Button, Grid, Jumbotron, Col, Row, ButtonToolbar, Nav, Navbar } from 'reactstrap';
import Welcome from '../../components/Welcome';
import Hero from '../../components/Hero';


class DevelopmentOverview extends Component {
  render() {


    const welcome = {
      heading: 'Development Guide',
      paragraph: 'Start creating your best designs and collaborate with developers to create best solutions for your city'
    }

    const contentStyle = {
      width: '90%',
      marginLeft: 'auto',
      marginRight: 'auto'
    }
    const rowStyle = {
      paddingTop: '10%',
      paddingBottom: '10%',
    }
    const sectionStyle_1 = {
      height: 600,
      backgroundColor: '#9fc9eb'
    }
    const sectionStyle_2 = {
      height: 600,
      backgroundColor: '#ffe977'
    }
    const sectionStyle_3 = {
      height: 600,
      backgroundColor: '#dedfe1'
    }

    return (
      <div>
        <Row style={sectionStyle_1}>

          <Container style={contentStyle} >
            <Welcome welcome={welcome} />
          </Container>
        </Row>
        <Container style={contentStyle}>
          <Row style={rowStyle}>
            <h1>This is the design guide</h1>
            <h4>In this guide we will go trough the design tools you need for creating digital services for Helsnki city</h4>
          </Row>
        </Container>
      </div>
    );
  }
}
export default DevelopmentOverview;

