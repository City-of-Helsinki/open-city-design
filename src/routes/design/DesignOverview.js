import React, { Component } from 'react';
import { Container, Button, Grid, Jumbotron, Col, Row, ButtonToolbar, Nav, Navbar, CardColumns } from 'reactstrap';
import Welcome from '../../components/Welcome';
import Hero from '../../components/Hero';
import HorizontalCard from '../../components/HorizontalCard';
import Section from '../../components/Section';
import typography from '../../images/typography.png';
import colors from '../../images/colors.png';
import brand from '../../images/brand.png';
import logo from '../../images/logo.png';
import sketch from '../../images/sketch.png';
import ContentText from '../../components/ContentText'
import Footer from '../../components/Footer'

class DesignOverview extends Component {
  render() {

    const welcome = {
      heading: "Hi there ya Designer!",
      paragraph: "You have entered the Design Documentation for Helsnki City Digital Sevices"
    }



    const contentTexts = {
      "contentTexts": [
        {
          key: 1,
          header: 'Using the Design Guide',
          body: 'The OCDS Design Guide is built for those who are intrested in designing new comoponents, modules, patterns and page templates for the City of helsinki. There re multiple ways to begin the design process -but we have structured few files and guides for you to begin with  '
        },
        {
          key: 2,
          header: 'Using the Design Guide',
          body: 'The OCDS Design Guide is built for those who are intrested in designing new comoponents, modules, patterns and page templates for the City of helsinki. There re multiple ways to begin the design process -but we have structured few files and guides for you to begin with  '
        },
        {
          key: 3,
          header: '',
          body: ''
        },
      ]
    }



    const cards = {
      "cards": [
        {
          key: 1,
          header: 'Sketch',
          paragraph: 'Use the Skecth Library to design applications',
          imageURL: sketch,
          URL: '#'
        },
        {
          key: 2,
          header: 'Logo',
          paragraph: 'How to properly use logos?',
          imageURL: logo,
          URL: '#'
        },
        {
          key: 3,
          header: 'Typography',
          paragraph: 'Using typography correctly',
          imageURL: typography,
          URL: '#'
        },
        {
          key: 4,
          header: 'Colors',
          paragraph: 'Color schema and instructions',
          imageURL: colors
        },
        {
          key: 4,
          header: 'Brand',
          paragraph: 'Study the brand guidelines',
          imageURL: brand,
          URL: '#'
        },
      ]
    }



    return (
      <div>
        <Container>
          <Welcome welcome={welcome} />
          <Row style={rowStyle}>
            {contentTexts.contentTexts.map((text, i) => <Col xs='12' lg='6' >
              <ContentText key={i} text={text} />        </Col>
            )}
          </Row>
          <Row>
            {cards.cards.map((card, i) => <Col xs='12' lg='6' ><HorizontalCard key={i} card={card} />        </Col>
            )}
          </Row>
        </Container>
      </div>
    );
  }
}

const sectionStyle_1 = {
  height: '100%',
  backgroundColor: '#9fc9eb',
  borderBottom: 'solid #000 1px',
  marginBottom: 20,
}
const sectionStyle_2 = {
  height: 600,
  backgroundColor: '#ffe977'
}
const sectionStyle_3 = {
  height: 600,
  backgroundColor: '#dedfe1'
}

const contentStyle = {
  width: '100%',
  marginLeft: 'auto',
  marginRight: 'auto'
}
const rowStyle = {
  paddingBottom: '10%',
}
export default DesignOverview;

