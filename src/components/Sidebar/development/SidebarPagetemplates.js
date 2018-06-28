import React, { Component } from 'react'
import { Collapse } from 'reactstrap';
import { NavLink } from 'react-router-dom'

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
      'pageTemplates': [

        {
          link: 'Todo Page',
          URL: '/development/pagetemplates/todo',
          active: false
        },
        {
          link: 'Card View page',
          URL: '/development/pagetemplates/alerts',
          active: false
        }
      ],

    };

    return (

      <div className="list-group">
       <h4 style={sidebarStyles} className="list-group-item" onClick={this.toggle} ><a href="#templates">Page Templates</a></h4>
       <Collapse isOpen={this.state.pageTemplates}>
       {sidebarLinks.pageTemplates.map((sidebarLink, i) => <a key={i} href="#link" style={sidebarLink.active ? linkStyle : passiveStyle } className="list-group-item">
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
