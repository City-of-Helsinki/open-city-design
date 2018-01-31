import React, { Component } from 'react'
import { Button, Grid, Jumbotron, Col, Row, ButtonToolbar, Container, Nav, Navbar } from 'reactstrap';
import WelcomeSmall from '../../../components/WelcomeSmall';
import DownloadButton from '../../../components/DownloadButton/DownloadButton';

import Image from '../../../components/Image';
import ContentTextWithImage from '../../../components/ContentTextWithImage';
import image1 from '../../../images/sketch-how-to/1-open-files.png';
import image2 from '../../../images/sketch-how-to/2-sketch-library.png';
import image3 from '../../../images/sketch-how-to/3-open-resources.png';
import image4 from '../../../images/sketch-how-to/4-modify-symbol.png';
import image5 from '../../../images/sketch-how-to/5-accept-changes.png';



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
            const cards = {
                  "cards": [

                        {
                              key: 2,
                              header: '1. After installing the Sketch resources open the hki-library file.',
                              imageURL: image1,
                              buttonURL: '#',
                              buttonText: 'Download Sketch Library'
                        },
                        {
                              key: 2,
                              header: '2. In the hki-library Sketch you can modify Components',
                              imageURL: image2,
                              buttonURL: '#',
                              buttonText: 'Download Sketch Library'
                        },
                        {
                              key: 2,
                              header: '3. G',
                              imageURL: image3,
                              buttonURL: '#',
                              buttonText: 'Download Sketch Library'
                        },
                        {
                              key: 2,
                              header: '5. Modify a symbol in an external library',
                              imageURL: image4,
                              buttonURL: '#',
                              buttonText: 'Download Sketch Library'
                        },
                        {
                              key: 2,
                              header: '6. Accept changes from the library',
                              buttonText: 'Download Sketch Library',
                              imageURL: image5,
                              buttonURL: '#',
                              buttonText: 'Download Sketch Library'
                        },
                  ]
            }
            return (
                  <div>
                        <Container>
                              <WelcomeSmall welcome={welcome} />
                              <DownloadButton DownloadButtonImage={DownloadButtonImage} text={text} />
                              <h1>Instructions</h1>
                              <p>Download the resources and follow these instructions in order to activate the Sektch Library fro your project</p>
                              <Row>
                              {cards.cards.map((card, i) =>

                                    <Col style={rowStyle} xs='12' lg='12' >
                                          <ContentTextWithImage key={i} card={card} />
                                    </Col>
                              )}
                              </Row>
</Container>

                  </div>

            );
      }

}

const imageStyle = { maxHeight: '20px' };

const welcomeStyle = {
      marginBottom: 0,
      borderRadius: 0,
      padding: 10,
      backgroundColor: 'transparent',
}
const rowStyle = {
      marginBottom: 50,
}

export default DesignKit;