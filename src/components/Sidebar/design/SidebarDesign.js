import React, { Component } from 'react'
import { Collapse, Button, Grid, Jumbotron, Col, Row, ButtonToolbar, Nav, Navbar, NavItem } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';




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
                  <NavLink to='/design/designkit' ><h4 style={sidebarStyles} className="list-group-item" ><a href="#">Design Kit</a></h4></NavLink>
                  <NavLink to='/design/brandmaterial' ><h4 style={sidebarStyles} className="list-group-item" ><a href="#">Brand Material</a></h4></NavLink>

                  </div>
            );
}

}

export default SidebarDesign;



