import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Menu from './components/Navbar';
import Footer from './components/Footer';
import ControlledCarousel from './components/Home';
import Info from './components/Info';
import Hospital from './components/Hospital';
//import SignIn from './components/SignIn';
//import SignUp from './components/SignUp';



function App() {
  return (
    <div>
    < Menu />
    {/* < ControlledCarousel /> */}
    {/* < Info />
    < Hospital /> */}
    < Footer />
    </div>
  );
}

export default App;
