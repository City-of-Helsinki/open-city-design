import React, { Component } from 'react'
import SidebarComponents from './SidebarComponents'
import SidebarModules from './SidebarModules'
import SidebarPatterns from './SidebarPatterns'
import SidebarPageTemplates from './SidebarPagetemplates'

class SidebarDevelopment extends Component {
      render()  {
            const SidebarStyles = {
                  marginLeft: 20,
            }
            return(
                  <div style={SidebarStyles}>
                        <SidebarComponents />
                        <SidebarModules />
                        <SidebarPatterns />
                        <SidebarPageTemplates />
                  </div>
            );
      }

}

export default SidebarDevelopment;



