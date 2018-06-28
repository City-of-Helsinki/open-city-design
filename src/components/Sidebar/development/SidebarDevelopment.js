import React, { Component } from 'react'
import SidebarComponents from './SidebarComponents'
import SidebarModules from './SidebarModules'
import SidebarPatterns from './SidebarPatterns'
import SidebarPageTemplates from './SidebarPagetemplates'
import SidebarStyles from './SidebarStyles'
import { NavLink } from 'react-router-dom'

class SidebarDevelopment extends Component {
      render()  {

            return(
                  <div style={styles}>
                        <NavLink to='/development/overview' ><h4 style={sidebarStyles} className="list-group-item" ><a href="#getting-started">Getting started</a></h4></NavLink>
                        <SidebarStyles />
                        <SidebarComponents />
                        <SidebarModules />
                        <SidebarPatterns />
                        <SidebarPageTemplates />
                  </div>
            );
      }

}
const styles = {
      marginLeft: 20,
}
const sidebarStyles = {
      border: 'none',
      backgroundColor: 'transparent',
}
export default SidebarDevelopment;
