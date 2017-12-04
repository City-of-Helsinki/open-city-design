import React, { Component } from 'react'
import { Collapse, Button, Grid, Jumbotron, Col, Row, ButtonToolbar, Nav, Navbar, NavItem } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';

import SidebarColors from './SidebarColors';
import SidebarLogos from './SidebarLogos';
import SidebarPrint from './SidebarPrint';
import SidebarSketch from './SidebarSketch';
import SidebarTypography from './SidebarTypography';


class SidebarDesign extends Component {
      constructor(props) {
            super(props);
            this.toggle = this.toggle.bind(this);
            this.state = { components: false };
      }

      toggle() {
            this.setState({ components: !this.state.components });
      };

      render() {
            const sidebarStyles = {
                  border: 'none',
                  backgroundColor: 'transparent',
                  marginLeft: 20
            }
            const linkStyle = {
                  border: 'none',
                  backgroundColor: 'transparent',
                  padding: 4,
                  paddingLeft: 45,
            }


      

      return(
                  <div className="list-group">
                  <NavLink activeStyle={{ color:'#00d7a7' }} to='/design/sketchdocumentation' ><h4 style={sidebarStyles} className="list-group-item" ><a href="#">Sketch Library</a></h4></NavLink>
                  <NavLink activeStyle={{ color:'#00d7a7' }}  to='/design/logodocumentation' ><h4 style={sidebarStyles} className="list-group-item" ><a href="#">Logos</a></h4></NavLink>
                  <NavLink to='/design/sketchdocumentation' ><h4 style={sidebarStyles} className="list-group-item" ><a href="#">Typography</a></h4></NavLink>
                  <NavLink to='/design/sketchdocumentation' ><h4 style={sidebarStyles} className="list-group-item" ><a href="#">Colors</a></h4></NavLink>
                  <NavLink to='/design/sketchdocumentation' ><h4 style={sidebarStyles} className="list-group-item" ><a href="#">Print</a></h4></NavLink>

                  </div>
            );
}

}

export default SidebarDesign;



