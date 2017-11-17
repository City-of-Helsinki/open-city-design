import React, { Component } from 'react';
import { Collapse, Button, Grid, Jumbotron, Col, Row, ButtonToolbar, Nav, Navbar, NavItem } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import SidebarComponents from './SidebarComponents';

class Sidebar extends Component {
  render() {
    return(
      <div>
        <SidebarComponents />
      </div> 
    );    
  }

}

export default Sidebar;