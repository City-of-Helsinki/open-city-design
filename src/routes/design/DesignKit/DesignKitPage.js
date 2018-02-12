/* eslint react/no-multi-comp: 0, react/prop-types: 0, import/no-webpack-loader-syntax: off */

import React, { Component } from 'react'
import { Button, Grid, Jumbotron, Col, Row, ButtonToolbar, Media, Container, Nav, Navbar } from 'reactstrap';
import WelcomeSmall from '../../../components/WelcomeSmall';
import Markdown from 'react-remarkable';

import Image from '../../../components/Image';
import ContentTextWithImage from '../../../components/ContentTextWithImage';
import image1 from '../../../images/sketch-how-to/1-open-files.png';
import image2 from '../../../images/sketch-how-to/2-sketch-library.png';
import image3 from '../../../images/sketch-how-to/3-open-resources.png';
import image4 from '../../../images/sketch-how-to/4-modify-symbol.png';
import image5 from '../../../images/sketch-how-to/5-accept-changes.png';

import globals from '../../../globals.json';

const Documentation = require('!!raw-loader!./DesignKit.md');

const Image1 = { url: image1 }
const Image2 = { url: image2 }
const Image3 = { url: image3 }
const Image4 = { url: image4 }
const Image5 = { url: image5 }


class DesignKit extends Component {
      render() {
            const image = { url: 'https://www.sketchapp.com/images/press/sketch-press-kit/app-icons/sketch-mac-icon@2x.png' };
            const welcome = {
                  heading: "Design Kit",
                  paragraph: "How to apply Sketch files in your design process"
            };
            const DownloadButtonImage = { imageURL: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Sketch_logo_frame.svg' };
            const text = { text: 'Download Sketch Resources' }

            const URL = {
                  url: 'https://github.com/City-of-Helsinki/open-city-design/tree/master/hki-sketch'
            }

            return (
                  <div>
                        <Container>
                              <WelcomeSmall welcome={welcome} />
                              <article className="docs-markdown">
                                    <Markdown source={Documentation} />
                              </article>
                             


                              
                

                              <div className="docs-example">
                                    <Image imageStyle={imageStyle} image={Image3} />
                              </div>
                              <a href={globals.sketchMaterial} target="_blank" style={linkStyle}>
                              <Media className="sketch-thumbnail" >
                                    <Media left href="#">
                                          <Media object style={sketchStyle} src={DownloadButtonImage.imageURL} alt="Sketch" />
                                    </Media>
                                    <Media body>

                                          <Media heading>
                                                Download Sketch Resources
                                          </Media>
                                          Contents:  hki-library, modules and patterns Sketch files 
                                    </Media>
                              </Media>
                              </a>
                        </Container>

                  </div>

            );
      }

}

const imageStyle = { maxWidth: '100%' };

const welcomeStyle = {
      marginBottom: 0,
      borderRadius: 0,
      padding: 10,
      backgroundColor: 'transparent',
}
const rowStyle = {
      marginBottom: 50,
}

const sketchStyle = {
      maxHeight: 60,
      marginLeft: 40,
      marginRight: 40
}

const linkStyle = {
      textDecoration: 'none'
}
export default DesignKit;