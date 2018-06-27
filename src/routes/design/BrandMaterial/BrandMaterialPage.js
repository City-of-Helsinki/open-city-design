/* eslint react/no-multi-comp: 0, react/prop-types: 0, import/no-webpack-loader-syntax: off */

import React, { Component } from 'react'
import { Media, Container } from 'reactstrap';
import WelcomeSmall from '../../../components/WelcomeSmall';
import Markdown from 'react-remarkable';

import Image from '../../../components/Image';
import image1 from './brand-identity.png';

import globals from '../../../globals.json';

const Documentation = require('!!raw-loader!./BrandMaterial.md');

const Image1 = { url: image1 }



class DesignKit extends Component {
      render() {
            const welcome = {
                  heading: "Brand material",
                  paragraph: ""
            };
            const DownloadButtonImage = { imageURL: 'https://vignette2.wikia.nocookie.net/logopedia/images/0/00/Helsinki-logo-2017.png/revision/latest?cb=20170619092244' };

            return (
                  <div>
                        <Container>
                              <WelcomeSmall welcome={welcome} />
                              <article className="docs-markdown">
                                    <Markdown source={Documentation} />
                              </article>
                              <a href={globals.brandMaterial} target="_blank" style={linkStyle}>
                                    <Media className="sketch-thumbnail" >
                                          <Media left href="#">
                                                <Media object style={sketchStyle} src={DownloadButtonImage.imageURL} alt="Sketch" />
                                          </Media>
                                          <Media body>
                                                <Media heading>
                                                      Download Helsinki City Brand Material
                                                </Media>
                                                Helsinki Brand
                                          </Media>
                                    </Media>
                              </a>





                              <div className="docs-example">
                                    <Image imageStyle={imageStyle} image={Image1} />
                              </div>


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
      textDecoration: "none"
}
export default DesignKit;
