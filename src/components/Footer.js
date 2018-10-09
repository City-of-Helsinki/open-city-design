import React, { Component } from 'react'

import { Col, Row, Container, Media  } from 'reactstrap';

import Sponsors from './Sponsors.js';


import './Footer.scss'

class Footer extends Component {
      render() {



            const cards = {
                  "cards": [
                        {
                              key: 1,
                              header: 'Sketch',
                              paragraph: 'Download the Sketch library to design applications in Sketch. (Note: you should have Sketch 47 or later installed to take advantage of the libraries. View Sketch documentation for more information.)',
                              imageURL: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Sketch_logo_frame.svg',
                              buttonURL: 'https://github.com/City-of-Helsinki/open-city-design/tree/master/hki-sketch',
                              buttonText: 'Download Sketch Library'
                        },
                        {
                              key: 2,
                              header: 'NPM',
                              paragraph: 'When ready to use in production the styles and tools will be made available for your project via npmjs.',
                              imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/640px-Npm-logo.svg.png',
                              buttonURL: '',
                              buttonText: 'Download Styles Using NPM'

                        },
                        {
                              key: 3,
                              header: 'GitHub',
                              paragraph: 'The styles and design tools can be downloaded from GitHub. Use the repositories to add styles to your projects.',
                              imageURL: 'https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png',
                              buttonURL: 'https://github.com/City-of-Helsinki/open-city-design',
                              buttonText: 'Go to OCDS GitHub'

                        },
                        {
                              key: 4,
                              header: 'Slack',
                              paragraph: 'We use Slack for discussion. Please participate and give feedback or show your creations. You may request a Slack invitation by pressing the link.',
                              imageURL: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png',
                              buttonURL: 'https://join.slack.com/t/opencitydesignsystem/signup',
                              buttonText: 'Take part in Slack'

                        },

                  ]
            }

            return (
                  <div style={footerStyle}>
                        <footer style={footerLinkSectionStyle}>
                              <Container>
                                    <Row >
                                          {cards.cards.map((card, i) =>
                                                <Col style={rowStyle} xs='12' lg='6' >

                                                      <a {...(card.buttonURL ? {href: card.buttonURL} : {})} style={linkStyle} target="_blank">

                                                            <Media className="footer-thumbnail" key={i} card={card}>
                                                                  <Media left href="#">
                                                                        <Media className="media-img" object style={sketchStyle} src={card.imageURL} alt={card.header} />
                                                                  </Media>
                                                                  <Media body>

                                                                        <Media  className="footer-text" heading>
                                                                              {card.header}
                                                                        </Media>
                                                                        {card.paragraph}
                                                                  </Media>
                                                            </Media>

                                                      </a>



                                                </Col>
                                          )}
                                    </Row>

                                    <Row>
                                          <Col xs='12'>
                                                <Sponsors placement="footer" />
                                          </Col>
                                    </Row>
                              </Container>
                        </footer>
                  </div>

            );
      }
}

const footerStyle = {
      marginTop: '300px',
      bottom: 0,

}

const sketchStyle = {
      maxHeight: 60,
      marginLeft: 40,
      marginRight: 40
}

const footerLinkSectionStyle = {
      backgroundColor: '#343434',
      minHeight: 700,
}

const rowStyle = {
      paddingTop: 25,
      marginBottom: 25

}
const linkStyle = {
      color: 'white',
      textDecoration: 'none',
      display: 'block'
}




export default Footer;
