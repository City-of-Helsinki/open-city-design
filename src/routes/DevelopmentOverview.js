import React, { Component } from 'react';
import { Container, Button, Grid, Jumbotron, Col, Row, ButtonToolbar, Nav, Navbar } from 'reactstrap';
import './Home.css';
import Sidebar from '../components/Sidebar/Sidebar';
import Welcome from '../components/Welcome';


class DevelopmentOverview extends Component {
  render() {

    const welcome = {
          heading: "Welcome Developer",
          paragraph: "Welcome to the Open City Design System"
    };

    
    return (
          <div className="row">
                <Welcome welcome={welcome}/>
          </div>
    );
}
}
export default DevelopmentOverview;

