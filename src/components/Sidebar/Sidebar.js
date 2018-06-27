import React, { Component } from 'react';
import { Badge } from 'reactstrap';
import { NavLink } from 'react-router-dom';
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
        <NavLink to='/'><h4 style={logoStyles}>Open City Design System<Badge color="secondary">Alpha</Badge></h4></NavLink>
        <SidebarDropdown />
        <NavLink to='/development/overview'><SidebarButton buttonText={'Development Guide'} /></NavLink>
        <NavLink  to='/design/overview'><SidebarButton  buttonText={'Design Guide'} /></NavLink>

      </div>
    );
  }


}

export default Sidebar;
