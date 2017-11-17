import React, { Component } from 'react';
import Prism from '../utility/prism.js';
import '../css/prism.css';
import '../css/docs.css';
import classnames from 'classnames';
import { Button, Grid, Jumbotron, Col, Row, ButtonToolbar, Nav, Navbar } from 'reactstrap';
import './Home.css';
import Sidebar from '../components/Sidebar/Sidebar';
import Welcome from '../components/Welcome';


class Components extends Component {
      render() {
            const imgStyle = {
                  maxHeight: '20px',
            };
            const welcome = {
                  heading: "Components",
                  paragraph: "From here you can see possible componenets"
            };
            
            
            return (
                  <div className="row">
                  <Col xs={6} md={3}>
                  <Sidebar />
                  </Col>
                  <Col xs={6} md={9}>
                 {this.props.children}
                  </Col>
                  </div>
                  
            );
      }
}
export default Components;

