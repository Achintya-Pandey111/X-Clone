import React, { useState } from 'react';

const TrendItem = ({ category, title, posts }) => (
  <div className="trend-item">
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div className="trend-meta">{category} · Trending</div>
      <div style={{ color: 'var(--text-secondary)' }}>•••</div>
    </div>
    <div className="trend-title">{title}</div>
    <div className="trend-posts">{posts} posts</div>
  </div>
);

const FollowItem = ({ id, name, handle, avatarColor, isFollowing, onFollow }) => (
  <div className="follow-item">
    <div className="avatar-placeholder" style={{ backgroundColor: avatarColor }}></div>
    <div className="user-info">
      <div className="name">{name}</div>
      <div className="handle">{handle}</div>
    </div>
    <button 
      className={`follow-btn ${isFollowing ? 'following' : ''}`}
      onClick={() => onFollow(id)}
    >
      {isFollowing ? 'Following' : 'Follow'}
    </button>
  </div>
);

function Widgets() {
  const [suggestedUsers, setSuggestedUsers] = useState([
    { id: 1, name: 'Elon Musk', handle: '@elonmusk', avatarColor: '#ff4500', isFollowing: false },
    { id: 2, name: 'X', handle: '@X', avatarColor: '#000000', isFollowing: false },
    { id: 3, name: 'Bill Gates', handle: '@BillGates', avatarColor: '#00a4ef', isFollowing: false }
  ]);

  const handleFollow = (userId) => {
    setSuggestedUsers(prev => prev.map(user => 
      user.id === userId ? { ...user, isFollowing: !user.isFollowing } : user
    ));
  };

  return (
    <div className="widgets-container">
      <div className="search-bar">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="var(--text-secondary)">
          <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"/>
        </svg>
        <input type="text" placeholder="Search" />
      </div>

      <div className="widget-card">
        <h2>Subscribe to Premium</h2>
        <p>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
        <button className="subscribe-btn">Subscribe</button>
      </div>

      <div className="widget-card" style={{ padding: '0' }}>
        <h2 style={{ padding: '16px 16px 4px 16px' }}>What's happening</h2>
        <div style={{ padding: '0 16px' }}>
          <TrendItem category="Technology" title="#ReactJS" posts="12.5K" />
          <TrendItem category="Business" title="SpaceX" posts="45.2K" />
          <TrendItem category="Entertainment" title="New Movie" posts="102K" />
          <TrendItem category="Sports" title="Grand Prix" posts="8K" />
        </div>
        <div className="show-more" onClick={() => alert('Viewing all trending posts...')} style={{ padding: '16px', borderBottomLeftRadius: '16px', borderBottomRightRadius: '16px', transition: 'background-color 0.2s' }}>
          Show more
        </div>
      </div>

      <div className="widget-card" style={{ padding: '0' }}>
        <h2 style={{ padding: '16px 16px 4px 16px' }}>Who to follow</h2>
        <div style={{ padding: '0 16px' }}>
          {suggestedUsers.map(user => (
            <FollowItem 
              key={user.id} 
              {...user} 
              onFollow={handleFollow} 
            />
          ))}
        </div>
        <div className="show-more" style={{ padding: '16px', borderBottomLeftRadius: '16px', borderBottomRightRadius: '16px' }}>
          Show more
        </div>
      </div>
    </div>
  );
}

export default Widgets;

