import React from 'react';
import '@patternfly/react-core/dist/styles/base.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginPageHideShowPassword } from './components/PatternLogin.tsx';
import { PageWithOrWithoutFill } from './components/Dashboard.tsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPageHideShowPassword />} />
        <Route path="/page1" element={<PageWithOrWithoutFill />} />
      </Routes>
    </Router>
  );
};

export default App;