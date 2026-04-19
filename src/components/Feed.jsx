import React from 'react';

const Post = ({ user, handle, content, timestamp, stats }) => (
  <div className="post-skeleton" style={{ animation: 'none' }}>
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
        <div className="action-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '13px' }}>
          <span>💬</span> {stats.replies}
        </div>
        <div className="action-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '13px' }}>
          <span>🔁</span> {stats.retweets}
        </div>
        <div className="action-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '13px' }}>
          <span>❤️</span> {stats.likes}
        </div>
        <div className="action-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '13px' }}>
          <span>📊</span> {stats.views}
        </div>
      </div>
    </div>
  </div>
);

function Feed() {
  const posts = [
    {
      user: 'SpaceX',
      handle: '@SpaceX',
      content: 'Deployment of 23 Starlink satellites confirmed!',
      timestamp: '2h',
      stats: { replies: '1.2K', retweets: '4.5K', likes: '22K', views: '1.5M' }
    },
    {
      user: 'React',
      handle: '@reactjs',
      content: 'React 19 is now in stable! Check out the new features including Actions, useOptimistic, and better SEO support.',
      timestamp: '5h',
      stats: { replies: '850', retweets: '12K', likes: '45K', views: '2.1M' }
    },
    {
      user: 'Elon Musk',
      handle: '@elonmusk',
      content: 'To the moon! 🚀',
      timestamp: '8h',
      stats: { replies: '45K', retweets: '110K', likes: '890K', views: '45M' }
    }
  ];

  return (
    <div className="feed-container">
      <header className="feed-header">
        <div className="tab active">For you</div>
        <div className="tab">Following</div>
      </header>
      
      <div className="composer">
        <div className="avatar-placeholder" style={{ backgroundColor: '#1d9bf0' }}></div>
        <div className="composer-input">What is happening?!</div>
        <button className="post-btn-small">Post</button>
      </div>

      <div className="posts-list">
        {posts.map((post, index) => (
          <Post key={index} {...post} />
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
