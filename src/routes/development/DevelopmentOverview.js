/* eslint react/no-multi-comp: 0, react/prop-types: 0, import/no-webpack-loader-syntax: off */


import React, { Component } from 'react';
import { Container, Button, Grid, Jumbotron, Col, Row, ButtonToolbar, Nav, Navbar, CardColumns, Media } from 'reactstrap';
import Markdown from 'react-remarkable';

import typography from '../../images/typography.png';
import colors from '../../images/colors.png';
import brand from '../../images/brand.png';
import logo from '../../images/logo.png';
import sketch from '../../images/sketch.png';
import button from '../../images/components-thumbs/button.png';
import './DevelopmentOverview.scss';

import Welcome from '../../components/Welcome';
import Hero from '../../components/Hero';
import HorizontalCard from '../../components/HorizontalCard';
import Section from '../../components/Section';
import ContentText from '../../components/ContentText';
import Footer from '../../components/Footer';

import globals from '../../globals.json';



const Documentation = require('!!raw-loader!./DevelopmentOverview.md');


class DevelopmentOverview extends Component {
  render() {

    const welcome = {
      heading: <span style={{ color: 'white' }}>Getting started</span>,
      paragraph: <div><p style={{ color: '#D2C5FF' }}>Hi there Developer! This is the Development guide for Helsinki City Design System.</p></div>,
      buttonText: 'Explore components',
      buttonUrl: '/development/components/overview',
    }

  
    const DownloadButtonImage = { imageURL: 'https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png' };
    
  


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

        <Container style={mediaObject}>
          <a href={globals.github} target="_blank" className="download-btn">
            <Media className="media-thumbnail" >
              <Media left href="#">
                <Media object style={sketchStyle} src={DownloadButtonImage.imageURL} alt="Github" />
              </Media>
              <Media body>

                <Media heading>
                  Go to Helsinki City GitHub
                  </Media>
                  Download all resources needed for designing, contributing and developing from GitHub
              </Media>
            </Media>
          </a>
        </Container>


          <article >
            <Markdown source={Documentation} />
          </article>
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
  background: 'linear-gradient(#3a2099, #1A0D49)',/* Standard syntax */
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

const sketchStyle = {
  maxHeight: 60,
  marginLeft: 40,
  marginRight: 40
}

const mediaObject = {
  marginTop: 50,
  marginBottom: 50
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

