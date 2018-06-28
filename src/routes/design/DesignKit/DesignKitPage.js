/* eslint react/no-multi-comp: 0, react/prop-types: 0, import/no-webpack-loader-syntax: off */

import React, { Component } from 'react'
import { Media, Container } from 'reactstrap';
import WelcomeSmall from '../../../components/WelcomeSmall';
import Markdown from 'react-remarkable';

import Image from '../../../components/Image';
import image3 from '../../../images/sketch-how-to/3-open-resources.png';


import globals from '../../../globals.json';

const Documentation = require('!!raw-loader!./DesignKit.md');

const Image3 = { url: image3 }

class DesignKit extends Component {
      render() {
            const welcome = {
                  heading: "Design Kit",
                  paragraph: "How to apply Sketch files in your design process"
            };
            const DownloadButtonImage = { imageURL: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Sketch_logo_frame.svg' };

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

const sketchStyle = {
      maxHeight: 60,
      marginLeft: 40,
      marginRight: 40
}

const linkStyle = {
      textDecoration: 'none'
}
export default DesignKit;
