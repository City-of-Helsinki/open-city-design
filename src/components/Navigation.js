import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
      dropdownOpen: false

    };
  }
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
       <nav style={styles.navbarStyle} class="navbar navbar-expand-md navbar-fixed-top navbar-inverted main-nav">
           <div class="navbar-collapse collapse nav-content order-2">
               <ul class="nav navbar-nav">
                   <li class="nav-item active">
                       <NavLink to="/"><h3 class="nav-link" href="#">Open City Design System</h3></NavLink>
                   </li>
                   <li>
                   <Dropdown   style={styles.navButtonStyle} size='sm' isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                   <DropdownToggle color="primary" caret>
                     Chose city
                   </DropdownToggle>
                   <DropdownMenu>

                     <DropdownItem>Helsinki</DropdownItem>
                     <DropdownItem divider />
                     <DropdownItem>Turku</DropdownItem>
                     <DropdownItem divider />
                     <DropdownItem>Tampere</DropdownItem>
                   </DropdownMenu>
                 </Dropdown>
                 </li>
                   <li class="nav-item">
                       <Button outline color="primary" style={styles.navButtonStyle} size='sm'>Design</Button>
                   </li>
                   <li class="nav-item">
                       <Button outline color="primary" style={styles.navButtonStyle} size='sm'>Development</Button>
                   </li>
               </ul>
           </div>
           <ul class="nav navbar-nav text-nowrap flex-row mx-md-auto order-1 order-md-2">
               <button class="navbar-toggler ml-2" type="button" data-toggle="collapse" data-target=".nav-content" aria-expanded="false" aria-label="Toggle navigation">
                   <span class="navbar-toggler-icon"></span>
               </button>
           </ul>
           <div class="ml-auto navbar-collapse collapse nav-content order-3 order-md-3">
               <ul class="ml-auto nav navbar-nav">
                   <li class="nav-item">
                       <a class="nav-link" href="#language">Language</a>
                   </li>
                   <li class="nav-item">
                       <a class="nav-link" href="#contact">Contact</a>
                   </li>
               </ul>
           </div>
   </nav>
      </div>
    );
  }
}

const styles = {
    navStyle: {
        height: 100,
},
    navButtonStyle: {
        margin: 20,
    }
}

export default Navigation;
