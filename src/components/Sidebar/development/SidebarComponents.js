import React, { Component } from 'react'
import { Collapse } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class SidebarComponents extends Component {
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
      'components': [

        {
          link: 'Alerts',
          URL: '/development/components/alerts/',
          active: true
        },
        {
          link: 'Badge',
          URL: '/development/components/badge/',
          active: true
        },
        {
          link: 'Breadcrumb',
          URL: '/development/components/breadcrumb/',
          active: true
        },
        {
          link: 'Buttons',
          URL: '/development/components/buttons/',
          active: true
        },
        {
          link: 'Button Dropdown',
          URL: '/development/components/button-dropdown/',
          active: true
        },
        {
          link: 'Button Group',
          URL: '/development/components/button-group/',
          active: false
        },

        {
          link: 'Collapse',
          URL: '/development/components/collapse/',
          active: false
        },
        {
          link: 'Carousel',
          URL: '/development/components/carousel/',
          active: false
        },
        {
          link: 'Dropdowns',
          URL: '/development/components/dropdowns/',
          active: true
        },
        {
          link: 'Fade',
          URL: '/development/components/fade/',
          active: false
        },
        {
          link: 'Form',
          URL: '/development/components/form/',
          active: true
        },
        {
          link: 'Input Group',
          URL: '/development/components/input-group/',
          active: true
        },
        {
          link: 'Jumbotron',
          URL: '/development/components/jumbotron/',
          active: false
        },
        {
          link: 'Layout',
          URL: '/development/components/layout/',
          active: false
        },
        {
          link: 'List Group',
          URL: '/development/components/listgroup/',
          active: false
        },
        {
          link: 'Media',
          URL: '/development/components/media/',
          active: false
        },
        {
          link: 'Modals',
          URL: '/development/components/modals/',
          active: true
        },

        {
          link: 'Pagination',
          URL: '/development/components/pagination/',
          active: true
        },
        {
          link: 'Popovers',
          URL: '/development/components/popovers/',
          active: false
        },
        {
          link: 'Progress',
          URL: '/development/components/progress/',
          active: false
        },

        {
          link: 'Tabs',
          URL: '/development/components/tabs/',
          active: true
        },
        {
          link: 'Tooltips',
          URL: '/development/components/tooltips/',
          active: false
        },
      ],

    };

    return (

      <div className="list-group">
       <h4 style={sidebarStyles} className="list-group-item" onClick={this.toggle} ><NavLink to="/development/components/overview">Components</NavLink></h4>
        <Collapse  isOpen={this.state.components}>
          {sidebarLinks.components.map((sidebarLink, i) => <a key={i}  style={sidebarLink.active ? linkStyle : passiveStyle } className="list-group-item">
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

export default SidebarComponents;
