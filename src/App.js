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


import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';
import { Button, Grid, Jumbotron, Col, Row, ButtonToolbar, Nav, Navbar, NavDropdown, NavItem, MenuItem } from 'react-bootstrap';

class App extends Component {
  render() {
    
    return (
      <Router>
        <div>
        <Navigation />
            <Route path="/" exact component={Home} />
            <Route path="/Design" component={Design} />
            <Route path="/Development" component={Development} />
            <Route path="/Components" component={Components} />
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