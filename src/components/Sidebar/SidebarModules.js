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
      'components': [
   
        {
          link: 'Navbar',
          URL: '/components/navbar/'
        },
        {
          link: 'Footer',
          URL: '/modules/footer/'
        },
        {
          link: 'Loginmodal',
          URL: '/modules/loginmodal/'
        },
        {
          link: 'Tables',
          URL: '/components/TablesPage/'
        },
        {
          link: 'Hero',
          URL: '/modules/Hero/'
        },
        {
          link: 'Cards',
          URL: '/components/CardPage/'
        },
        
      ],
    
    };

    return (

      <div className="list-group">
        <h3 style={sidebarStyles} className="list-group-item" onClick={this.toggle}><a href="#">Modules</a></h3>
        <Collapse isOpen={this.state.modules}>
          {sidebarLinks.components.map((sidebarLink, i) => <a key={i} href="#" style={sidebarStyles && linkStyle} className="list-group-item">
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