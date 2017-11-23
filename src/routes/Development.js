import React, { Component } from 'react';
import { Button, Grid, Jumbotron, Col, Row, ButtonToolbar, Nav, Navbar } from 'reactstrap';
import './Home.css';
import Sidebar from '../components/Sidebar/Sidebar';
import Welcome from '../components/Welcome';

class Development extends Component {
      render() {
            return (
                  <div>
                        {this.props.children}
                  </div>
            );
      }
}
export default Development;

