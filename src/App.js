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
import LayoutPage from './components/docs/Components/LayoutPage';
import NavsPage from './components/docs/Components/NavsPage';
import NavbarPage from './components/docs/Components/NavbarPage';
import BreadcrumbsPage from './components/docs/Components/BreadcrumbsPage';
import ButtonsPage from './components/docs/Components/ButtonsPage';
import ButtonGroupPage from './components/docs/Components/ButtonGroupPage';
import ButtonDropdownPage from './components/docs/Components/ButtonDropdownPage';
import DropdownsPage from './components/docs/Components/DropdownsPage';
import FadePage from './components/docs/Components/FadePage';
import FormPage from './components/docs/Components/FormPage';
import InputGroupPage from './components/docs/Components/InputGroupPage';
import PopoversPage from './components/docs/Components/PopoversPage';
import ProgressPage from './components/docs/Components/ProgressPage';
import TooltipsPage from './components/docs/Components/TooltipsPage';
import BadgePage from './components/docs/Components/BadgePage';
import MediaPage from './components/docs/Components/MediaPage';
import ModalsPage from './components/docs/Components/ModalsPage';
import CardPage from './components/docs/Components/CardPage';
import TablesPage from './components/docs/Components/TablesPage';
import PaginationPage from './components/docs/Components/PaginationPage';
import TabsPage from './components/docs/Components/TabsPage';
import JumbotronPage from './components/docs/Components/JumbotronPage';
import AlertsPage from './components/docs/Components/AlertsPage';
import CollapsePage from './components/docs/Components/CollapsePage';
import CarouselPage from './components/docs/Components/CarouselPage';
import ListGroupPage from './components/docs/Components/ListGroupPage';
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
            <Route path="/components" component={Components}>
                  <Route path="breadcrumbs/" component={BreadcrumbsPage} />
                  <Route path="buttons/" component={ButtonsPage} />
                  <Route path="button-group/" component={ButtonGroupPage} />
                  <Route path="button-dropdown/" component={ButtonDropdownPage} />
                  <Route path="dropdowns/" component={DropdownsPage} />
                  <Route path="fade/" component={FadePage} />
                  <Route path="form/" component={FormPage} />
                  <Route path="input-group/" component={InputGroupPage} />
                  <Route path="popovers/" component={PopoversPage} />
                  <Route path="progress/" component={ProgressPage} />
                  <Route path="tooltips/" component={TooltipsPage} />
                  <Route path="badge/" component={BadgePage} />
                  <Route path="card/" component={CardPage} />
                  <Route path="tables/" component={TablesPage} />
                  <Route path="modals/" component={ModalsPage} />
                  <Route path="layout/" component={LayoutPage} />
                  <Route path="navs/" component={NavsPage} />
                  <Route path="navbar/" component={NavbarPage} />
                  <Route path="media/" component={MediaPage} />
                  <Route path="pagination/" component={PaginationPage} />
                  <Route path="tabs/" component={TabsPage} />
                  <Route path="alerts/" component={AlertsPage} />
                  <Route path="jumbotron/" component={JumbotronPage} />
                  <Route path="collapse/" component={CollapsePage} />
                  <Route path="carousel/" component={CarouselPage} />
                  <Route path="listgroup/" component={ListGroupPage} />
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