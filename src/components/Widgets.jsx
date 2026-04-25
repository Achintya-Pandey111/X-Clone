import React, { useState, useEffect } from 'react';
import { famousPersonalities } from '../data/famousPersonalities';

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

const FollowItem = ({ id, name, handle, avatar, avatarColor, isFollowing, onFollow }) => (
  <div className="follow-item">
    <div className="avatar-placeholder" style={{ backgroundColor: avatar ? 'transparent' : avatarColor, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {avatar ? (
        <img src={avatar} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      ) : (
        <span style={{ color: 'white', fontWeight: 'bold' }}>{name[0]}</span>
      )}
    </div>
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
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestedUsers, setSuggestedUsers] = useState([]);
  const [visibleUsersCount, setVisibleUsersCount] = useState(3);

  useEffect(() => {
    // Convert personalities to the format used in the UI and shuffle them once
    const shuffled = [...famousPersonalities].sort(() => 0.5 - Math.random());
    const formattedUsers = shuffled.map((p, index) => ({
      id: index + 1,
      name: p.name,
      handle: p.handle,
      bio: p.bio,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${p.name}`,
      avatarColor: `hsl(${Math.random() * 360}, 70%, 50%)`,
      isFollowing: false
    }));
    setSuggestedUsers(formattedUsers);
  }, []);

  const handleFollow = (userId) => {
    setSuggestedUsers(prev => prev.map(user => 
      user.id === userId ? { ...user, isFollowing: !user.isFollowing } : user
    ));
  };

  const filteredUsers = suggestedUsers.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    user.handle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="widgets-container">
      <div className="search-bar">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="var(--text-secondary)">
          <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"/>
        </svg>
        <input 
          type="text" 
          placeholder="Search accounts" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
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
        <h2 style={{ padding: '16px 16px 4px 16px' }}>
          {searchQuery ? 'Search results' : 'Who to follow'}
        </h2>
        <div>
          {filteredUsers.length > 0 ? (
            (searchQuery 
              ? filteredUsers.slice(0, 10) 
              : suggestedUsers.slice(0, visibleUsersCount)
            ).map(user => (
              <FollowItem 
                key={user.id} 
                {...user} 
                onFollow={handleFollow} 
              />
            ))
          ) : (
            <div style={{ padding: '16px', color: 'var(--text-secondary)', textAlign: 'center' }}>
              No results for "{searchQuery}"
            </div>
          )}
        </div>
        {!searchQuery && visibleUsersCount < suggestedUsers.length && (
          <div 
            className="show-more" 
            onClick={() => setVisibleUsersCount(prev => prev + 5)}
            style={{ padding: '16px', borderBottomLeftRadius: '16px', borderBottomRightRadius: '16px', cursor: 'pointer' }}
          >
            Show more
          </div>
        )}
      </div>
    </div>
  );
}

export default Widgets;

