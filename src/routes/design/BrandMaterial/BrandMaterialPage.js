/* eslint react/no-multi-comp: 0, react/prop-types: 0, import/no-webpack-loader-syntax: off */

import React, { Component } from 'react'
import { Button, Grid, Jumbotron, Col, Row, ButtonToolbar, Media, Container, Nav, Navbar } from 'reactstrap';
import WelcomeSmall from '../../../components/WelcomeSmall';
import Markdown from 'react-remarkable';

import Image from '../../../components/Image';
import ContentTextWithImage from '../../../components/ContentTextWithImage';
import image1 from './brand-identity.png';

const Documentation = require('!!raw-loader!./BrandMaterial.md');

const Image1 = { url: image1 }



class DesignKit extends Component {
      render() {
            const image = { url: 'https://www.sketchapp.com/images/press/sketch-press-kit/app-icons/sketch-mac-icon@2x.png' };
            const welcome = {
                  heading: "Brand material",
                  paragraph: "Use brand material wisely"
            };
            const DownloadButtonImage = { imageURL: 'https://vignette2.wikia.nocookie.net/logopedia/images/0/00/Helsinki-logo-2017.png/revision/latest?cb=20170619092244' };
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





                              <div className="docs-example">
                                    <Image imageStyle={imageStyle} image={Image1} />
                              </div>


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
export default DesignKit;