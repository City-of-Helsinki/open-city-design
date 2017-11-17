import React, { Component } from 'react';
import { Button, Grid, Jumbotron, Col, Row, ButtonToolbar, Nav, Navbar } from 'reactstrap';
import './Home.css';
import Sidebar from '../components/Sidebar/Sidebar';
import Hero from '../components/Hero';
import Welcome from '../components/Welcome';
import Image from '../components/Image';
import helsinki from '../images/helsinki.png';

class Design extends Component {
  render() {
       const image = {url: '../images/helsinki.png'};
       const imageStyle = { maxHeight: '20px' };
       const helsinkiImageStyle = { maxHeight: '500px', marginTop: '60px'}
       const welcome = {
            heading: "Welcome Designer",
            paragraph: "Use this guide to create designs"
       };
       const sidebarLinks = [
                  { link: "Download Sketch Library", URL: 'SketchDocumentation' },
                  { link: "See font documentation", URL: 'FontDocumentation' },
                  { link: "Download Print Brand Guide", URL: 'PrintBrandGuide' },
                  { link: "How to use", URL: 'HowToUse' },
                  
            ];

        const imgStyle = {
              maxHeight: '20px',
        }
    return (
      <div className="row">
           <Col xs={6} md={4}>
                 <Sidebar />
           </Col>
           <Col xs={6} md={8}>
           <Welcome welcome={welcome} />
            <Button>Download Sketch Library <img style={imageStyle} src="https://www.sketchapp.com/images/press/sketch-press-kit/app-icons/sketch-mac-icon@2x.png" /></Button>
            <Button>View Font documentation</Button>
            <Button>Download Print Brand guidelines</Button>
            <Button>How to use</Button>
            <img style={helsinkiImageStyle} src={helsinki} />
                   </Col>

      </div>

    );
  }
}
export default Design;

