import React from 'react';
import './ContactForm.css';

function ContactForm({ language }) {
  return (
    <div className="contact-form">
      <h1>{language === 'en' ? 'Contact Us' : 'დაგვიკავშირდით'}</h1>
      <div className="contact-info">
        <img src={`${process.env.PUBLIC_URL}/assets/iona_iobidze.jpeg`} alt="Iona Iobidze" className="profile-image" />
        <div className="contact-details">
          <h2>Iona Iobidze</h2>
          <p>
            {language === 'en' 
              ? 'Email:' 
              : 'ელ.ფოსტა:'} <a href="mailto:ionaiobidze@gmail.com">ionaiobidze@gmail.com</a>
          </p>
          <p>
            {language === 'en' 
              ? 'Phone:' 
              : 'ტელეფონი:'} <a href="tel:+995598305804">+995 598 305 804</a>
          </p>
          <p>
            {language === 'en' 
              ? 'LinkedIn:' 
              : 'ლინკდინი:'} <a href="https://www.linkedin.com/in/iona-iobidze/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/iona-iobidze/</a>
          </p>
          <p>
            {language === 'en' 
              ? 'GitHub:' 
              : 'გიტჰაბი:'} <a href="https://github.com/ionaIobidze" target="_blank" rel="noopener noreferrer">https://github.com/ionaIobidze</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;

