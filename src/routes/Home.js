import React, { Component } from 'react';
import { Button, Grid, Jumbotron, Col, Row, ButtonToolbar, Nav, Navbar,} from 'reactstrap';
import './Home.css';
import Sidebar from '../components/Sidebar/Sidebar';
import Hero from '../components/Hero';
import Welcome from '../components/Welcome';


class Home extends Component {
 
  render() {
    const welcome = {
      heading: 'Collaborative Network',
      paragraph: 'Welcome to the open City design System – a system built to collect City Designs from Helsnki, Tuku, Tampere etc. to one collaborative network.'
    }

    return (
      <div>
     
  
            <Hero />
            <Welcome welcome={welcome}/>
      </div>

    ); 
  }
} 
export default Home;

