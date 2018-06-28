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
        <div className="section-jumbo--design">
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
