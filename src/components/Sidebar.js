import React, { Component } from 'react'
import { Button, Grid, Jumbotron, Col, Row, ButtonToolbar, Nav, Navbar, NavItem } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom'

class Sidebar extends Component {
  render() {
    const sidebarStyles = {
      border: 'none',
    }
    return (

      <div className="list-group">

        <div>
        {this.props.sidebarLinks.map((sidebarLink, i) => <a key={i} href="#"  style={sidebarStyles}  className="list-group-item">
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