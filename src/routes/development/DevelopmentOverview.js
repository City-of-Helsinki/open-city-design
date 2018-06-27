/* eslint react/no-multi-comp: 0, react/prop-types: 0, import/no-webpack-loader-syntax: off */


import React, { Component } from 'react';
import { Container, Media, Row } from 'reactstrap';
import Markdown from 'react-remarkable';
import './DevelopmentOverview.scss';

import Welcome from '../../components/Welcome';

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

        <div className="section-jumbo--development">
          <Container>
            <Row>
              <Welcome welcome={welcome} />
            </Row>
          </Container>
        </div>
        <Container>

        <Container style={mediaObject}>
          <a href={globals.github} target="_blank" style={linkStyle}>
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
export default DevelopmentOverview;
