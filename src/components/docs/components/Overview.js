/* eslint react/no-multi-comp: 0, react/prop-types: 0, import/no-webpack-loader-syntax: off */
import React from 'react';

import OverviewThumbnail from '../../../components/OverviewThumbnail/OverviewThumbnail';
import WelcomeSmall from '../../../components/WelcomeSmall';
import { Button,Row,Container, Breadcrumb, BreadcrumbItem, NavItem, NavLink, Alert, Badge, Input, Nav, Col } from 'reactstrap';


 const welcome ={
   heading: 'Components Overview',
   paragraph: 'The Design System is built on components that establish the basis for the overall library.'
 };


 const cards = {
  "cards": [
              {
                key: 1,
                header: 'Alert',
                componentName: <Alert color="secondary">This is alert</Alert>,
                url: '/development/components/alerts/'
              },
              {
                key: 2,
                header: 'Badge',
                componentName: <Badge color="secondary">New</Badge>,
                url: '/development/components/badge/'

              },
              {
                key: 3,
                header: 'Breadcrumb',
                componentName:      <div> <Breadcrumb>
                <BreadcrumbItem><a href="#home">Home</a></BreadcrumbItem>
                <BreadcrumbItem><a href="#library">Library</a></BreadcrumbItem>
                <BreadcrumbItem active>Data</BreadcrumbItem>
              </Breadcrumb></div>,
                url: '/development/components/breadcrumb/'

              },
              {
                key: 4,
                header: 'Button',
                componentName: <Button color={'primary'} outline style={{padding: '0.7rem 1.4rem'}} >Example Button</Button>,
                url: '/development/components/buttons/'

              },
              {
                key: 5,
                header: 'Button Dropdown',
                componentName: <div><Button style={{padding: '0.7rem 1.4rem'}} caret>

                    Dropdown
                   </Button><button className="dropdown-toggle dropdown-toggle-split btn btn-secondary"></button></div>,
                url: '/development/components/button-dropdown/'

              },

              {
                key: 6,
                header: 'Form',
                componentName: <Input placeholder="Form elements" />,
                url: '/development/components/form/'

              },
              {
                key: 7,
                header: 'Modals',
                componentName: <Button color={'success'} outline style={{padding: '0.7rem 1.4rem'}} >Click me!</Button>,
                url: '/development/components/modals/'

              },
              {
                key: 8,
                header: 'Tabs',
                componentName: <Nav tabs><NavItem><NavLink active>Tab 1</NavLink></NavItem><NavItem><NavLink>Tab 2</NavLink></NavItem></Nav>,
                url: '/development/components/tabs/'

              },
  ]
}

export default class Overview extends React.Component {
  render() {
    return (
      <div>
     <WelcomeSmall welcome={welcome}/>
     <Container>
       <h3>These are the components</h3>
     <Row >
           {cards.cards.map((card, i) =>
                 <Col xs='12' lg='6' >
                       <OverviewThumbnail key={i} card={card} />
                 </Col>
           )}
     </Row>


</Container>
   </div>
    );
  }
}
