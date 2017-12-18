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
import ContentText from '../../components/ContentText';
import Footer from '../../components/Footer';

class DesignOverview extends Component {
  render() {

    const welcome = {
      heading: <span style={{ color: 'white' }}>Design Guide</span>,
      paragraph: <div><p style={{ color: '#AADBFF' }}>Hi there Designer! This is the Deign guide for Helsinki City Design System. Go check out <a href='#components' style={{ textDecoration: 'underline', color: 'white' }}>Sketch Documentation</a> for starters.</p></div>,
      buttonText: 'Explore Sketch Documentation'
      
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
          imageURL: colors,
          URL: '#'
        },
        {
          key: 5,
          header: 'Brand',
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
  width: '100%',
  background: 'red', /* For browsers that do not support gradients */
  background: '-webkit-linear-gradient(#0000BF, #0072C6)', /* For Safari 5.1 to 6.0 */
  background: '-o-linear-gradient(red, yellow)', /* For Opera 11.1 to 12.0 */
  background: '-moz-linear-gradient(red, yellow)', /* For Firefox 3.6 to 15 */
  background: 'linear-gradient(#13D7A8, #0775C6)',/* Standard syntax */  
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
  paddingBottom: '10%',
}
export default DesignOverview;

