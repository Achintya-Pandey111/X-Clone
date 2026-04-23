import React, { useState } from 'react';
import { useAuth } from '../AuthContext';

function EditProfileModal({ onClose }) {
  const { user, updateUser } = useAuth();
  const [name, setName] = useState(user?.name || '');
  const [bio, setBio] = useState(user?.bio || '');
  const [showPasswordChange, setShowPasswordChange] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (showPasswordChange) {
      if (!newPassword) {
        setError('Please enter a new password');
        return;
      }
      if (newPassword !== confirmPassword) {
        setError('Passwords do not match');
        return;
      }
    }

    const updates = { name, bio };
    if (showPasswordChange && newPassword) {
      updates.password = newPassword;
    }

    updateUser(updates);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <button className="close-btn" onClick={onClose}>✕</button>
            <h2 style={{ fontSize: '20px', margin: 0 }}>Edit profile</h2>
          </div>
          <button className="save-btn" onClick={handleSubmit}>Save</button>
        </div>

        <form onSubmit={handleSubmit} className="modal-body">
          {error && <div style={{ color: '#ff4444', marginBottom: '10px', fontSize: '14px' }}>{error}</div>}
          
          <div className="input-group">
            <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '13px', marginBottom: '4px' }}>Name</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
          </div>
          <div className="input-group">
            <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '13px', marginBottom: '4px' }}>Bio</label>
            <textarea 
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              rows={4}
              placeholder="Bio"
              style={{ 
                width: '100%', 
                background: 'transparent', 
                border: '1px solid var(--border)', 
                color: 'var(--text-primary)', 
                fontSize: '17px', 
                outline: 'none', 
                borderRadius: '4px',
                padding: '12px',
                resize: 'none',
                fontFamily: 'inherit'
              }}
            />
          </div>

          <div style={{ marginTop: '20px', borderTop: '1px solid var(--border)', paddingTop: '15px' }}>
            {!showPasswordChange ? (
              <button 
                type="button" 
                onClick={() => setShowPasswordChange(true)}
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  color: 'var(--twitter-blue)', 
                  cursor: 'pointer',
                  padding: 0,
                  fontSize: '15px'
                }}
              >
                Change password
              </button>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ fontSize: '16px', margin: 0 }}>Change password</h3>
                  <button 
                    type="button" 
                    onClick={() => { setShowPasswordChange(false); setError(''); }}
                    style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}
                  >
                    Cancel
                  </button>
                </div>
                <div className="input-group">
                  <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '13px', marginBottom: '4px' }}>New Password</label>
                  <input 
                    type="password" 
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="New Password"
                  />
                </div>
                <div className="input-group">
                  <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '13px', marginBottom: '4px' }}>Confirm Password</label>
                  <input 
                    type="password" 
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password"
                  />
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProfileModal;
