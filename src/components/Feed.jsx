import React, { useState } from 'react';
import { useAuth } from '../AuthContext';

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
            onClick={() => onLike(id)}
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

function Feed() {
  const { user: currentUser } = useAuth();
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: 'SpaceX',
      handle: '@SpaceX',
      content: 'Deployment of 23 Starlink satellites confirmed!',
      timestamp: '2h',
      stats: { replies: '1.2K', retweets: '4.5K', likes: 22000, views: '1.5M', isLiked: false }
    },
    {
      id: 2,
      user: 'React',
      handle: '@reactjs',
      content: 'React 19 is now in stable! Check out the new features including Actions, useOptimistic, and better SEO support.',
      timestamp: '5h',
      stats: { replies: '850', retweets: '12K', likes: 45000, views: '2.1M', isLiked: true }
    },
    {
      id: 3,
      user: 'Elon Musk',
      handle: '@elonmusk',
      content: 'To the moon! 🚀',
      timestamp: '8h',
      stats: { replies: '45K', retweets: '110K', likes: 890000, views: '45M', isLiked: false }
    }
  ]);

  const handleLike = (postId) => {
    setPosts(prevPosts => prevPosts.map(post => {
      if (post.id === postId) {
        const newIsLiked = !post.stats.isLiked;
        return {
          ...post,
          stats: {
            ...post.stats,
            isLiked: newIsLiked,
            likes: newIsLiked ? post.stats.likes + 1 : post.stats.likes - 1
          }
        };
      }
      return post;
    }));
  };

  return (
    <div className="feed-container">
      <header className="feed-header">
        <div className="tab active">For you</div>
        <div className="tab">Following</div>
      </header>
      
      <div className="composer">
        <div className="avatar-placeholder" style={{ backgroundColor: '#1d9bf0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>
          {currentUser?.name?.[0].toUpperCase() || 'U'}
        </div>
        <div className="composer-input">What is happening?!</div>
        <button className="post-btn-small">Post</button>
      </div>

      <div className="posts-list">
        {posts.map((post) => (
          <Post key={post.id} {...post} onLike={handleLike} />
        ))}
        {/* Skeletons for the "rest" of the feed */}
        <div className="post-skeleton">
          <div className="post-avatar"></div>
          <div className="post-content">
            <div className="post-header-line"></div>
            <div className="post-text-line"></div>
            <div className="post-text-line short"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;

