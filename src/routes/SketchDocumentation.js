import React, { Component } from 'react'
import { Button, Grid, Jumbotron, Col, Row, ButtonToolbar, Nav, Navbar } from 'reactstrap';
import Welcome from '../components/Welcome';
import Sidebar from '../components/Sidebar';
import Image from '../components/Image';

class SketchDocumentation extends Component {
      render() {
            const image = { url: 'https://www.sketchapp.com/images/press/sketch-press-kit/app-icons/sketch-mac-icon@2x.png' };
            const imageStyle = { maxHeight: '20px' };
            const welcome = {
                  heading: "Sketch Documentation",
                  paragraph: "How to apply Sketch files in your design process"
            };
            const sidebarLinks = [
                  { link: "Download Sketch Library", URL: 'SketchDocumentation' },
                  { link: "See font documentation", URL: 'FontDocumentation' },
                  { link: "Download Print Brand Guide", URL: 'PrintBrandGuide' },
                  { link: "How to use", URL: 'HowToUse' },
            ];

            const welcomeStyle = {
                  marginBottom: 0,
                  borderRadius: 0,
                  padding: 10,
                  backgroundColor: 'transparent',
            }
            return (
                  <div className="row">
                        <Col xs={6} md={4}>
                              <Sidebar sidebarLinks={sidebarLinks} />
                        </Col>
                        <Col xs={6} md={8}>
                              <Welcome welcome={welcome} />
                              <Button>Download Sketch Library<Image image={image} imageStyle={imageStyle} /></Button>
                        </Col>
                  </div>
            );
      }

}

export default SketchDocumentation;