import React, { Component } from 'react';
import { Button, Grid, Jumbotron, Col, Row, ButtonToolbar, Nav, Navbar,} from 'reactstrap';
import './Home.css';
import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';
import Content from '../components/Content';

/**
 * The only true button.
 *
 * @version 1.0.1
 * @author [Artem Sapegin](https://github.com/sapegin)
 * @author [Andy Krings-Stern](https://github.com/ankri)
*/
class Home extends Component {
  render() {
    return (
      <div>
     
  
            <Hero />

      </div>

    );
  }
}
export default Home;

