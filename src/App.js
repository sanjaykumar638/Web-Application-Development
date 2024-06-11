// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import LandingPage from './components/LandingPage';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <ProtectedRoute exact path="/" component={LandingPage} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
