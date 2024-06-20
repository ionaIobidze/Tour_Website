import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ToursPage from './components/ToursPage';
import SignUp from './components/SignUp';
import ContactForm from './components/ContactForm';
import Login from './components/Login';
import AboutUs from './components/AboutUs'; // Corrected import statement

function App() {
  const [language, setLanguage] = useState('en');
  const [authenticated, setAuthenticated] = useState(false);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'ge' : 'en'));
  };

  return (
    <div>
      <Navbar language={language} toggleLanguage={toggleLanguage} />
      <Routes>
        <Route path="/" element={<HomePage language={language} />} />
        <Route path="/tours" element={<ToursPage language={language} />} />
        <Route path="/about" element={<AboutUs language={language} />} />
        <Route path="/contact" element={<ContactForm language={language} />} />
        <Route path="/signup" element={<SignUp language={language} setAuthenticated={setAuthenticated} />} />
        <Route path="/login" element={<Login language={language} setAuthenticated={setAuthenticated} />} />
      </Routes>
      {authenticated && <p>Welcome, Admin!</p>}
    </div>
  );
}

export default App;
