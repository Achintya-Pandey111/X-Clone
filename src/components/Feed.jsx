import React from 'react';

const PostSkeleton = () => (
  <div className="post-skeleton">
    <div className="post-avatar"></div>
    <div className="post-content">
      <div className="post-header-line"></div>
      <div className="post-text-line"></div>
      <div className="post-text-line short"></div>
      <div className="post-actions">
        <div className="action"></div>
        <div className="action"></div>
        <div className="action"></div>
        <div className="action"></div>
      </div>
    </div>
  </div>
);

function Feed() {
  return (
    <div className="feed-container">
      <header className="feed-header">
        <div className="tab active">For you</div>
        <div className="tab">Following</div>
      </header>
      
      <div className="composer">
        <div className="avatar-placeholder"></div>
        <div className="composer-input">What is happening?!</div>
        <button className="post-btn-small">Post</button>
      </div>

      <div className="posts-list">
        <PostSkeleton />
        <PostSkeleton />
        <PostSkeleton />
        <PostSkeleton />
        <PostSkeleton />
      </div>
    </div>
  );
}

export default Feed;
