import React from 'react';
import { Nav, Navbar, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './img/solidarity.png';
import './style/navbar.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Home from './Home';
import Hospital from './Hospital';
import EditHospital from './EditHospital';
import AddMember from './AddMember'
import About from './About';
import Contact from './Contact';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Members from './Members';

class Menu extends React.Component {
  render() {
    return (

      <Router>

        <Navbar className="nav" bg="light" expand="lg">
          <Navbar.Brand href="#home">
            <Image src={logo} width="50" height="50" className="d-inline-block align-top" />
          </Navbar.Brand>
          <Navbar.Brand className="nav"><p className="navPar">Life Line</p></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav mr-auto">

              <Nav.Link className="navList"><Link to='/'>Home</Link></Nav.Link>
              <Nav.Link className="navList"><Link to='/hospital'>Hospital</Link></Nav.Link>
              <Nav.Link className="navList"><Link to='/member'>Members</Link></Nav.Link>
              {/* <Nav.Link className="navList"><Link to='/about'>About us</Link></Nav.Link> */}
              <Nav.Link className="navList"><Link to='/contact'>Contact us</Link></Nav.Link>


            </Nav>
            <Nav pullRight inline>
              <Nav.Link className="navList"><Link to='/signIn'>Sign In</Link></Nav.Link>
              <Nav.Link className="navList"><Link to='/signUp'> Sign Up</Link></Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Navbar>



        <Route exact path="/" component={Home} />
        <Route path="/hospital" component={Hospital} />
        <Route path="/member" component={Members} />
        {/* <Route path="/about" component={About} /> */}
        <Route path="/contact" component={Contact} />

        <Route path="/signIn" component={SignIn} />
        <Route path="/signUp" component={SignUp} />


        <Route path="/editHospital" component={EditHospital} />
        <Route path="/addMember" component={AddMember} />

      </Router>
    );
  }
}

export default Menu;