import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, DropdownButton, NavDropdown, NavItem, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
  constructor(props) {
    super(props)

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      navOpen: false,
      dropdownOpen: false
    }
  }

  toggleNav() {
    this.setState({
      navOpen: !this.state.navOpen
    })
  }
  toggleDropdown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }

  render() {
    var navStyle = {
      marginBottom: 0,
      borderRadius: 0,
      position: 'relative',
      zIndex: 100,
      minWidth: '100%',
    }
    return (

      <Navbar color="light" light style={navStyle}  collapseOnSelect>
          <NavbarBrand>
            <NavLink to="/"><a href="#">Open City Design System</a></NavLink>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNav} />
        <Collapse>
          <Nav>
          <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
            <DropdownToggle caret>
              Select City
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Helsinki</DropdownItem>
              <DropdownItem>Turku</DropdownItem>
              <DropdownItem>Tampere</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>


            <NavItem><Button><NavLink to="/Design" activeStyle={{
            fontWeight: 'bold',
            color: 'red'
          }}>Design</NavLink>
          </Button></NavItem>
          <NavItem>
          <Button><NavLink to="/Development" activeStyle={{
            fontWeight: 'bold',
            color: 'red'
          }}>Development</NavLink>
          </Button>
          </NavItem>
          </Nav>
        </Collapse>
      </Navbar>


    );

  }
}
export default Navigation;