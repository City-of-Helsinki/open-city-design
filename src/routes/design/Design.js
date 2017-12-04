import React, { Component } from 'react';
import { Button, Grid, Jumbotron, Col, Row, ButtonToolbar, Nav, Navbar } from 'reactstrap';
import Hero from '../../components/Hero';
import Welcome from '../../components/Welcome';
import helsinki from '../../images/helsinki.png';


class Design extends Component {
  render() {


    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
export default Design;

