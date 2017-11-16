import React, { Component } from 'react';
import Prism from '../utility/prism.js';
import '../css/prism.css';
import '../css/docs.css';
import classnames from 'classnames';
import { Button, Grid, Jumbotron, Col, Row, ButtonToolbar, Nav, Navbar } from 'reactstrap';
import './Home.css';
import Sidebar from '../components/Sidebar';
import Welcome from '../components/Welcome';


class Components extends Component {
      render() {
            const imgStyle = {
                  maxHeight: '20px',
            };
            const welcome = {
                  heading: "Components",
                  paragraph: "From here you can see possible componenets"
            };
            const sidebarLinks = [
                  { link: "Components", URL: '/components' },
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
                  { link: "Modules", URL: '/Modules' },
                  { link: "Patterns", URL: '/Patterns' },
                  { link: "Page Templates", URL: '/PageTemplates' },
            ];
            
            return (
                  <div className="row">
                  <Col xs={6} md={3}>
                  <Sidebar sidebarLinks={sidebarLinks} />
                  </Col>
                  <Col xs={6} md={9}>
                 {this.props.children}
                  </Col>
                  </div>
                  
            );
      }
}
export default Components;

