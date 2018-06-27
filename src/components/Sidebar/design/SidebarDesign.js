import React, { Component } from 'react'

import { NavLink } from 'react-router-dom';




class SidebarDesign extends Component {


      render() {
            const sidebarStyles = {
                  border: 'none',
                  backgroundColor: 'transparent',
                  marginLeft: 20
            }

      return(
                  <div className="list-group">
                  <NavLink to='/design/designkit/' ><h4 style={sidebarStyles} className="list-group-item" >Design Kit</h4></NavLink>
                  <NavLink to='/design/brandmaterial/' ><h4 style={sidebarStyles} className="list-group-item" >Brand Material</h4></NavLink>

                  </div>
            );
}

}

export default SidebarDesign;
