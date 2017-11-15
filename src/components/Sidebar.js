import React, { Component } from 'react'
import { Button, Grid, Jumbotron, Col, Row, ButtonToolbar, Nav, Navbar, NavDropdown, NavItem, MenuItem } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom'

class Sidebar extends Component {
  render() {
    const sidebarStyles = {
      border: 'none',
    }
    return (

      <div class="list-group">

        <div>
        {this.props.sidebarLinks.map((sidebarLink, i) => <a key={i} href="#"  style={sidebarStyles}  class="list-group-item">
          <NavLink to={sidebarLink.URL} activeStyle={{
            color: 'red'
          }}>{sidebarLink.link}</NavLink>
        </a>)}
        </div>
      </div>
      




    );
  }

}

export default Sidebar;