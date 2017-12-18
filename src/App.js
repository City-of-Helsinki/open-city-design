import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Prism from './utility/prism.js';
import classnames from 'classnames';
import './css/docs.css';
import './css/prism.css';
import { Container, Button, Grid, Jumbotron, Col, Row, ButtonToolbar, Nav, Navbar, NavDropdown, NavItem, MenuItem } from 'reactstrap';


import Home from './routes/Home';
import Development from './routes/development/Development';
import Modules from './routes/development/Modules';
import Patterns from './routes/development/Patterns';
import PageTemplates from './routes/development/PageTemplates';
import DevelopmentOverview from './routes/development/DevelopmentOverview';
import ComponentOverview from './components/docs/components/Overview';
import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar/Sidebar';
import SidebarDevelopment from './components/Sidebar/development/SidebarDevelopment';
import SidebarDesign from './components/Sidebar/design/SidebarDesign';
import Footer from './components/Footer';

// Design 
import Design from './routes/design/Design';
import DesignOverview from './routes/design/DesignOverview';
import DesignKit from './routes/design/DesignKit';
import BrandMaterial from './routes/design/BrandMaterial';


// Development Styles


import ColorsPage from './components/docs/styles/Colors/ColorsPage';
import KorosPage from './components/docs/styles/Koros/KorosPage';
import TypographyPage from './components/docs/styles/Typography/TypographyPage';
import StylesOverviewPage from './components/docs/styles/Overview/StylesOverviewPage';
import LogoPage from './components/docs/styles/Logo/LogoPage';

// Development Components

import LayoutPage from './components/docs/components/Layout/LayoutPage';
import NavsPage from './components/docs/components/Navs/NavsPage';
import BreadcrumbsPage from './components/docs/components/Breadcrumb/BreadcrumbsPage';
import ButtonsPage from './components/docs/components/Button/ButtonsPage';
import ButtonGroupPage from './components/docs/components/ButtonGroup/ButtonGroupPage';
import ButtonDropdownPage from './components/docs/components/ButtonDropdown/ButtonDropdownPage';
import DropdownsPage from './components/docs/components/Dropdowns/DropdownsPage';
import FadePage from './components/docs/components/Fade/FadePage';
import FormPage from './components/docs/components/Form/FormPage';
import InputGroupPage from './components/docs/components/InputGroup/InputGroupPage';
import PopoversPage from './components/docs/components/Popovers/PopoversPage';
import ProgressPage from './components/docs/components/Progress/ProgressPage';
import TooltipsPage from './components/docs/components/Tooltips/TooltipsPage';
import BadgePage from './components/docs/components/Badge/BadgePage';
import MediaPage from './components/docs/components/Media/MediaPage';
import ModalsPage from './components/docs/components/Modals/ModalsPage';
import PaginationPage from './components/docs/components/Pagination/PaginationPage';
import TabsPage from './components/docs/components/Tabs/TabsPage';
import JumbotronPage from './components/docs/components/Jumbotron/JumbotronPage';
import AlertsPage from './components/docs/components/Alerts/AlertsPage';
import CollapsePage from './components/docs/components/Collapse/CollapsePage';
import CarouselPage from './components/docs/components/Carousel/CarouselPage';
import ListGroupPage from './components/docs/components/ListGroup/ListGroupPage';


// Development Modules
import NavbarPage from './components/docs/modules/Navbar/NavbarPage';
import CardPage from './components/docs/modules/Cards/CardPage';
import TablesPage from './components/docs/modules/Tables/TablesPage';
import KoroSectionPage from './components/docs/modules/KoroSection/KoroSectionPage';


// Patterns



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
              <Route path="/design/designkit/" component={DesignKit} />
              <Route path="/design/brandmaterial/" component={BrandMaterial} />


              {/* Development routes */}
      
              <Route path="/development/overview/" component={DevelopmentOverview} />

              <Container className="docs-page">

              {/* Styles routes  */}
              <Route path="/development/styles/colors/" component={ColorsPage} />
              <Route path="/development/styles/koros/" component={KorosPage} />
              <Route path="/development/styles/typography/" component={TypographyPage} />
              <Route path="/development/styles/overview/" component={StylesOverviewPage} />
              <Route path="/development/styles/logo/" component={LogoPage} />


              {/* Components routes  */}
              <Route path="/development/components/overview/" component={ComponentOverview} />
              <Route path="/development/components/breadcrumb/" component={BreadcrumbsPage} />
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
              <Route path="/development/modules/korosection/" component={KoroSectionPage} />
              <Route path="/development/modules/navbar/" component={NavbarPage} />
              <Route path="/development/modules/tablespage/" component={TablesPage} />
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