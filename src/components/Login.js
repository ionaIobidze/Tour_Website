import React, { useState } from 'react';
import './Login.css';

const Login = ({ setAuthenticated, language }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const adminUser = {
    email: 'admin',
    password: 'admin123'
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (email === adminUser.email && password === adminUser.password) {
      setAuthenticated(true);
    } else {
      setError(language === 'en' ? 'Invalid email or password' : 'არასწორი ელფოსტა ან პაროლი');
    }
  };

  return (
    <div className="login">
      <h1>{language === 'en' ? 'Log In' : 'შესვლა'}</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>{language === 'en' ? 'Email:' : 'ელფოსტა:'}</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>{language === 'en' ? 'Password:' : 'პაროლი:'}</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">{language === 'en' ? 'Log In' : 'შესვლა'}</button>
      </form>
    </div>
  );
};

export default Login;
