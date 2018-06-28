import React, { Component } from 'react'
import { Collapse } from 'reactstrap';
import { NavLink } from 'react-router-dom'

class SidebarModules extends Component {
      constructor(props) {
            super(props);
            this.toggle = this.toggle.bind(this);
            this.state = { modules: false };
          }

  toggle() {
      this.setState({ modules: !this.state.modules });
};

  render() {
    const sidebarStyles = {
      border: 'none',
      backgroundColor: 'transparent',
      color: '#f5a3c7',
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
      'modules': [

        {
          link: 'Navbar',
          URL: '/development/modules/navbar/',
          active: false
        },
        {
          link: 'Footer',
          URL: '/development/modules/footer/',
          active: false
        },
        {
          link: 'Login modal',
          URL: '/development/modules/loginmodal/',
          active: false
        },
        {
          link: 'Koro section',
          URL: '/development/modules/korosection/',
          active: true
        },
        {
          link: 'Tables',
          URL: '/development/modules/TablesPage/',
          active: false
        },
        {
          link: 'Hero',
          URL: '/development/modules/Hero/',
          active: false
        },
        {
          link: 'Cards',
          URL: '/development/modules/CardPage/',
          active: false
        },

      ],

    };

    return (

      <div className="list-group">
       <h4 style={sidebarStyles} className="list-group-item" onClick={this.toggle} ><a href="#modules">Modules</a></h4>
       <Collapse isOpen={this.state.modules}>
          {sidebarLinks.modules.map((sidebarLink, i) => <a key={i} href="#link" style={sidebarLink.active ? linkStyle : passiveStyle } className="list-group-item">
            <NavLink to={sidebarLink.URL} activeStyle={{
              color: 'red'
            }}>{sidebarLink.link}</NavLink>
          </a>)}
        </Collapse>
      </div>





    );
  }

}

export default SidebarModules;
