import React from 'react';
import Navbar from './Navbar.jsx';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import '../css/App.css';
import Home from './Pages/Home.jsx';
import Education from './Education.jsx';
import Experience from './Experience.jsx';
import Projects from './Projects.jsx';



function App() {
  return (
      <Router>
        <Navbar />
          <Routes>
            <Route path= '/' element={<Home />} />
            <Route path= '/services' element={<Education />} />
            <Route path= '/products' element={<Experience />} />
            <Route path= '/sign-up' element={<Projects />} />
          </Routes> 
      </Router>
  );
}

export default App;
