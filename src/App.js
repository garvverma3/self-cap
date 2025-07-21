import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'; 
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Blog from './Pages/Blog';

function App() {
  const location = useLocation();

  // Don't show footer on login or signup pages
  const hideFooter = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      {!hideFooter && <Footer />}
    </>
  );
}

export default App;
