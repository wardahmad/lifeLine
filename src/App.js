import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Menu from './components/Navbar';
//import Footer from './components/Footer';
import ControlledCarousel from './components/Home';
//import { Router, Route } from 'react-router-dom';
//import Info from './components/Info';
import Hospital from './components/Hospital';
import Patient from './components/Patients';
import BloodDonor from './components/BloodDonor';
//import SignIn from './components/SignIn';
//import SignUp from './components/SignUp';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';




function App() {
  return (
    <div>
      <div>
        < Menu />
        < ControlledCarousel />
        {/* < Info />
        < Hospital /> */}
        {/* < Footer /> */}
      </div>

      <div className="hospitalContainar">
      <Router>
        <nav>
        <Link to='/hospital'>Hospital</Link>{'      '}
        <Link to='/patients'>Patients</Link>{'      '}
        <Link to='/bloodDonor'>Blood Donor</Link>

        </nav>

        <Route>
        <Route path="/hospital" component={Hospital} />
        <Route path="/patients" component={Patient} />
        <Route path="/bloodDonor" component={BloodDonor} />

        </Route>

      </Router>
      </div>
      

    </div>

  );
}

export default App;
