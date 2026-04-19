import React, { useState } from 'react';
import Post from './Post';

function FollowingFeed() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: 'Elon Musk',
      handle: '@elonmusk',
      content: 'Following feed is now live! 🚀',
      timestamp: '1h',
      stats: { replies: '10K', retweets: '20K', likes: 150000, views: '10M', isLiked: false }
    },
    {
      id: 2,
      user: 'X',
      handle: '@X',
      content: 'Stay connected with the people you follow.',
      timestamp: '3h',
      stats: { replies: '500', retweets: '2K', likes: 10000, views: '1M', isLiked: true }
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

  const handleDelete = (postId) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      setPosts(prevPosts => prevPosts.filter(post => post.id !== postId));
    }
  };

  return (
    <div className="posts-list">
      {posts.length > 0 ? (
        posts.map((post) => (
          <Post key={post.id} {...post} onLike={handleLike} onDelete={handleDelete} />
        ))
      ) : (
        <div style={{ padding: '20px', textAlign: 'center', color: 'var(--text-secondary)' }}>
          You are not following anyone yet.
        </div>
      )}
    </div>
  );
}

export default FollowingFeed;
