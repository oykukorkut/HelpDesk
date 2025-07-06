import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import HelpDeskList from './pages/HelpDeskList';
import NewHelpRequest from './pages/NewHelpRequest';
import HelpRequests from "./pages/HelpRequests";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/helpdesklist" element={<HelpDeskList />} />
          <Route path="/new-help-request" element={<NewHelpRequest />} />
          <Route path="/helprequests" element={<HelpRequests />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
