import React, { Component } from 'react';
import { Button, Grid, Jumbotron, Col, Row, ButtonToolbar, Nav, Navbar } from 'reactstrap';
import './Home.css';
import Sidebar from '../components/Sidebar/Sidebar';
import Hero from '../components/Hero';
import Welcome from '../components/Welcome';
import Image from '../components/Image';
import helsinki from '../images/helsinki.png';


class Design extends Component {
  render() {

    const welcome = {
      heading: "Welcome Designer",
      paragraph: "Use this guide to create designs"
    };


    const imgStyle = {
      maxHeight: '20px',
    }
    return (
      <div>
      
   
            <div>
              <h1>
                moi mitä kuuluu
              </h1>
            </div>
          
      </div>
    );
  }
}
export default Design;

