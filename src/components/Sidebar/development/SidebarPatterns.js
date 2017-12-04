import React, { Component } from 'react'
import { Collapse, Button, Grid, Jumbotron, Col, Row, ButtonToolbar, Nav, Navbar, NavItem } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom'

class SidebarPatterns extends Component {
      constructor(props) {
            super(props);
            this.toggle = this.toggle.bind(this);
            this.state = { patterns: false };
          }

  toggle() {
      this.setState({ patterns: !this.state.patterns });
};

  render() {
    const sidebarStyles = {
      border: 'none',
      backgroundColor: 'transparent',
      
    }
    const linkStyle = {
      border: 'none',
      backgroundColor: 'transparent',
      padding: '5px',
      paddingLeft: '25px'
    }
    const caretStyle = {
      marginRight: 30
    }
    const sidebarLinks = {
      'components': [
   
        {
          link: 'Alerts',
          URL: '/components/alerts/'
        },
        {
          link: 'Badge',
          URL: '/components/badge/'
        },
        {
          link: 'Breadcrumbs',
          URL: '/components/breadcrumbs/'
        },
        {
          link: 'Buttons',
          URL: '/components/buttons/'
        },
        {
          link: 'Button Dropdown',
          URL: '/components/button-dropdown/'
        },
        {
          link: 'Button Group',
          URL: '/components/button-group/'
        },
        {
          link: 'Card',
          URL: '/components/card/'
        },
        {
          link: 'Collapse',
          URL: '/components/collapse/',
        },
        {
          link: 'Carousel',
          URL: '/components/carousel/'
        },
        {
          link: 'Dropdowns',
          URL: '/components/dropdowns/'
        },
        {
          link: 'Fade',
          URL: '/components/fade/'
        },
        {
          link: 'Form',
          URL: '/components/form/'
        },
        {
          link: 'Input Group',
          URL: '/components/input-group/'
        },
        {
          link: 'Jumbotron',
          URL: '/components/jumbotron/'
        },
        {
          link: 'Layout',
          URL: '/components/layout/'
        },
        {
          link: 'List Group',
          URL: '/components/listgroup/'
        },
        {
          link: 'Media',
          URL: '/components/media/'
        },
        {
          link: 'Modals',
          URL: '/components/modals/'
        },
        {
          link: 'Navbar',
          URL: '/components/navbar/'
        },
        {
          link: 'Navs',
          URL: '/components/navs/'
        },
        {
          link: 'Pagination',
          URL: '/components/pagination/'
        },
        {
          link: 'Popovers',
          URL: '/components/popovers/'
        },
        {
          link: 'Progress',
          URL: '/components/progress/'
        },
        {
          link: 'Tables',
          URL: '/components/tables/'
        },
        {
          link: 'Tabs',
          URL: '/components/tabs/'
        },
        {
          link: 'Tooltips',
          URL: '/components/tooltips/'
        },
      ],
    
    };

    return (

      <div className="list-group">
       <h4 style={sidebarStyles} className="list-group-item" onClick={this.toggle} ><a href="#">Patterns</a></h4>
       <Collapse isOpen={this.state.patterns}>
          {sidebarLinks.components.map((sidebarLink, i) => <a key={i} href="#" style={sidebarStyles} className="list-group-item">
            <NavLink to={sidebarLink.URL} activeStyle={{
              color: 'red'
            }}>{sidebarLink.link}</NavLink>
          </a>)}
        </Collapse>
      </div>





    );
  }

}

export default SidebarPatterns;