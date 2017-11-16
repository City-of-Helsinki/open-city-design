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
import LayoutPage from './routes/LayoutPage';
import NavsPage from './routes/NavsPage';
import NavbarPage from './routes/NavbarPage';
import BreadcrumbsPage from './routes/BreadcrumbsPage';
import ButtonsPage from './routes/ButtonsPage';
import ButtonGroupPage from './routes/ButtonGroupPage';
import ButtonDropdownPage from './routes/ButtonDropdownPage';
import DropdownsPage from './routes/DropdownsPage';
import FadePage from './routes/FadePage';
import FormPage from './routes/FormPage';
import InputGroupPage from './routes/InputGroupPage';
import PopoversPage from './routes/PopoversPage';
import ProgressPage from './routes/ProgressPage';
import TooltipsPage from './routes/TooltipsPage';
import BadgePage from './routes/BadgePage';
import MediaPage from './routes/MediaPage';
import ModalsPage from './routes/ModalsPage';
import CardPage from './routes/CardPage';
import TablesPage from './routes/TablesPage';
import PaginationPage from './routes/PaginationPage';
import TabsPage from './routes/TabsPage';
import JumbotronPage from './routes/JumbotronPage';
import AlertsPage from './routes/AlertsPage';
import CollapsePage from './routes/CollapsePage';
import CarouselPage from './routes/CarouselPage';
import ListGroupPage from './routes/ListGroupPage';
// import ClearfixPage from './Utilities/ClearfixPage';
// import ColorsPage from './Utilities/ColorsPage';

import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';
import { Button, Grid, Jumbotron, Col, Row, ButtonToolbar, Nav, Navbar, NavDropdown, NavItem, MenuItem } from 'reactstrap';

class App extends Component {
  render() {
    
    return (
      <Router>
        <div>
        <Navigation />
            <Route path="/" exact component={Home} />
            <Route path="/Design" component={Design} />
            <Route path="/Development" component={Development} />
            <Route path="/Components">
                <Components>
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
                </Components>
            </Route>
            <Route path="/Patterns" component={Patterns} />
            <Route path="/PageTemplates" component={PageTemplates} />
            <Route path="/Modules" component={Modules} />

            <Route path="/SketchDocumentation" component={SketchDocumentation} />

        </div>
      </Router>


    );
  }

}

export default App;