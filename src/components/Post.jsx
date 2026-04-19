import React, { useState } from 'react';
import { useAuth } from '../AuthContext';

const Post = ({ id, user, handle, content, timestamp, stats, onLike, onDelete }) => {
  const { user: currentUser } = useAuth();
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([]);
  
  const isLiked = stats.isLiked;

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    
    const newComment = {
      id: Date.now(),
      user: currentUser?.name || 'Guest',
      handle: currentUser?.handle || '@guest',
      text: commentText,
      timestamp: 'now'
    };
    
    setComments([newComment, ...comments]);
    setCommentText('');
  };
  
  return (
    <div className="post-skeleton" style={{ animation: 'none', cursor: 'default', display: 'block', position: 'relative' }}>
      {onDelete && (
        <button 
          onClick={() => onDelete(id)}
          style={{ 
            position: 'absolute', 
            top: '12px', 
            right: '12px', 
            background: 'transparent', 
            border: 'none', 
            color: 'var(--text-secondary)', 
            cursor: 'pointer',
            fontSize: '18px',
            padding: '4px',
            zIndex: 1
          }}
          title="Delete Post"
        >
          🗑️
        </button>
      )}
      <div style={{ display: 'flex' }}>
        <div className="post-avatar" style={{ backgroundColor: '#555' }}></div>
        <div className="post-content">
          <div className="post-header-info" style={{ display: 'flex', gap: '4px', marginBottom: '4px', paddingRight: '24px' }}>
            <span style={{ fontWeight: 700 }}>{user}</span>
            <span style={{ color: 'var(--text-secondary)' }}>{handle} · {timestamp}</span>
          </div>
          <div className="post-text" style={{ fontSize: '15px', lineHeight: '20px', marginBottom: '12px' }}>
            {content}
          </div>
          <div className="post-actions">
            <div className="action-item" onClick={() => setShowComments(!showComments)}>
              <span className="action-icon">💬</span> 
              <span style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>
                {comments.length > 0 ? `${stats.replies} + ${comments.length}` : stats.replies}
              </span>
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

      {showComments && (
        <div className="comments-section" style={{ marginLeft: '52px' }}>
          <form className="comment-input-container" onSubmit={handleAddComment}>
            <div className="comment-avatar" style={{ backgroundColor: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '12px', fontWeight: 'bold' }}>
              {currentUser?.name?.[0].toUpperCase() || 'G'}
            </div>
            <input 
              className="comment-input" 
              placeholder="Post your reply" 
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
            <button 
              type="submit" 
              className="post-btn-small" 
              disabled={!commentText.trim()}
              style={{ padding: '4px 16px', fontSize: '14px' }}
            >
              Reply
            </button>
          </form>

          <div className="comments-list">
            {comments.map(comment => (
              <div key={comment.id} className="comment-item">
                <div className="comment-avatar"></div>
                <div className="comment-content">
                  <div className="comment-header">
                    <span style={{ fontWeight: 700 }}>{comment.user}</span>
                    <span style={{ color: 'var(--text-secondary)' }}>{comment.handle} · {comment.timestamp}</span>
                  </div>
                  <div className="comment-text">{comment.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
