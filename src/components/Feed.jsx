import React, { useState } from 'react';
import { useAuth } from '../AuthContext';
import Post from './Post';
import FollowingFeed from './FollowingFeed';

function Feed() {
  const { user: currentUser } = useAuth();
  const [activeTab, setActiveTab] = useState('for-you');
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

  const [postText, setPostText] = useState('');

  const handlePost = (e) => {
    e.preventDefault();
    if (!postText.trim()) return;
    
    const newPost = {
      id: posts.length + 1,
      user: currentUser?.name || 'Guest',
      handle: `@${currentUser?.email?.split('@')[0] || 'guest'}`,
      content: postText,
      timestamp: 'now',
      stats: { replies: '0', retweets: '0', likes: 0, views: '0', isLiked: false }
    };
    
    setPosts([newPost, ...posts]);
    setPostText('');
  };

  const loadMorePosts = () => {
    const morePosts = [
      {
        id: posts.length + 1,
        user: 'NASA',
        handle: '@NASA',
        content: 'Hubble captures a stunning view of a distant galaxy!',
        timestamp: '10h',
        stats: { replies: '5K', retweets: '15K', likes: 85000, views: '5.2M', isLiked: false }
      },
      {
        id: posts.length + 2,
        user: 'TechCrunch',
        handle: '@TechCrunch',
        content: 'New startup raises $50M to build AI-powered coding assistants.',
        timestamp: '12h',
        stats: { replies: '200', retweets: '1.2K', likes: 5000, views: '800K', isLiked: false }
      }
    ];
    setPosts([...posts, ...morePosts]);
  };

  const handleDelete = (postId) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      setPosts(prevPosts => prevPosts.filter(post => post.id !== postId));
    }
  };

  return (
    <div className="feed-container">
      <header className="feed-header">
        <div 
          className={`tab ${activeTab === 'for-you' ? 'active' : ''}`} 
          onClick={() => setActiveTab('for-you')}
        >
          For you
        </div>
        <div 
          className={`tab ${activeTab === 'following' ? 'active' : ''}`} 
          onClick={() => setActiveTab('following')}
        >
          Following
        </div>
      </header>
      
      <form className="composer" onSubmit={handlePost}>
        <div className="avatar-placeholder" style={{ backgroundColor: '#1d9bf0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>
          {currentUser?.name?.[0].toUpperCase() || 'U'}
        </div>
        <div className="composer-input-container" style={{ flex: 1 }}>
          <textarea 
            className="composer-textarea" 
            placeholder="What is happening?!"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            style={{ 
              width: '100%', 
              background: 'transparent', 
              border: 'none', 
              color: 'var(--text-primary)', 
              fontSize: '20px', 
              outline: 'none',
              resize: 'none',
              fontFamily: 'inherit'
            }}
          />
          <div className="composer-actions" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px', borderTop: '1px solid var(--border)', paddingTop: '12px' }}>
            <div className="composer-icons" style={{ color: 'var(--accent)', display: 'flex', gap: '12px' }}>
              <span>🖼️</span> <span>📊</span> <span>😀</span> <span>📍</span>
            </div>
            <button type="submit" className="post-btn-small" disabled={!postText.trim()}>Post</button>
          </div>
        </div>
      </form>

      {activeTab === 'for-you' ? (
        <div className="posts-list">
          {posts.map((post) => (
            <Post key={post.id} {...post} onLike={handleLike} onDelete={handleDelete} />
          ))}
          
          <div className="show-more-posts" onClick={loadMorePosts} style={{ padding: '16px', textAlign: 'center', color: 'var(--accent)', cursor: 'pointer', borderBottom: '1px solid var(--border)' }}>
            Show more posts
          </div>

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
      ) : (
        <FollowingFeed />
      )}
    </div>
  );
}

export default Feed;

