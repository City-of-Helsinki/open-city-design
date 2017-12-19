import React, { Component } from 'react'
import LazyHero from 'react-lazy-hero';
import { NavLink } from 'react-router-dom';
import { Col, Button, Row, Container, Media, Badge } from 'reactstrap';
import ContentTextWithButton from './ContentTextWithButton';
import ContentText from './ContentText';
import Sponsors from './Sponsors.js';
import sketch from '../images/sketch_narrow.png';
import git from '../images/git.png';
import NPM from '../images/NPM.png';
import slack from '../images/slack.png';

import './Footer.scss'

class Footer extends Component {
      render() {



            const cards = {
                  "cards": [
                        {
                              key: 1,
                              header: 'Sketch',
                              paragraph: 'Download the Skecth Library to design applications using the Sketch Library (note: you should have the latest Sketch Beta installed. View Sketch documentation for more information)',
                              imageURL: 'https://www.sketchapp.com/images/press/sketch-press-kit/app-icons/sketch-mac-icon@2x.png',
                              buttonURL: '#',
                              buttonText: 'Download Sketch Library'
                        },
                        {
                              key: 2,
                              header: 'NPM',
                              paragraph: 'We have build a set of styles for you to download from NPM. Please view the NPM doocumentation for further information regarding The NPM usage.',
                              imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/640px-Npm-logo.svg.png',
                              buttonURL: '#',
                              buttonText: 'Download Styles Using NPM'

                        },
                        {
                              key: 2,
                              header: 'Github',
                              paragraph: 'The styles alongside with design tools -can be downloaded from Gil Hub. Use the repositoies to add styles to your projects.',
                              imageURL: 'https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png',
                              buttonURL: '#',
                              buttonText: 'Go to OCDS GitHub'

                        },
                        {
                              key: 2,
                              header: 'Slack',
                              paragraph: 'There is a slack discussion on going abput the development of the Design System. Please participate and give feedback or show your creations. Request a slack invitation by pressing the link.',
                              imageURL: 'https://cdn.worldvectorlogo.com/logos/slack-1.svg',
                              buttonURL: '#',
                              buttonText: 'Take part in Slack'

                        },

                  ]
            }
            const footerText = [
                  {
                        key: 1,
                        header: 'Latest update 13.12.2017',
                        paragraph: 'View Licenses'
                  },
                  {
                        key: 2,
                        header: 'Questions about the site visit www.helsinki.fi',
                        paragraph: 'Take a look at this link'
                  },

            ]


            return (
                  <div style={footerStyle}>
                        <footer style={footerLinkSectionStyle}>
                              <Container>
                                    <Row >
                                          {cards.cards.map((card, i) =>
                                                <Col style={rowStyle} xs='12' lg='6' >

                                                      <Media className="footer-thumbnail" key={i} card={card} >
                                                            <Media left href="#">
                                                                  <Media className="media-img" object style={sketchStyle} src={card.imageURL} alt="Sketch" />
                                                            </Media>
                                                            <Media body>

                                                                  <Media  className="footer-text" heading>
                                                                        {card.header}
                                                                  </Media>
                                                                  {card.paragraph}
                                                            </Media>
                                                      </Media>




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
const footerBottomSectionStyle = {
      backgroundColor: '#9fc9eb',
      height: 350,
      padding: 100
}
const rowStyle = {
      paddingTop: 25,
      marginBottom: 25

}



export default Footer;