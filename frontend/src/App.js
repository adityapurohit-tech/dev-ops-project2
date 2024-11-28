import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import WelcomePage from './components/WelcomePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/welcome" element={<WelcomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
