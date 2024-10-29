import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AgencyForm from './components/AgencyForm';
import ClientUpdate from './components/ClientUpdate';
import TopClient from './components/TopClient';

const App = () => {
    return (
      <Router>
      
        <Routes>
                <Route path="/" element={<AgencyForm />} />
                <Route path="/update-client" element={<ClientUpdate />} />
                <Route path="/top-clients" element={<TopClient />} />
                </Routes>
    </Router>
    );
};

export default App;
