import React, { Component } from 'react';
import { Collapse, Button, Grid, Jumbotron, Badge, Col, Row, ButtonToolbar, Nav, Navbar, NavItem } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import SidebarDevelopment from './development/SidebarDevelopment';
import SidebarButton from './SidebarButton';
import SidebarDropdown from './SidebarDropdown';

class Sidebar extends Component {
  render() {
    const SidebarStyles = {
      margin: 20,
      backgroundColor: ' $gray-100',
      maxWidth: 250,
      
    };
    const logoStyles = {
      margin: 20,
      maxWidth: 180
    }
   
 


    return(
      <div style={SidebarStyles} >
        <NavLink to='/'><h4 style={logoStyles}>Open City Design System</h4></NavLink>
        <SidebarDropdown />
        <NavLink to='/design/overview'><SidebarButton buttonText={'Design Guide'} /></NavLink>
        <NavLink to='/development/overview'><SidebarButton buttonText={'Development Guide'} /></NavLink>

      </div> 
    );    
  }


}

export default Sidebar;