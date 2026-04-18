import React from 'react';

const Register = ({ onToggle }) => {
  return (
    <div className="register-overlay">
      <div className="register-container">
        <div className="register-header">
          <button className="close-btn" onClick={onToggle}>✕</button>
          <div className="register-logo">𝕏</div>
        </div>
        <div className="register-content">
          <h1>Create your account</h1>
          <form className="register-form" onSubmit={(e) => e.preventDefault()}>
            <div className="input-group">
              <input type="text" placeholder="Name" required />
            </div>
            <div className="input-group">
              <input type="email" placeholder="Email" required />
            </div>
            <div className="input-group">
              <input type="password" placeholder="Password" required />
            </div>
            
            <div className="birth-date">
              <h3>Date of birth</h3>
              <p>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
              <div className="date-selectors">
                <select defaultValue="">
                  <option value="" disabled>Month</option>
                  {/* Dummy months */}
                  <option>January</option><option>February</option><option>March</option>
                </select>
                <select defaultValue="">
                  <option value="" disabled>Day</option>
                  {/* Dummy days */}
                  {[...Array(31)].map((_, i) => (
                    <option key={i + 1}>{i + 1}</option>
                  ))}
                </select>
                <select defaultValue="">
                  <option value="" disabled>Year</option>
                  {/* Dummy years */}
                  {[...Array(100)].map((_, i) => (
                    <option key={2024 - i}>{2024 - i}</option>
                  ))}
                </select>
              </div>
            </div>

            <button type="submit" className="next-btn">Next</button>
          </form>
          
          <div className="register-footer">
            <p>Already have an account? <span className="link" onClick={onToggle}>Log in</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
