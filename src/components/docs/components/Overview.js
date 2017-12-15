/* eslint react/no-multi-comp: 0, react/prop-types: 0, import/no-webpack-loader-syntax: off */
import React from 'react';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';
import OverviewThumbnail from '../../../components/OverviewThumbnail';
import Welcome from '../../../components/Welcome';
import { Collapse, Button, Grid, Jumbotron, Col, Row, ButtonToolbar, Nav, Navbar, Container, NavItem, Card,
Alert, Badge, Breadcrumb, ButtonDropdown, ButtonGroup, Carousel, Collapse, Dropdown, Fade,
} from 'reactstrap';
import CollapseExample from './Collapse/Collapse';



 const welcome ={
   heading: 'Overview',
   paragraph: 'This is the overview of Components'
 };


 const cards = {
  "cards": [
              {
                key: 1,
                header: 'Alert',
                paragraph: 'Download the Skecth Library to design applications using the Sketch Library (note: you should have the latest Sketch Beta installed. View Sketch documentation for more information)',
                componentName: <Alert color="secondary">This is alert</Alert>
              },
              {
                key: 1,
                header: 'Badge',
                paragraph: 'Download the Skecth Library to design applications using the Sketch Library (note: you should have the latest Sketch Beta installed. View Sketch documentation for more information)',
                componentName: <Badge color="secondary">New</Badge>
              },
              {
                key: 1,
                header: 'Badge',
                paragraph: 'Download the Skecth Library to design applications using the Sketch Library (note: you should have the latest Sketch Beta installed. View Sketch documentation for more information)',
                componentName: <Breadcrumb color="secondary">New</Breadcrumb>
              },
              {
                key: 1,
                header: 'Badge',
                paragraph: 'Download the Skecth Library to design applications using the Sketch Library (note: you should have the latest Sketch Beta installed. View Sketch documentation for more information)',
                componentName: <Button color="secondary">New</Button>
              },
              {
                key: 1,
                header: 'Badge',
                paragraph: 'Download the Skecth Library to design applications using the Sketch Library (note: you should have the latest Sketch Beta installed. View Sketch documentation for more information)',
                componentName: <ButtonDropdown color="secondary">New</ButtonDropdown>
              },
              {
                key: 1,
                header: 'Badge',
                paragraph: 'Download the Skecth Library to design applications using the Sketch Library (note: you should have the latest Sketch Beta installed. View Sketch documentation for more information)',
                componentName: <ButtonGroup color="secondary">New</ButtonGroup>
              },
              {
                key: 1,
                header: 'Badge',
                paragraph: 'Download the Skecth Library to design applications using the Sketch Library (note: you should have the latest Sketch Beta installed. View Sketch documentation for more information)',
                componentName: <Carousel color="secondary">New</Carousel>
              },
              {
                key: 1,
                header: 'Badge',
                paragraph: 'Download the Skecth Library to design applications using the Sketch Library (note: you should have the latest Sketch Beta installed. View Sketch documentation for more information)',
                componentName: <Collapse color="secondary">New</Collapse>
              },
              {
                key: 1,
                header: 'Badge',
                paragraph: 'Download the Skecth Library to design applications using the Sketch Library (note: you should have the latest Sketch Beta installed. View Sketch documentation for more information)',
                componentName: <Dropdown color="secondary">New</Dropdown>
              },
              {
                key: 1,
                header: 'Badge',
                paragraph: 'Download the Skecth Library to design applications using the Sketch Library (note: you should have the latest Sketch Beta installed. View Sketch documentation for more information)',
                componentName: <Fade color="secondary">New</Fade>
              },
              {
                key: 1,
                header: 'Badge',
                paragraph: 'Download the Skecth Library to design applications using the Sketch Library (note: you should have the latest Sketch Beta installed. View Sketch documentation for more information)',
                componentName: <Badge color="secondary">New</Badge>
              },
              {
                key: 1,
                header: 'Badge',
                paragraph: 'Download the Skecth Library to design applications using the Sketch Library (note: you should have the latest Sketch Beta installed. View Sketch documentation for more information)',
                componentName: <Badge color="secondary">New</Badge>
              },
              {
                key: 1,
                header: 'Badge',
                paragraph: 'Download the Skecth Library to design applications using the Sketch Library (note: you should have the latest Sketch Beta installed. View Sketch documentation for more information)',
                componentName: <Badge color="secondary">New</Badge>
              },
      

  ]
}

export default class Overview extends React.Component {
  render() {
    return (
      <div>
     <Welcome welcome={welcome}/>
     <Container>
     <Row >
           {cards.cards.map((card, i) =>
                 <Col style={rowStyle} xs='12' lg='6' >
                       <OverviewThumbnail key={i} card={card} />
                 </Col>
           )}
     </Row>


</Container>
   </div>
    );
  }
}
const rowStyle = {
  paddingTop: 25,
  marginBottom: 25
  
}