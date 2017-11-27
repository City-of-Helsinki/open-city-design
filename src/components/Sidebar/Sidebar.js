import React, { Component } from 'react';
import { Collapse, Button, Grid, Jumbotron, Col, Row, ButtonToolbar, Nav, Navbar, NavItem } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import SidebarComponents from './SidebarComponents';
import SidebarModules from './SidebarModules';
import SidebarPatterns from './SidebarPatterns';
import SidebarPagetemplates from './SidebarPagetemplates';
import SidebarButton from './SidebarButton';
import SidebarDropdown from './SidebarDropdown';

class Sidebar extends Component {
  render() {
    const SidebarStyles = {
      margin: 10,
      backgroundColor: ' $gray-100',
    };
    const logoStyles = {
      margin: 20,
      maxWidth: 180
    }
    


    return(
      <div style={SidebarStyles} >
        <NavLink to='/'><h4 style={logoStyles}>Open City Design System</h4></NavLink>
        <SidebarDropdown />
        <NavLink to='Design'><SidebarButton buttonText={'Design Guide'} /></NavLink>
        <NavLink to='Development'><SidebarButton buttonText={'Development Guide'} /></NavLink>
        <SidebarComponents />
        <SidebarModules />
        <SidebarPatterns />
        <SidebarPagetemplates />
  

      </div> 
    );    
  }


}

export default Sidebar;