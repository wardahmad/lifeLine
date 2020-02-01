import React from 'react';
import {Nav, Navbar, NavItem, Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './img/logo.png';
import './style/navbar.css';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Home from './Home';
import How from './How';
import Hospital from './Hospital';
import About from './About';
import Contact from './Contact';

class Menu extends React.Component {
  render() {
    return (
      <Router>

        <Navbar className="nav" bg="light" expand="lg">
          <Navbar.Brand href="#home">
            <Image src={logo} width="50" height="50" className="d-inline-block align-top" />
          </Navbar.Brand>
          <Navbar.Brand className="nav">Life Line</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav mr-auto">
              <Nav.Link><Link to='/Home'>Home</Link></Nav.Link>
              <Nav.Link><Link to='/How'>How to donate?</Link></Nav.Link>
              <Nav.Link><Link to='/Hospital'>Our Partners</Link></Nav.Link>
              <Nav.Link><Link to='/About'>About us</Link></Nav.Link>
              <Nav.Link><Link to='/Contact'>Contact us</Link></Nav.Link>

              <Route path="./components/Home" component={Home} />
              <Route path="./components/How" component={How} />
              <Route path="./components/Hospital" component={Hospital} />
              <Route path="./components/About" component={About} />
              <Route path="./components/Contact" component={Contact} />

            </Nav>
            <Nav pullRight inline>
              <Nav.Link href="#">Sign In</Nav.Link>
              <Nav.Link href="#"> Sign Up</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Navbar>

      </Router>
    );
  }
}

export default Menu;
