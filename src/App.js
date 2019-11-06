import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import { Nav, Navbar ,Button} from 'react-bootstrap';


import './App.css';
import About from './Components/About';
import Ip from './Components/Ip';
import Home from './Components/Home';
import NotFound from './Components/NotFound';

function App() {
  return (

    <div className="App">
      <Router>

        <Navbar bg="light" expand="lg" className="hederr">
          <NavLink className="nav-link" to="/">IPA Service</NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Button variant="light" className="nav-link" href="/Ip">Geek Details</Button>
              <Button variant="light" className="nav-link" href="/About">About</Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Ip" component={Ip} />
          <Route path="/about" component={About} />
          <Route path="*" component={NotFound} />

        </Switch>
      </Router>





      <div className="footer">Copyright ® 2019 <a href="https://github.com/BoSHeCa"> @BoSHeCa</a>. | <strong>General Assembly</strong>.</div>

    </div>
  );
}

export default App;