import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Prism from './utility/prism.js';
import classnames from 'classnames';
import './css/docs.css';
import './css/prism.css';
import { Container, Button, Grid, Jumbotron, Col, Row, ButtonToolbar, Nav, Navbar, NavDropdown, NavItem, MenuItem } from 'reactstrap';


import Home from './routes/Home';
import Design from './routes/design/Design';
import Development from './routes/development/Development';
import SketchDocumentation from './routes/design/SketchDocumentation';
import Modules from './routes/development/Modules';
import Patterns from './routes/development/Patterns';
import PageTemplates from './routes/development/PageTemplates';
import LayoutPage from './routes/components/LayoutPage';
import NavsPage from './routes/components/NavsPage';
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
import TablesPage from './routes/components/TablesPage';
import PaginationPage from './routes/components/PaginationPage';
import TabsPage from './routes/components/TabsPage';
import JumbotronPage from './routes/components/JumbotronPage';
import AlertsPage from './routes/components/AlertsPage';
import CollapsePage from './routes/components/CollapsePage';
import CarouselPage from './routes/components/CarouselPage';
import ListGroupPage from './routes/components/ListGroupPage';
import DevelopmentOverview from './routes/development/DevelopmentOverview';
import ComponentOverview from './routes/components/Overview';
import DesignOverview from './routes/design/DesignOverview';
import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar/Sidebar';
import SidebarDevelopment from './components/Sidebar/development/SidebarDevelopment';
import SidebarDesign from './components/Sidebar/design/SidebarDesign';
import Footer from './components/Footer';

// Modules
import NavbarPage from './components/docs/modules/Navbar/NavbarPage';
import CardPage from './/components/docs/modules/Cards/CardPage';



class App extends Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      menuOpen: true
    };
  }

  toggle() {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  }
  
  render() {

    return (
      <Router>
        <div class="app">

          <aside className={classnames({ 'sidebar-open': this.state.menuOpen === true, 'sidebar': true })}>
            <button className={classnames({ 'sidebar-toggle--open': this.state.menuOpen === false, 'sidebar-toggle': true })} onClick={() => { this.toggle(); }}><i class="fa fa-close"></i><i class="fa fa-bars"></i></button>
            <div className="sidebar__scroll">
              <Sidebar/>
              <Route path="/development"  render={() => <SidebarDevelopment />} />
              <Route path="/design" render={() => <SidebarDesign />} />
            </div>
          </aside>
          <main className={classnames({ 'main-content__sidebar-open': this.state.menuOpen === true, 'main-content': true })}>

              <Route path="/" exact component={Home} />

              {/* Design routes */}
              <Route path="/design/overview/" component={DesignOverview} />
              <Route path="/design/sketchdocumentation" component={SketchDocumentation} />

              {/* Development routes */}
      
              <Route path="/development/overview/" component={DevelopmentOverview} />

              {/* Components routes  */}
              <Container>
              <Route path="/development/components/overview/" component={ComponentOverview} />
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
              <Route path="/development/pagetemplates" component={PageTemplates} />

              {/* Modules routes  */}
              <Route path="/development/modules" exact component={Modules} />
              <Route path="/development/modules/navs/" component={NavsPage} />
              <Route path="/development/modules/navbar/" component={NavbarPage} />
              <Route path="/development/modules/tables/" component={TablesPage} />
              <Route path="/development/modules/cardpage/" component={CardPage} />


              {/* Patterns routes  */}
              <Route path="/development/patterns" component={Patterns} />
              </Container>
            <Footer />
          </main>
        </div>
      </Router>


    );
  }

}

const sidebarStyle = {
  borderRight: 'solid 1px #343434',
  maxHeight: '100vh ',
  overflow: 'true',
  position: 'fixed',
  height: '100%',
  overflow: 'show'
  
}

export default App;