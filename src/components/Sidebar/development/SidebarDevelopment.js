import React, { Component } from 'react'
import SidebarComponents from './SidebarComponents'
import SidebarModules from './SidebarModules'
import SidebarPatterns from './SidebarPatterns'
import SidebarPageTemplates from './SidebarPagetemplates'
import SidebarStyles from './SidebarStyles'

class SidebarDevelopment extends Component {
      render()  {
            const styles = {
                  marginLeft: 20,
            }
            return(
                  <div style={styles}>
                        <SidebarStyles />
                        <SidebarComponents />
                        <SidebarModules />
                        <SidebarPatterns />
                        <SidebarPageTemplates />
                  </div>
            );
      }

}

export default SidebarDevelopment;



