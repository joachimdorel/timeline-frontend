import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import './App.css';

import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import Home from './components/Home';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </Router>
  );
}

export default App;
