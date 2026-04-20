import React, { useState } from 'react';
import { useAuth } from '../AuthContext';

function EditProfileModal({ onClose }) {
  const { user, updateUser } = useAuth();
  const [name, setName] = useState(user?.name || '');
  const [bio, setBio] = useState(user?.bio || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser({ name, bio });
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
        </form>
      </div>
    </div>
  );
}

export default EditProfileModal;
