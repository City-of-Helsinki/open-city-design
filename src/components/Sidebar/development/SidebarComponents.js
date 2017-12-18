import React, { Component } from 'react'
import { Collapse, Button, Grid, Jumbotron, Col, Row, ButtonToolbar, Nav, Navbar, NavItem } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';

class SidebarComponents extends Component {
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
    }
    const linkStyle = {
      border: 'none',
      backgroundColor: 'transparent',
      padding: '5px',
      paddingLeft: '25px',
    }

    const sidebarLinks = {
      'components': [

        {
          link: 'Alerts',
          URL: '/development/components/alerts/'
        },
        {
          link: 'Badge',
          URL: '/development/components/badge/'
        },
        {
          link: 'Breadcrumb',
          URL: '/development/components/breadcrumbs/'
        },
        {
          link: 'Buttons',
          URL: '/development/components/buttons/'
        },
        {
          link: 'Button Dropdown',
          URL: '/development/components/button-dropdown/'
        },
        {
          link: 'Button Group',
          URL: '/development/components/button-group/'
        },

        {
          link: 'Collapse',
          URL: '/development/components/collapse/',
        },
        {
          link: 'Carousel',
          URL: '/development/components/carousel/'
        },
        {
          link: 'Dropdowns',
          URL: '/development/components/dropdowns/'
        },
        {
          link: 'Fade',
          URL: '/development/components/fade/'
        },
        {
          link: 'Form',
          URL: '/development/components/form/'
        },
        {
          link: 'Input Group',
          URL: '/development/components/input-group/'
        },
        {
          link: 'Jumbotron',
          URL: '/development/components/jumbotron/'
        },
        {
          link: 'Layout',
          URL: '/development/components/layout/'
        },
        {
          link: 'List Group',
          URL: '/development/components/listgroup/'
        },
        {
          link: 'Media',
          URL: '/development/components/media/'
        },
        {
          link: 'Modals',
          URL: '/development/components/modals/'
        },

        {
          link: 'Pagination',
          URL: '/development/components/pagination/'
        },
        {
          link: 'Popovers',
          URL: '/development/components/popovers/'
        },
        {
          link: 'Progress',
          URL: '/development/components/progress/'
        },

        {
          link: 'Tabs',
          URL: '/development/components/tabs/'
        },
        {
          link: 'Tooltips',
          URL: '/development/components/tooltips/'
        },
      ],
    
    };

    return (

      <div className="list-group">
       <h4 style={sidebarStyles} className="list-group-item" onClick={this.toggle} ><NavLink to="/development/components/overview">Components</NavLink></h4>
        <Collapse  isOpen={this.state.components}>
          {sidebarLinks.components.map((sidebarLink, i) => <a key={i}  style={sidebarStyles && linkStyle} className="list-group-item">
           <NavLink caret to={sidebarLink.URL} activeStyle={{
              color: '#fd4f00'
            }}>{sidebarLink.link}                                    
            </NavLink>
          </a>)}
        </Collapse>
      </div>





    );
  }

}

export default SidebarComponents;