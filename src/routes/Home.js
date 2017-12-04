import React, { Component } from 'react';
import { Button, Grid, Jumbotron, Col, Row, ButtonToolbar, Nav, Navbar,} from 'reactstrap';
import Hero from '../components/Hero';
import Welcome from '../components/Welcome';


class Home extends Component {
 
  render() {
    const welcome = {
      heading: 'Collaborative Network',
      paragraph: 'Welcome to the open City design System – a system built to collect City Designs from Helsnki, Tuku, Tampere etc. to one collaborative network.'
    }
    const button = {
      button: true
    }
    const hero = {
      hero: 'Open City Design System',
      header: 'Helsinki',
      paragraph: 'Start creating your best designs and collaborate with developers to create best solutions for your city',
      
    
    }
    const heroStyle = {
    }
      const sidebarShow = {
        display: false
    }

    return (
      <div>
     
     
            <Hero hero={hero} style={heroStyle} heroHeight={'100vh'} />
            
      </div>

    ); 
  }
} 
export default Home;

