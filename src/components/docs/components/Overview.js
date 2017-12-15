/* eslint react/no-multi-comp: 0, react/prop-types: 0, import/no-webpack-loader-syntax: off */
import React from 'react';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';
import OverviewThumbnail from '../../../components/OverviewThumbnail/OverviewThumbnail';
import WelcomeSmall from '../../../components/WelcomeSmall';
import { Collapse, Button, Grid, Jumbotron, Col, Row, ButtonToolbar, Nav, Navbar, Container, Breadcrumb, BreadcrumbItem, NavItem, Card,Alert, Badge } from 'reactstrap';
import CollapseExample from './Collapse/Collapse';
import ButtonDropdownExample from './ButtonDropdown/ButtonDropdown';
import BreadcrumbExample from './Breadcrumb/Breadcrumb';
import ButtonExample from './Button/Button';
import MediaExample from './Media/Media';
import PaginationExample from './Pagination/Pagination';
import ProgressExample from './Progress/Progress';



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
                url: '/development/components/alerts'
              },
              {
                key: 2,
                header: 'Badge',
                componentName: <Badge color="secondary">New</Badge>,
                url: '/development/components/badge'
                
              },
              {
                key: 3,
                header: 'Collapse',
                componentName: <CollapseExample />,
                url: '/development/components/collapse'
                
              },
              {
                key: 4,
                header: 'Breadcrumb',
                componentName:       <Breadcrumb>
                <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
                <BreadcrumbItem active>Data</BreadcrumbItem>
              </Breadcrumb>,
                url: '/development/components/breadcrumb'
                                              
              },
              {
                key: 4,
                header: 'Button Dropdown',
                componentName: <ButtonDropdownExample />,
                url: '/development/components/buttondropdown'
                
              },

              {
                key: 4,
                header: 'Button',
                componentName: <Button color={'primary'} outline  >Example Button</Button>,
                url: '/development/components/button'
                
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
       <p>Using the components is good</p>
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
