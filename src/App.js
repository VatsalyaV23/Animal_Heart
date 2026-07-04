import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Clinic from './pages/Clinic';
import Shop from './pages/Shop';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clinic" element={<Clinic />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </Router>
  );
}

export default App;
