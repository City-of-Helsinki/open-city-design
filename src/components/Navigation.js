import React, { Component } from 'react';
import { Nav, Navbar, DropdownButton, NavDropdown, NavItem, MenuItem, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
  render() {
    var navStyle = {
      marginBottom: 0,
      borderRadius: 0,
      position: 'relative',
      zIndex: 100,
      minWidth: '100%',
    }
    return (

      <Navbar style={navStyle}  collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <NavLink to="/"><a href="#">Open City Design System</a></NavLink>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
          <MenuItem >
          <DropdownButton title="Select City" id="bg-nested-dropdown">
          <MenuItem eventKey="1">Helsinki</MenuItem>
          <MenuItem eventKey="2">Turku</MenuItem>
          <MenuItem eventKey="2">Tampere</MenuItem>
          
        </DropdownButton>
        </MenuItem >

            <MenuItem><Button><NavLink to="/Design" activeStyle={{
            fontWeight: 'bold',
            color: 'red'
          }}>Design</NavLink>
          </Button></MenuItem>
          <MenuItem>
          <Button><NavLink to="/Development" activeStyle={{
            fontWeight: 'bold',
            color: 'red'
          }}>Development</NavLink>
          </Button>
          </MenuItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">Link Right</NavItem>
            <NavItem eventKey={2} href="#">Link Right</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>


    );

  }
}
export default Navigation;