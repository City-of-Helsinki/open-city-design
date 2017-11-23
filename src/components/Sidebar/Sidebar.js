import React, { Component } from 'react';
import { Collapse, Button, Grid, Jumbotron, Col, Row, ButtonToolbar, Nav, Navbar, NavItem } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import SidebarComponents from './SidebarComponents';
import SidebarModules from './SidebarModules';
import SidebarPatterns from './SidebarPatterns';
import SidebarPagetemplates from './SidebarPagetemplates';


class Sidebar extends Component {
  render() {
    const SidebarStyles = {
      margin: 'none',
     
      backgroundColor: ' $gray-100',
    }

    return(
      <div style={SidebarStyles} >

        <SidebarComponents />
        <SidebarModules />
        <SidebarPatterns />
        <SidebarPagetemplates />
      </div> 
    );    
  }


}

export default Sidebar;