import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutPage from "./pages/AboutPage";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import Navbar from "./pages/Navbar";
import Wines from "./pages/Wines";
import Login from './pages/Login';
import { AuthProvider } from './pages/AuthContext'; // Import the AuthProvider
import Reviews from './pages/Reviews';

function App() {
  return (
    <Router>
      <AuthProvider> {/* Place AuthProvider as a parent of Routes */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wines" element={<Wines />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </AuthProvider> {/* Close AuthProvider */}
    </Router>
  );
}

export default App;