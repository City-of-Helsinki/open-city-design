import React, { Component } from 'react';
import { Container, Button, Grid, Jumbotron, Col, Row, ButtonToolbar, Nav, Navbar, CardColumns, Media } from 'reactstrap';
import ScrollableAnchor from 'react-scrollable-anchor'

import typography from '../../images/typography.png';
import colors from '../../images/colors.png';
import brand from '../../images/brand.png';
import logo from '../../images/logo.png';
import sketch from '../../images/sketch.png';
import button from '../../images/components-thumbs/button.png';

import Welcome from '../../components/Welcome';
import Hero from '../../components/Hero';
import HorizontalCard from '../../components/HorizontalCard';
import Section from '../../components/Section';
import ContentText from '../../components/ContentText'
import Footer from '../../components/Footer'

class DevelopmentOverview extends Component {
  render() {

    const welcome = {
      heading: "Ahoy there Developer!",
      paragraph: <div><p>This is the Development guide for Helsinki City Design System. Go check out <a href='#components' style={{ textDecoration: 'underline' }} color='link'>components -></a> for starters.</p></div>
    }



    const contentTexts = {
      "contentTexts": [
        {
          key: 1,
          header: 'What is this Development guide? 🤔',
          body: <div><p><strong>Now</strong> –we do understand that this can be a bit overwelming to grasp but bare with us. We have build a system that contains all ya need for developing and designing digital services using the Cities own design systems. In other words, we have combined Design tools and Development tools to make new service creation simple and easy to approach.</p></div>
        },
        {
          key: 2,
          header: 'How to use the guide? 🚀',
          body: <div><p><strong>The OCDS Design Guide</strong> is built for those who are intrested in designing new comoponents, modules, patterns and page templates for the City of Helsinki. There re multiple ways to begin the design process -but we have structured few files and guides for you to begin with</p></div>
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
          header: 'Buttons',
          paragraph: 'Use the Skecth Library to design applications',
          imageURL: <Button color='primary' outline >MOi</Button>,
          URL: '#'
        },
        {
          key: 2,
          header: 'Alerts',
          paragraph: 'How to properly use logos?',
          imageURL: logo,
          URL: '#'
        },
        {
          key: 3,
          header: 'Badges',
          paragraph: 'Using typography correctly',
          imageURL: typography,
          URL: '#'
        },
        {
          key: 4,
          header: 'Breadcrumb',
          body: 'Color schema and instructions',
          imageURL: colors
        },
        {
          key: 4,
          header: 'Modals',
          paragraph: 'Study the brand guidelines',
          imageURL: brand,
          URL: '#'
        },
      ]
    }



    return (
      <div>

        <div style={sectionStyle_1}>
          <Container>
            <Row>
              <Welcome welcome={welcome} />
            </Row>
          </Container>
        </div>
        <Container>
          <Row style={rowStyle}>
            {contentTexts.contentTexts.map((text, i) => <Col xs='12' lg='6' >
              <ContentText key={i} text={text} />        </Col>
            )}

          </Row>
          <Row style={rowStyle}>
            <ScrollableAnchor id={'components'}>
              <h1> Components </h1>
            </ScrollableAnchor>
          </Row>
          <Row>
            {cards.cards.map((card, i) => <Col xs='12' lg='6' ><Media key={i} card={card} />        </Col>
            )}
          </Row>


        </Container>
      </div>
    );
  }
}

const sectionStyle_1 = {
  height: '100%',
  width: '100%',
  backgroundColor: '#f3f3f3',
  borderBottom: 'solid #343434 1px',
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
  paddingBottom: '5%',
}
export default DevelopmentOverview;

