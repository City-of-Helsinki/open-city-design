import React, { Component } from 'react'
import { Container, Button, Grid, Jumbotron, Col, Row, ButtonToolbar, Nav, Navbar, Badge } from 'reactstrap';
import Image from './Image';
import { NavLink } from 'react-router-dom';


class OverviewThumbnail extends Component {
      render() {
            
            return (
                  <div style={style}>
                        <h3 style={{ marginBottom: '30px', marginTop: '30px' }}>{this.props.card.header}</h3>
                        <p>{this.props.card.paragraph}</p>
                        <NavLink to='#' >
                             {this.props.card.componentName}
                        </NavLink>
                  </div>
            );
      }

}
const style = {
      height: 200,
}
export default OverviewThumbnail;