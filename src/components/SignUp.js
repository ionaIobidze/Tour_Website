import React, { useState } from 'react';
import './SignUp.css';

const SignUp = ({ setAuthenticated, language }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const adminUser = {
    email: 'admin',
    password: 'admin123'
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (isLogin) {
      if (email === adminUser.email && password === adminUser.password) {
        setAuthenticated(true);
      } else {
        setError(language === 'en' ? 'Invalid email or password' : 'არასწორი ელფოსტა ან პაროლი');
      }
    } else {
      if (!validateEmail(email)) {
        setError(language === 'en' ? 'Invalid email format' : 'არასწორი ელფოსტის ფორმატი');
        return;
      }
      if (password !== confirmPassword) {
        setError(language === 'en' ? 'Passwords do not match' : 'პაროლები არ ემთხვევა');
        return;
      }
      
      console.log('Registered with Email:', email, 'Password:', password);
      setIsLogin(true);
    }
  };

  const validateEmail = (email) => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  };

  return (
    <div className="signup">
      <h1>{isLogin ? (language === 'en' ? 'Log In' : 'შესვლა') : (language === 'en' ? 'Sign Up' : 'რეგისტრაცია')}</h1>
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
        {!isLogin && (
          <div className="form-group">
            <label>{language === 'en' ? 'Confirm Password:' : 'დაადასტურეთ პაროლი:'}</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        )}
        {error && <p className="error">{error}</p>}
        <button type="submit">{isLogin ? (language === 'en' ? 'Log In' : 'შესვლა') : (language === 'en' ? 'Sign Up' : 'რეგისტრაცია')}</button>
      </form>
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? (language === 'en' ? 'Create an Account' : 'შექმენით ანგარიში') : (language === 'en' ? 'Already have an account? Log In' : 'უკვე გაქვთ ანგარიში? შედით')}
      </button>
    </div>
  );
};

export default SignUp;
