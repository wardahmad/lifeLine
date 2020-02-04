import React from 'react';
import {Nav, Navbar, Image } from 'react-bootstrap';
//import {Nav, Navbar, NavItem, Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './img/logo.png';
import './style/navbar.css';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Home from './Home';
//import How from './How';
import Hospital from './Hospital';
import EditHospital from './EditHospital';
import AddMember from './AddMember'
//import About from './About';
//import Contact from './Contact';
import SignIn from './SignIn';
import SignUp from './SignUp';

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
              <Nav.Link><Link to='/'>Home</Link></Nav.Link>
              <Nav.Link><Link to='/hospital'>Hospital</Link></Nav.Link>
              <Link to= '/EditHospital'></Link>
              <Link to= '/addMember'></Link>
              <Nav.Link>How to donate?</Nav.Link>
              {/* <Nav.Link>Our Partners</Nav.Link> */}
              <Nav.Link>About us</Nav.Link>
              <Nav.Link>Contact us</Nav.Link>

               
              
            </Nav>
            <Nav pullRight inline>
              <Nav.Link><Link to='/SignIn'>Sign In</Link></Nav.Link>
              <Nav.Link><Link to='/SignUp'> Sign Up</Link></Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
        </Navbar>

              <Route path="/SignIn" component={SignIn} />
              <Route path="/SignUp" component={SignUp} />
              <Route exact path="/" component={Home} />
              <Route path="/hospital" component={Hospital} />
              <Route path="/EditHospital" component={EditHospital} />
              <Route path="/addMember" component={AddMember} />
              {/* <Route exact path="/How" component={How} />
              <Route path="/Hospital" component={Hospital} />
              <Route path="/About" component={About} />
              <Route path="/Contact" component={Contact} />  */}


      </Router>
    );
  }
}

export default Menu;
