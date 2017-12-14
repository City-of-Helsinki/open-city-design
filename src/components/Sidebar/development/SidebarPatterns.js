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
          link: 'Task List',
          URL: 'development/components/tooltips/'
        },
        {
          link: 'Card Group Slider',
          URL: 'development/components/tooltips/'
        },    
        {
          link: 'Card Group',
          URL: 'development/components/tooltips/'
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