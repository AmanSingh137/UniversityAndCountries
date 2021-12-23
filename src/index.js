import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Describe from './Components/Describe';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/country" element={<Describe />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
