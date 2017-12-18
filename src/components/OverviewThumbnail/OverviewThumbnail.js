import React, { Component } from 'react'
import { Container, Button, Grid, Jumbotron, Col, Row, ButtonToolbar, Nav, Navbar, Badge } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './OverviewThumbnail.scss';

class OverviewThumbnail extends Component {
      render() {

            return (
                  <NavLink to={this.props.card.url} >

                        <div className="thumbnail">

                              <h3 style={{ marginBottom: '30px', marginTop: '30px' }}>{this.props.card.header}</h3>
                              <p>{this.props.card.paragraph}</p>
                              <Col sm="8">

                                    {this.props.card.componentName}
                              </Col>

                        </div>
                  </NavLink>

            );
      }

}
const style = {
      height: 200,
      position: 'relative',
      padding: '1em 1em 1em',
      marginTop: '2rem',
      border: '2px solid rgba(52, 52, 52, 0.1)',
      backgroundColor: 'rgba(52, 52, 52, 0.1)'
}
export default OverviewThumbnail;