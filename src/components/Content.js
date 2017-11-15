import React, { Component } from 'react'
import { Button, Grid, Jumbotron, Col, Row, ButtonToolbar, Nav, Navbar, NavDropdown, NavItem, MenuItem } from 'react-bootstrap';


class Content extends Component {
      render()  {
            var contentStyle = {
                  marginBottom: 0,
                  borderRadius: 0,
                }
            return(
                  <div>
                        <h2>
                        Using the Design System
                        </h2>
                        <h3>
                              This is a practical guide to how to use this guide in your development work
                        </h3>
                  </div>       
            );
      }

}

export default Content;