import React, { Component } from 'react';
import { Button, Grid, Jumbotron, Col, Row, ButtonToolbar, Nav, Navbar } from 'reactstrap';
import Footer from '../../components/Footer';

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

