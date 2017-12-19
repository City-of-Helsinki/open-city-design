/* eslint react/no-multi-comp: 0, react/prop-types: 0, import/no-webpack-loader-syntax: off */


import React, { Component } from 'react';
import { Container, Button, Grid, Jumbotron, Col, Row, ButtonToolbar, Media, Nav, Navbar, CardColumns } from 'reactstrap';
import Markdown from 'react-remarkable';

import Welcome from '../../components/Welcome';
import WelcomeSmall from '../../components/WelcomeSmall';
import './DesignOverview.scss';

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
import DownloadButton from '../../components/DownloadButton/DownloadButton'

const Documentation = require('!!raw-loader!./DesignOverview.md');




class DesignOverview extends Component {
  render() {

    const welcome = {
      heading: <span style={{ color: 'white' }}>Getting Started</span>,
      paragraph: <div><p style={{ color: '#AADBFF' }}>Hi there Designer! This is the Deign guide for Helsinki City Design System. </p></div>,
      buttonText: 'Explore Sketch Documentation'
    }
    const DownloadButtonImage = { imageURL: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Sketch_logo_frame.svg' };
    const text = { text: 'Download' }






    return (
      <div>
        <div style={sectionStyle_1}>
          <Container>
            <Row>
              <Welcome welcome={welcome} />
            </Row>
          </Container>
        </div>
        <Container style={mediaObject}>
          <h1>Tools</h1>
          <p>The Design System is using Sketch App as the medium for creating new Designs. We engourage you to download the Sketch Documents and jump into building services from the components, modules and patterns made ready in the documents.</p>
        </Container>


        <Container style={mediaObject}>
          <Media className="sketch-thumbnail" >
            <Media left href="#">
              <Media object style={sketchStyle} src={DownloadButtonImage.imageURL} alt="Sketch" />
            </Media>
            <Media body>

              <Media heading>
                Download Sketch App
                </Media>
                "Sketch is built for designers like you. With useful features, an intuitive interface and powerful plugins built by a community of developers, it helps you focus on what you do best.""
             </Media>
          </Media>
        </Container>
        <Container>
          <article >
            <Markdown source={Documentation} />
          </article>
        </Container>
        <Container>

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
const sketchStyle = {
  maxHeight: 60,
  marginLeft: 40,
  marginRight: 40
}

const mediaObject = {
  marginTop: 50,
  marginBottom: 50
}
export default DesignOverview;

