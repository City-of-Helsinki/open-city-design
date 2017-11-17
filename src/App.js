import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './routes/Home';
import Design from './routes/Design';
import Development from './routes/Development';
import SketchDocumentation from './routes/SketchDocumentation';
import Components from './routes/Components';
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
// import ClearfixPage from './Utilities/ClearfixPage';
// import ColorsPage from './Utilities/ColorsPage';

import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar/Sidebar';
import { Button, Grid, Jumbotron, Col, Row, ButtonToolbar, Nav, Navbar, NavDropdown, NavItem, MenuItem } from 'reactstrap';

class App extends Component {
  render() {
    
    return (
      <Router>
        <div>
        <Navigation />
        <Route path="/" exact component={Home} />
        <Route path="/design" component={Design} />
        <Route path="/development" component={Development} />
        <Route path="/components/components" component={Components} />
        <Route path="/components/breadcrumbs/" component={BreadcrumbsPage} />
        <Route path="/components/buttons/" component={ButtonsPage} />
        <Route path="/components/button-group/" component={ButtonGroupPage} />
        <Route path="/components/button-dropdown/" component={ButtonDropdownPage} />
        <Route path="/components/dropdowns/" component={DropdownsPage} />
        <Route path="/components/fade/" component={FadePage} />
        <Route path="/components/form/" component={FormPage} />
        <Route path="/components/input-group/" component={InputGroupPage} />
        <Route path="/components/popovers/" component={PopoversPage} />
        <Route path="/components/progress/" component={ProgressPage} />
        <Route path="/components/tooltips/" component={TooltipsPage} />
        <Route path="/components/badge/" component={BadgePage} />
        <Route path="/components/card/" component={CardPage} />
        <Route path="/components/tables/" component={TablesPage} />
        <Route path="/components/modals/" component={ModalsPage} />
        <Route path="/components/layout/" component={LayoutPage} />
        <Route path="/components/navs/" component={NavsPage} />
        <Route path="/components/navbar/" component={NavbarPage} />
        <Route path="/components/media/" component={MediaPage} />
        <Route path="/components/pagination/" component={PaginationPage} />
        <Route path="/components/tabs/" component={TabsPage} />
        <Route path="/components/alerts/" component={AlertsPage} />
        <Route path="/components/jumbotron/" component={JumbotronPage} />
        <Route path="/components/collapse/" component={CollapsePage} />
        <Route path="/components/carousel/" component={CarouselPage} />
        <Route path="/components/listgroup/" component={ListGroupPage} />
        <Route path="/patterns" component={Patterns} />
        <Route path="/pageTemplates" component={PageTemplates} />
        <Route path="/modules" component={Modules} />
        <Route path="/sketchDocumentation" component={SketchDocumentation} />
        </div>
      </Router>


    );
  }

}

export default App;