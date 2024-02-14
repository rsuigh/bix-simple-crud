import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route as RouteElement } from 'react-router';
import './App.css';
import Login from './Pages/Login';


const App = () => {
  return (
    <Router>
      <Routes>
        <RouteElement  path="/" element={<Login />} />
        {/* Outras rotas */}
      </Routes>
    </Router>
  );
};

export default App;
