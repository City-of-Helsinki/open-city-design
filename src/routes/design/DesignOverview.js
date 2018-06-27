/* eslint react/no-multi-comp: 0, react/prop-types: 0, import/no-webpack-loader-syntax: off */


import React, { Component } from 'react';
import { Container, Row, Media } from 'reactstrap';
import Markdown from 'react-remarkable';

import Welcome from '../../components/Welcome';

import './DesignOverview.scss';

const Documentation = require('!!raw-loader!./DesignOverview.md');




class DesignOverview extends Component {
  render() {

    const welcome = {
      heading: <span style={{ color: 'white' }}>Getting started</span>,
      paragraph: <div><p style={{ color: '#AADBFF' }}>Hi there Designer! This is the Design guide for Helsinki City Design System.</p></div>,
      buttonText: 'Explore Sketch Documentation'
    }
    const DownloadButtonImage = { imageURL: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Sketch_logo_frame.svg' };


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
          <p>Open City Design System uses Sketch as the tool for creating new designs. We encourage you to download the Sketch files and jump into designing new components, modules and patterns.</p>
        </Container>


        <Container style={mediaObject}>

          <a href="https://sketchapp.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            <Media className="sketch-thumbnail" >
              <Media left href="#">
                <Media object style={sketchStyle} src={DownloadButtonImage.imageURL} alt="Sketch" />
              </Media>
              <Media body>

                <Media heading>
                  Download Sketch
                  </Media>
                  "Sketch is built for designers like you. With useful features, an intuitive interface and powerful plugins built by a community of developers, it helps you focus on what you do best."
              </Media>
            </Media>
          </a>
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
const linkStyle = {
  textDecoration: 'none'
}
export default DesignOverview;
