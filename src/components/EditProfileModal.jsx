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

        <div className="edit-profile-images">
          <div className="edit-banner">
            <img src={user?.banner || 'https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=600&h=200'} alt="Banner" />
            <div className="image-upload-overlay">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
                <path d="M9.697 3H11c.552 0 1 .448 1 1s-.448 1-1 1H9.697c-.382 0-.733.218-.911.555L7.33 8.36C7.152 8.697 6.801 8.915 6.419 8.915H4c-1.105 0-2 .895-2 2v9c0 1.105.895 2 2 2h16c1.105 0 2-.895 2-2v-9c0-1.105-.895-2-2-2h-2.419c-.382 0-.733-.218-.911-.555L15.214 5.555C15.036 5.218 14.685 5 14.303 5H13c-.552 0-1-.448-1-1s.448-1 1-1h1.303c1.146 0 2.199.654 2.73 1.66l1.353 2.59H20c2.209 0 4 1.791 4 4v9c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4v-9c0-2.209 1.791-4 4-4h2.614l1.353-2.59C8.5 3.654 9.551 3 10.697 3zM12 19c-2.761 0-5-2.239-5-5s2.239-5 5-5 5 2.239 5 5-2.239 5-5 5zm0-2c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z" />
              </svg>
            </div>
          </div>
          <div className="edit-avatar">
            <div className="avatar-wrapper">
              <div className="avatar-placeholder" style={{ backgroundColor: '#1d9bf0', width: '100%', height: '100%', fontSize: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {user?.name?.[0].toUpperCase()}
              </div>
              <div className="image-upload-overlay">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
                  <path d="M9.697 3H11c.552 0 1 .448 1 1s-.448 1-1 1H9.697c-.382 0-.733.218-.911.555L7.33 8.36C7.152 8.697 6.801 8.915 6.419 8.915H4c-1.105 0-2 .895-2 2v9c0 1.105.895 2 2 2h16c1.105 0 2-.895 2-2v-9c0-1.105-.895-2-2-2h-2.419c-.382 0-.733-.218-.911-.555L15.214 5.555C15.036 5.218 14.685 5 14.303 5H13c-.552 0-1-.448-1-1s.448-1 1-1h1.303c1.146 0 2.199.654 2.73 1.66l1.353 2.59H20c2.209 0 4 1.791 4 4v9c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4v-9c0-2.209 1.791-4 4-4h2.614l1.353-2.59C8.5 3.654 9.551 3 10.697 3zM12 19c-2.761 0-5-2.239-5-5s2.239-5 5-5 5 2.239 5 5-2.239 5-5 5zm0-2c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="modal-body" style={{ marginTop: '40px' }}>
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
