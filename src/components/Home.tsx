import React from 'react';
import { Dashboard } from './Dashboard.tsx';
import {Navbar} from './Navbar.tsx';
import { Routes, Route } from 'react-router-dom';
import {Page, PageSection} from '@patternfly/react-core';
import {Checkpoint} from './Checkpoint.tsx';
export const Home: React.FunctionComponent  = () => 
{
    
    return(
        <Page header={<Navbar/>}>
        <PageSection>
        <Routes>
        <Route path="/home" element={<div>Welcome to Home Page</div>} /> {/* Home default view */}
          <Route path="dashboard" element={<Dashboard />} /> {/* Route for Dashboard */}
          <Route path="checkpoint" element={<Checkpoint/>} />
          <Route path="paloalto" element={<div>Palo Alto Page</div>} />
          <Route path="forti" element={<div>Forti Page</div>} />
          <Route path="ciscoasa" element={<div>Cisco ASA Page</div>} />
          <Route path="userinfo" element={<div>User Information Page</div>} />
        </Routes>
        </PageSection>
        </Page>
    );
};