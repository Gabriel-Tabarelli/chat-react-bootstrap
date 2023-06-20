import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import ImageClound from './pages/aws/ImageCloud';
import Login from './pages/Login'
import Register from './pages/Register'
import User from './pages/aws/User';
import UserList from './pages/aws/UserList';
import UserOne from './pages/aws/UserOne';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path='/image' element={<ImageClound/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/users' element={<UserList/>}/>
        <Route path='/user/:id' element={<UserOne/>}/>
        <Route path="*" element={<Navigate to={"/"} />}/>
      </Routes>
    </Router>
  );
}

export default App