import React, { Component } from 'react'
import { Collapse } from 'reactstrap';
import { NavLink } from 'react-router-dom';

import 'font-awesome/css/font-awesome.min.css';

class SidebarStyles extends Component {
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
    const passiveStyle = {
      border: 'none',
      backgroundColor: 'transparent',
      padding: '5px',
      paddingLeft: '25px',
      opacity: 0.4
    }

    const sidebarLinks = {
      'styles': [
        {
          link: 'Colors',
          URL: '/development/styles/colors/',
          active: true
        },
        {
          link: 'Typography',
          URL: '/development/styles/typography/',
          active: true
        },
        {
          link: 'Logo',
          URL: '/development/styles/logo/',
          active: true
        },
        {
          link: 'Koros',
          URL: '/development/styles/koros/',
          active: true
        },

      ],

    };

    return (

      <div className="list-group">
       <h4 style={sidebarStyles} className="list-group-item" onClick={this.toggle} ><NavLink to="/development/styles/overview">Styles</NavLink></h4>
        <Collapse  isOpen={this.state.components}>
          {sidebarLinks.styles.map((sidebarLink, i) => <a key={i}  style={sidebarLink.active ? linkStyle : passiveStyle } className="list-group-item">
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

export default SidebarStyles;
