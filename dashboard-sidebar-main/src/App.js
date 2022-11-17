import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Connection from './pages/Connection.jsx';
import Configuration from './pages/Configuration.jsx';
import Monitoring from './pages/Monitoring.jsx';
import Motion from './pages/Motion.jsx';
import Parameters from './pages/Parameters.jsx';
import Homepage from './pages/Homepage.jsx';
import Main from './pages/Main';
import Login from './pages/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/main" element={<Main/>} />
          <Route path="/connection" element={<Connection />} />
          <Route path="/configuration" element={<Configuration />} />
          <Route path="/motion" element={<Motion />} />
          <Route path="/monitoring" element={<Monitoring />} />
          <Route path="/parameters" element={<Parameters />} />
          <Route path="/homepage" element={<Homepage />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;