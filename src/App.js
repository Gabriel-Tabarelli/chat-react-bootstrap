import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import ImageClound from './pages/ImageClound';
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path='/image' element={<ImageClound/>}/>
        <Route path="*" element={<Navigate to={"/"} />}/>
      </Routes>
    </Router>
  );
}

export default App