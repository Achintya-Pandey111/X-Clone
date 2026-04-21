import React from 'react';

const Post = ({ id, user, handle, content, timestamp, stats, onLike }) => {
  const isLiked = stats.isLiked;
  
  return (
    <div className="post-skeleton" style={{ animation: 'none', cursor: 'default' }}>
      <div className="post-avatar" style={{ backgroundColor: '#555' }}></div>
      <div className="post-content">
        <div className="post-header-info" style={{ display: 'flex', gap: '4px', marginBottom: '4px' }}>
          <span style={{ fontWeight: 700 }}>{user}</span>
          <span style={{ color: 'var(--text-secondary)' }}>{handle} · {timestamp}</span>
        </div>
        <div className="post-text" style={{ fontSize: '15px', lineHeight: '20px', marginBottom: '12px' }}>
          {content}
        </div>
        <div className="post-actions">
          <div className="action-item">
            <span className="action-icon">💬</span> 
            <span style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>{stats.replies}</span>
          </div>
          <div className="action-item">
            <span className="action-icon">🔁</span>
            <span style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>{stats.retweets}</span>
          </div>
          <div 
            className={`action-item ${isLiked ? 'liked' : ''}`} 
            onClick={() => onLike && onLike(id)}
          >
            <span className="action-icon">
              {isLiked ? '❤️' : '🤍'}
            </span> 
            <span style={{ fontSize: '13px' }}>{stats.likes}</span>
          </div>
          <div className="action-item">
            <span className="action-icon">📊</span>
            <span style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>{stats.views}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
