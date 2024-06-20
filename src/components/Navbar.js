import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ language, toggleLanguage }) {
  return (
    <nav>
      <ul>
        <li><Link to="/">{language === 'en' ? 'Home' : 'მთავარი'}</Link></li>
        <li><Link to="/tours">{language === 'en' ? 'Tours' : 'ტურები'}</Link></li>
        <li><Link to="/about">{language === 'en' ? 'About Us' : 'ჩვენს შესახებ'}</Link></li>
        <li><Link to="/contact">{language === 'en' ? 'Contact Us' : 'დაგვიკავშირდით'}</Link></li>
        <li><Link to="/signup">{language === 'en' ? 'Sign Up / Log In' : 'რეგისტრაცია / შესვლა'}</Link></li>
        <li>
          <button onClick={toggleLanguage}>
            {language === 'en' ? 'EN' : 'GE'}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
