import React, { Component } from 'react';
import Prism from '../utility/prism.js';
import '../css/prism.css';
import '../css/docs.css';
import classnames from 'classnames';
import { Button, Grid, Jumbotron, Col, Row, ButtonToolbar, Nav, Navbar } from 'reactstrap';
import './Home.css';
import Sidebar from '../components/Sidebar/Sidebar';
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
            const SidebarStyle = {
                  borderRight: 'solid #dddddd 1px',
                  margin: 'none',
                  padding: '20px',
                  backgroundColor: '#fbfbfb'
                }
            
            
            return (
                  <div className="row">
               
                  </div>
                  
            );
      }
}
export default Components;

