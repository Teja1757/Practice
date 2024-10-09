# Practice

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  LoginPage,
  LoginForm,
} from '@patternfly/react-core';

function CustomLoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'password') {
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };


  const handleForgotPassword = () => {
    navigate('/forgot-password');  
  };

  const handleSignUp = () => {
    navigate('/sign-up');  
  };


  return (
    <div 
            style={
                {
                    backgroundImage: 'url(https://aithority.com/wp-content/uploads/2021/02/TCS-Launches-AWS-Business-Unit-to-Help-Customers-Accelerate-Innovation-and-Unlock-Business-Value.jpg)', // Replace with your image URL
                    backgroundSize: 'cover', // This makes the image cover the entire div
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center', // Center the inner content vertically
                    justifyContent: 'center', // Center the inner content horizontally
                    overflow: 'hidden', // Prevents scrolling or overflow
                }
            }
    >
    <div 
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        height: '100vh',
        alignItems: 'center',
        marginLeft: '65%',
        marginTop: '10%' ,
      }}
    >
      <LoginPage
        loginTitle="Log in to your account"

      >
        
        <LoginForm
          showHelperText={false}
          helperText="Invalid credentials"
          onLoginButtonClick={handleSubmit}
          loginButtonLabel="Log In"
          usernameLabel="Username"
          passwordLabel="Password"
          isLoginButtonDisabled={false}
          usernameValue={username}
          onChangeUsername={(_event, value) => setUsername(value)}
          passwordValue={password}
          onChangePassword={(_event, value) => setPassword(value)}
        >
          </LoginForm>

          <div style={{ marginTop: '1rem', textAlign: 'center' }}>
            <Button variant="link" onClick={handleForgotPassword}>
              Forgot password?
            </Button>
            <span> | </span>
            <Button variant="link" onClick={handleSignUp}>
              Need an account? Sign up.
            </Button>
          </div>
      </LoginPage>
    </div>
    </div>
  );
}

export default CustomLoginPage;




import React from 'react';
import '@patternfly/react-core/dist/styles/base.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyLoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyLoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;


import React from 'react';
import { Page, PageSection, Title } from '@patternfly/react-core';

function Dashboard() {
  return (
    <Page>
      <PageSection>
        <Title headingLevel="h1">Welcome to the Dashboard!</Title>
      </PageSection>
    </Page>
  );
}

export default Dashboard;
