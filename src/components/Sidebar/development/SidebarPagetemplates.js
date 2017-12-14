import React, { Component } from 'react'
import { Collapse, Button, Grid, Jumbotron, Col, Row, ButtonToolbar, Nav, Navbar, NavItem } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom'

class SidebarPagetemplates extends Component {
      constructor(props) {
            super(props);
            this.toggle = this.toggle.bind(this);
            this.state = { pageTemplates: false };
          }

  toggle() {
      this.setState({ pageTemplates: !this.state.pageTemplates });
};

  render() {
    const sidebarStyles = {
      border: 'none',
      backgroundColor: 'transparent',
      color: '#ffe977',
      
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
          link: 'Todo Page',
          URL: 'development/components/alerts'
        },
        {
          link: 'Card View page',
          URL: 'development/components/alerts'
        }
      ],
    
    };

    return (

      <div className="list-group">
       <h4 style={sidebarStyles} className="list-group-item" onClick={this.toggle} ><a href="#">Page Templates</a></h4>
       <Collapse isOpen={this.state.pageTemplates}>
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

export default SidebarPagetemplates;