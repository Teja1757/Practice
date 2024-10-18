import React from 'react';
import '@patternfly/react-core/dist/styles/base.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Loginpage } from './components/Loginpage.tsx';
import { Home } from './components/Home.tsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/home/*" element={<Home />} />
        
      </Routes>
    </Router>
  );
};

export default App;
