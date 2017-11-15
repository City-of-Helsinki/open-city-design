import React, { Component } from 'react';
import { Button, Grid, Jumbotron, Col, Row, ButtonToolbar, Nav, Navbar, NavDropdown, NavItem, MenuItem } from 'react-bootstrap';
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
                  { link: "components", URL: 'components' },
                  {
                        link: 'Alerts',
                        URL: 'components/alerts/'
                  },
                  {
                        link: 'Badge',
                        URL: 'components/badge/'
                  },
                  {
                        link: 'Breadcrumbs',
                        URL: 'components/breadcrumbs/'
                  },
                  {
                        link: 'Buttons',
                        URL: 'components/buttons/'
                  },
                  {
                        link: 'Button Dropdown',
                        URL: 'components/button-dropdown/'
                  },
                  {
                        link: 'Button Group',
                        URL: 'components/button-group/'
                  },
                  {
                        link: 'Card',
                        URL: 'components/card/'
                  },
                  {
                        link: 'Collapse',
                        URL: 'components/collapse/',
                  },
                  {
                        link: 'Carousel',
                        URL: 'components/carousel/'
                  },
                  {
                        link: 'Dropdowns',
                        URL: 'components/dropdowns/'
                  },
                  {
                        link: 'Fade',
                        URL: 'components/fade/'
                  },
                  {
                        link: 'Form',
                        URL: 'components/form/'
                  },
                  {
                        link: 'Input Group',
                        URL: 'components/input-group/'
                  },
                  {
                        link: 'Jumbotron',
                        URL: 'components/jumbotron/'
                  },
                  {
                        link: 'Layout',
                        URL: 'components/layout/'
                  },
                  {
                        link: 'List Group',
                        URL: 'components/listgroup/'
                  },
                  {
                        link: 'Media',
                        URL: 'components/media/'
                  },
                  {
                        link: 'Modals',
                        URL: 'components/modals/'
                  },
                  {
                        link: 'Navbar',
                        URL: 'components/navbar/'
                  },
                  {
                        link: 'Navs',
                        URL: 'components/navs/'
                  },
                  {
                        link: 'Pagination',
                        URL: 'components/pagination/'
                  },
                  {
                        link: 'Popovers',
                        URL: 'components/popovers/'
                  },
                  {
                        link: 'Progress',
                        URL: 'components/progress/'
                  },
                  {
                        link: 'Tables',
                        URL: 'components/tables/'
                  },
                  {
                        link: 'Tabs',
                        URL: 'components/tabs/'
                  },
                  {
                        link: 'Tooltips',
                        URL: 'components/tooltips/'
                  },
                  { link: "Modules", URL: 'Modules' },
                  { link: "Patterns", URL: 'Patterns' },
                  { link: "Page Templates", URL: 'PageTemplates' },
            ];
            
            return (
                  <div>
                  <Col xs={6} md={4}>
                  <Sidebar sidebarLinks={sidebarLinks} />
                  </Col>
                  <Col xs={6} md={8}>
                  <Welcome welcome={welcome} />
                  
                  <Button>Page Templates<img style={imgStyle} src="https://camo.githubusercontent.com/34ab12e06afbf839047bf3c19ed3e76082921f85/68747470733a2f2f64337676366c703535716a6171632e636c6f756466726f6e742e6e65742f6974656d732f33783051313531343431317a336c314f326131512f73746f7279626f6f6b732d6f6c642e706e673f582d436c6f75644170702d56697369746f722d49643d643430373439383635383733643762356162333263383038353231353066373426763d6530643332303332" /></Button>
                  
                  </Col>
                  </div>
                  
            );
      }
}
export default Components;

