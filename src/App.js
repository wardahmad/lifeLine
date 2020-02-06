import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Menu from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <div>
        <Menu />
        <Footer />
      </div>
    </div>

  );
}

export default App;