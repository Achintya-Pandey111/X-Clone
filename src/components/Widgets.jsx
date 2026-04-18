import React from 'react';

const TrendItem = ({ category, title, posts }) => (
  <div className="trend-item">
    <div className="trend-meta">{category} · Trending</div>
    <div className="trend-title">{title}</div>
    <div className="trend-posts">{posts} posts</div>
  </div>
);

function Widgets() {
  return (
    <div className="widgets-container">
      <div className="search-bar">
        <span>🔍</span>
        <input type="text" placeholder="Search" />
      </div>

      <div className="widget-card">
        <h2>Subscribe to Premium</h2>
        <p>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
        <button className="subscribe-btn">Subscribe</button>
      </div>

      <div className="widget-card">
        <h2>What's happening</h2>
        <TrendItem category="Technology" title="#ReactJS" posts="12.5K" />
        <TrendItem category="Business" title="SpaceX" posts="45.2K" />
        <TrendItem category="Entertainment" title="New Movie" posts="102K" />
        <TrendItem category="Sports" title="Grand Prix" posts="8K" />
        <div className="show-more">Show more</div>
      </div>

      <div className="widget-card">
        <h2>Who to follow</h2>
        <div className="follow-item">
          <div className="avatar-placeholder"></div>
          <div className="user-info">
            <div className="name">Elon Musk</div>
            <div className="handle">@elonmusk</div>
          </div>
          <button className="follow-btn">Follow</button>
        </div>
        <div className="show-more">Show more</div>
      </div>
    </div>
  );
}

export default Widgets;
