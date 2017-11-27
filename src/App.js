import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './routes/Home';
import Design from './routes/Design';
import Development from './routes/Development';
import SketchDocumentation from './routes/SketchDocumentation';
import Components from './routes/Components';
import Overview from './routes/components/Overview';
import Modules from './routes/Modules';
import Patterns from './routes/Patterns';
import PageTemplates from './routes/PageTemplates';
import LayoutPage from './routes/components/LayoutPage';
import NavsPage from './routes/components/NavsPage';
import NavbarPage from './routes/components/NavbarPage';
import BreadcrumbsPage from './routes/components/BreadcrumbsPage';
import ButtonsPage from './routes/components/ButtonsPage';
import ButtonGroupPage from './routes/components/ButtonGroupPage';
import ButtonDropdownPage from './routes/components/ButtonDropdownPage';
import DropdownsPage from './routes/components/DropdownsPage';
import FadePage from './routes/components/FadePage';
import FormPage from './routes/components/FormPage';
import InputGroupPage from './routes/components/InputGroupPage';
import PopoversPage from './routes/components/PopoversPage';
import ProgressPage from './routes/components/ProgressPage';
import TooltipsPage from './routes/components/TooltipsPage';
import BadgePage from './routes/components/BadgePage';
import MediaPage from './routes/components/MediaPage';
import ModalsPage from './routes/components/ModalsPage';
import CardPage from './routes/components/CardPage';
import TablesPage from './routes/components/TablesPage';
import PaginationPage from './routes/components/PaginationPage';
import TabsPage from './routes/components/TabsPage';
import JumbotronPage from './routes/components/JumbotronPage';
import AlertsPage from './routes/components/AlertsPage';
import CollapsePage from './routes/components/CollapsePage';
import CarouselPage from './routes/components/CarouselPage';
import ListGroupPage from './routes/components/ListGroupPage';
import DevelopmentOverview from './routes/DevelopmentOverview'
// import ClearfixPage from './Utilities/ClearfixPage';
// import ColorsPage from './Utilities/ColorsPage';

import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar/Sidebar';
import { Container, Button, Grid, Jumbotron, Col, Row, ButtonToolbar, Nav, Navbar, NavDropdown, NavItem, MenuItem } from 'reactstrap';

class App extends Component {
  render() {
    const SidebarStyle = {
      // borderRight: 'solid #dddddd 1px',
      // height: '90%'
    }
    return (
      <Router>
        <div>
          <Navigation />
          <Row>
            <Col style={SidebarStyle} xs={6} md={3}>
              <Sidebar />
            </Col>
            <Col xs={6} md={9}>
              <Route path="/" exact component={Home} />

              {/* Design routes */}
              <Route path="/design" exact component={Design} />
              <Route path="/design/sketchDocumentation" component={SketchDocumentation} />
              <Route path="/design/sketchDocumentation" component={SketchDocumentation} />

              {/* Development routes */}
              <Route path="/development/components/development" component={Development} />
              <Route path="/development/developmentoverview/" component={DevelopmentOverview} />

              {/* Components routes  */}
              <Route path="/development/components/breadcrumbs/" component={BreadcrumbsPage} />
              <Route path="/development/components/buttons/" component={ButtonsPage} />
              <Route path="/development/components/button-group/" component={ButtonGroupPage} />
              <Route path="/development/components/button-dropdown/" component={ButtonDropdownPage} />
              <Route path="/development/components/dropdowns/" component={DropdownsPage} />
              <Route path="/development/components/fade/" component={FadePage} />
              <Route path="/development/components/form/" component={FormPage} />
              <Route path="/development/components/input-group/" component={InputGroupPage} />
              <Route path="/development/components/popovers/" component={PopoversPage} />
              <Route path="/development/components/progress/" component={ProgressPage} />
              <Route path="/development/components/tooltips/" component={TooltipsPage} />
              <Route path="/development/components/badge/" component={BadgePage} />
              <Route path="/development/components/modals/" component={ModalsPage} />
              <Route path="/development/components/layout/" component={LayoutPage} />
              <Route path="/development/components/media/" component={MediaPage} />
              <Route path="/development/components/pagination/" component={PaginationPage} />
              <Route path="/development/components/tabs/" component={TabsPage} />
              <Route path="/development/components/alerts/" component={AlertsPage} />
              <Route path="/development/components/jumbotron/" component={JumbotronPage} />
              <Route path="/development/components/collapse/" component={CollapsePage} />
              <Route path="/development/components/carousel/" component={CarouselPage} />
              <Route path="/development/components/listgroup/" component={ListGroupPage} />

              {/* Page templates routes  */}
              <Route path="/development/pageTemplates" component={PageTemplates} />

              {/* Modules routes  */}
              <Route path="/development/modules" exact component={Modules} />
              <Route path="/development/modules/navs/" component={NavsPage} />
              <Route path="/development/modules/navbar/" component={NavbarPage} />
              <Route path="/development/modules/tables/" component={TablesPage} />
              <Route path="/development/modules/card/" component={CardPage} />


              {/* Patterns routes  */}
              <Route path="/development/patterns" component={Patterns} />

            </Col>
          </Row>
        </div>
      </Router>


    );
  }

}

export default App;