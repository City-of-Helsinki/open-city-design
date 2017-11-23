import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, DropdownButton, NavDropdown, NavItem, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
       <nav class="navbar navbar-expand-md navbar-fixed-top navbar-inverted main-nav">
       <div class="container">
           <div class="navbar-collapse collapse nav-content order-2">
               <ul class="nav navbar-nav">
                   <li class="nav-item active">
                       <NavLink to="/"><a class="nav-link" href="#">Open City Design System</a></NavLink>
                   </li>
                   <li class="nav-item">
                       <a class="nav-link" href="#">Download</a>
                   </li>
                   <li class="nav-item">
                       <a class="nav-link" href="#">Register</a>
                   </li>
               </ul>
           </div>
           <ul class="nav navbar-nav text-nowrap flex-row mx-md-auto order-1 order-md-2">
               <li class="nav-item"><a class="nav-link" href="#">Website Name</a></li>
               <button class="navbar-toggler ml-2" type="button" data-toggle="collapse" data-target=".nav-content" aria-expanded="false" aria-label="Toggle navigation">
                   <span class="navbar-toggler-icon"></span>
               </button>
           </ul>
           <div class="ml-auto navbar-collapse collapse nav-content order-3 order-md-3">
               <ul class="ml-auto nav navbar-nav">
                   <li class="nav-item">
                       <a class="nav-link" href="#">Rates</a>
                   </li>
                   <li class="nav-item">
                       <a class="nav-link" href="#">Help</a>
                   </li>
                   <li class="nav-item">
                       <a class="nav-link" href="#">Contact</a>
                   </li>
               </ul>
           </div>
       </div>
   </nav>
      </div>
    );
  }
}

export default Navigation;