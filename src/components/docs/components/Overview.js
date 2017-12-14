/* eslint react/no-multi-comp: 0, react/prop-types: 0, import/no-webpack-loader-syntax: off */
import React from 'react';
import { PrismCode } from 'react-prism';
import Helmet from 'react-helmet';
import OverviewThumbnail from '../../../components/OverviewThumbnail';
import Welcome from '../../../components/Welcome';
import { Collapse, Button, Grid, Jumbotron, Col, Row, ButtonToolbar, Nav, Navbar, Container, NavItem, Card,
Alert, Badge
} from 'reactstrap';



 const welcome ={
   heading: 'Overview',
   paragraph: 'This is the overview of Components'
 };


 const cards = {
  "cards": [
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