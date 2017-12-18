import React, { Component } from 'react'
import { Button, Grid, Jumbotron, Col, Row, ButtonToolbar, Container, Nav, Navbar } from 'reactstrap';
import Welcome from '../../components/Welcome';
import Image from '../../components/Image';
import ContentTextWithImage from '../../components/ContentTextWithImage';
import image1 from '../../images/sketch-how-to/1-open-files.png';
import image2 from '../../images/sketch-how-to/2-sketch-library.png';
import image3 from '../../images/sketch-how-to/3-open-resources.png';
import image4 from '../../images/sketch-how-to/4-modify-symbol.png';
import image5 from '../../images/sketch-how-to/5-accept-changes.png';



class BrandMaterial extends Component {
      render() {
            const image = { url: 'https://www.sketchapp.com/images/press/sketch-press-kit/app-icons/sketch-mac-icon@2x.png' };
            const welcome = {
                  heading: "Sketch Documentation",
                  paragraph: "How to apply Sketch files in your design process"
            };

            const URL = {
                  url: 'https://github.com/nettinero/open-city-guide/tree/master/hki-sketch'
            }
            const cards = {
                  "cards": [
                        {
                              key: 1,
                              header: '1. Download the files',
                              paragraph: <p>Download the file from <a href={'www.facebook.com'}>here</a> or from <a href={'www.github.com'}>GitHub</a>.</p>,
                              imageURL: image1,
                              buttonURL: '#',
                              buttonText: 'Download Sketch Library'
                        }
                  ]
                  }
            return (
                  <div>
                        <Container>
                        <Welcome welcome={welcome} />
                        <Row  >

                        {cards.cards.map((card, i) =>
                                                
                              <Col style={rowStyle} xs='12' lg='6' >
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

export default BrandMaterial;