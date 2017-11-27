import React, { Component } from 'react'
import { Collapse, Button, Grid, Jumbotron, Col, Row, ButtonToolbar, Nav, Navbar, NavItem } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom'

class SidebarModules extends Component {
      constructor(props) {
            super(props);
            this.toggle = this.toggle.bind(this);
            this.state = { modules: false };
          }

  toggle() {
      this.setState({ modules: !this.state.modules });
};

  render() {
    const sidebarStyles = {
      border: 'none',
      backgroundColor: 'transparent',
      color: '#f5a3c7',
    }
    const linkStyle = {
      border: 'none',
      backgroundColor: 'transparent',
      padding: '5px',
      paddingLeft: '25px'
    }
    const sidebarLinks = {
      'modules': [
   
        {
          link: 'Navbar',
          URL: '/development/modules/navbar/'
        },
        {
          link: 'Footer',
          URL: '/development/modules/footer/'
        },
        {
          link: 'Loginmodal',
          URL: '/development/modules/loginmodal/'
        },
        {
          link: 'Tables',
          URL: '/development/modules/TablesPage/'
        },
        {
          link: 'Hero',
          URL: '/development/modules/Hero/'
        },
        {
          link: 'Cards',
          URL: '/development/modules/CardPage/'
        },
        
      ],
    
    };

    return (

      <div className="list-group">
        <h4 style={sidebarStyles} className="list-group-item" onClick={this.toggle}><a href="#">Modules</a></h4>
        <Collapse isOpen={this.state.modules}>
          {sidebarLinks.modules.map((sidebarLink, i) => <a key={i} href="#" style={sidebarStyles && linkStyle} className="list-group-item">
            <NavLink to={sidebarLink.URL} activeStyle={{
              color: 'red'
            }}>{sidebarLink.link}</NavLink>
          </a>)}
        </Collapse>
      </div>





    );
  }

}

export default SidebarModules;