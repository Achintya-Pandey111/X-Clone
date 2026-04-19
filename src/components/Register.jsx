import React, { useState } from 'react';
import { useAuth } from '../AuthContext';

const Register = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const { login, register } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      login({ name: formData.name || formData.email.split('@')[0], email: formData.email });
    } else {
      register({ name: formData.name, email: formData.email });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.type === 'password' ? 'password' : e.target.type === 'email' ? 'email' : 'name']: e.target.value });
  };

  return (
    <div className="register-overlay">
      <div className="register-container">
        <div className="register-header">
          <div className="register-logo">𝕏</div>
        </div>
        <div className="register-content">
          <h1>{isLogin ? 'Log in to X' : 'Create your account'}</h1>
          <form className="register-form" onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="input-group">
                <input 
                  type="text" 
                  placeholder="Name" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
            )}
            <div className="input-group">
              <input 
                type="email" 
                placeholder="Email" 
                required 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className="input-group">
              <input 
                type="password" 
                placeholder="Password" 
                required 
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
            </div>
            
            {!isLogin && (
              <div className="birth-date">
                <h3>Date of birth</h3>
                <p>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
                <div className="date-selectors">
                  <select defaultValue="">
                    <option value="" disabled>Month</option>
                    <option>January</option><option>February</option><option>March</option>
                  </select>
                  <select defaultValue="">
                    <option value="" disabled>Day</option>
                    {[...Array(31)].map((_, i) => (
                      <option key={i + 1}>{i + 1}</option>
                    ))}
                  </select>
                  <select defaultValue="">
                    <option value="" disabled>Year</option>
                    {[...Array(100)].map((_, i) => (
                      <option key={2024 - i}>{2024 - i}</option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            <button type="submit" className="next-btn">{isLogin ? 'Log in' : 'Next'}</button>
          </form>
          
          <div className="register-footer">
            <p>
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <span className="link" onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? 'Sign up' : 'Log in'}
              </span>
            </p>
            <p style={{ marginTop: '16px', borderTop: '1px solid var(--border)', paddingTop: '16px', textAlign: 'center' }}>
              <span className="link" style={{ fontWeight: 'bold' }} onClick={() => login({ name: 'Guest', email: 'guest@x.com' })}>
                View all posts without an account
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
