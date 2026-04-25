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
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SpaceX',
      image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=600',
      content: 'Deployment of 23 Starlink satellites confirmed!',
      timestamp: '2h',
      stats: { replies: '1.2K', retweets: '4.5K', likes: 22000, views: '1.5M', isLiked: false }
    },
    {
      id: 2,
      user: 'React',
      handle: '@reactjs',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=reactjs',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=600',
      content: 'React 19 is now in stable! Check out the new features including Actions, useOptimistic, and better SEO support.',
      timestamp: '5h',
      stats: { replies: '850', retweets: '12K', likes: 45000, views: '2.1M', isLiked: true }
    },
    {
      id: 3,
      user: 'Elon Musk',
      handle: '@elonmusk',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=elonmusk',
      image: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=600',
      content: 'To the moon! 🚀',
      timestamp: '8h',
      stats: { replies: '45K', retweets: '110K', likes: 890000, views: '45M', isLiked: false }
    },
    {
      id: 4,
      user: 'OpenAI',
      handle: '@OpenAI',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=OpenAI',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600',
      content: 'Introducing Sora – our model that can create realistic and imaginative scenes from text instructions.',
      timestamp: '1h',
      stats: { replies: '5.6K', retweets: '22K', likes: 98000, views: '12M', isLiked: false }
    },
    {
      id: 5,
      user: 'Microsoft',
      handle: '@Microsoft',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Microsoft',
      image: 'https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?auto=format&fit=crop&q=80&w=600',
      content: 'Building the future of AI with Azure. Every company is now an AI company.',
      timestamp: '3h',
      stats: { replies: '1.1K', retweets: '3.4K', likes: 15000, views: '900K', isLiked: false }
    },
    {
      id: 6,
      user: 'Vercel',
      handle: '@vercel',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=vercel',
      image: 'https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?auto=format&fit=crop&q=80&w=600',
      content: 'The web is faster than ever. Next.js 15 is here with partial prerendering and more.',
      timestamp: '4h',
      stats: { replies: '400', retweets: '2.1K', likes: 12000, views: '500K', isLiked: false }
    },
    {
      id: 7,
      user: 'GitHub',
      handle: '@github',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=github',
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=600',
      content: 'GitHub Copilot Workspace is now in technical preview! Build features from a natural language prompt.',
      timestamp: '6h',
      stats: { replies: '900', retweets: '5.6K', likes: 28000, views: '1.2M', isLiked: false }
    },
    {
      id: 8,
      user: 'Meta',
      handle: '@Meta',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meta',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=600',
      content: 'Llama 3 is our most capable open source model yet. Available now on Meta AI.',
      timestamp: '7h',
      stats: { replies: '2.3K', retweets: '8.9K', likes: 42000, views: '3.5M', isLiked: false }
    },
    {
      id: 9,
      user: 'Netflix',
      handle: '@netflix',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=netflix',
      image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&q=80&w=600',
      content: 'Grab your popcorn! The new season of your favorite show is streaming now.',
      timestamp: '9h',
      stats: { replies: '15K', retweets: '30K', likes: 150000, views: '10M', isLiked: false }
    },
    {
      id: 10,
      user: 'Amazon',
      handle: '@amazon',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=amazon',
      image: 'https://images.unsplash.com/photo-1523474253046-2cd2c78b6ad1?auto=format&fit=crop&q=80&w=600',
      content: 'Prime Day deals are live! Save big on thousands of items across all categories.',
      timestamp: '11h',
      stats: { replies: '3K', retweets: '1.5K', likes: 8000, views: '2M', isLiked: false }
    },
    {
      id: 11,
      user: 'Tesla',
      handle: '@Tesla',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tesla',
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=600',
      content: 'FSD Beta v12 is rolling out to more users. Experience the future of driving.',
      timestamp: '13h',
      stats: { replies: '12K', retweets: '25K', likes: 110000, views: '8M', isLiked: false }
    },
    {
      id: 12,
      user: 'Android',
      handle: '@Android',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Android',
      image: 'https://images.unsplash.com/photo-1607252850571-3642738a0f26?auto=format&fit=crop&q=80&w=600',
      content: 'Android 15 is all about privacy and performance. Coming soon to a device near you.',
      timestamp: '15h',
      stats: { replies: '2K', retweets: '4K', likes: 18000, views: '1.1M', isLiked: false }
    },
    {
      id: 13,
      user: 'Disney',
      handle: '@Disney',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Disney',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=600',
      content: 'Celebrate the magic with our latest animated feature, now in theaters!',
      timestamp: '18h',
      stats: { replies: '4K', retweets: '10K', likes: 75000, views: '4M', isLiked: false }
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
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePost = (e) => {
    e.preventDefault();
    if (!postText.trim() && !selectedImage) return;
    
    const newPost = {
      id: Date.now(), // Use timestamp for unique ID
      user: currentUser?.name || 'Guest',
      handle: `@${currentUser?.email?.split('@')[0] || 'guest'}`,
      avatar: currentUser?.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${currentUser?.name || 'Guest'}`,
      content: postText,
      image: selectedImage,
      timestamp: 'now',
      isUserPost: true,
      stats: { replies: '0', retweets: '0', likes: 0, views: '0', isLiked: false }
    };
    
    setPosts([newPost, ...posts]);
    setPostText('');
    setSelectedImage(null);
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
        <div className="avatar-placeholder" style={{ backgroundColor: '#1d9bf0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', overflow: 'hidden' }}>
          {currentUser?.avatar ? (
            <img src={currentUser.avatar} alt={currentUser.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            currentUser?.name?.[0].toUpperCase() || 'U'
          )}
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
              fontFamily: 'inherit',
              minHeight: '50px'
            }}
          />
          
          {selectedImage && (
            <div style={{ position: 'relative', marginTop: '12px', borderRadius: '16px', overflow: 'hidden' }}>
              <img src={selectedImage} alt="preview" style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }} />
              <button 
                type="button"
                onClick={() => setSelectedImage(null)}
                style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                  background: 'rgba(0,0,0,0.7)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  width: '30px',
                  height: '30px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px'
                }}
              >
                ✕
              </button>
            </div>
          )}

          <div className="composer-actions" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px', borderTop: '1px solid var(--border)', paddingTop: '12px' }}>
            <div className="composer-icons" style={{ color: 'var(--accent)', display: 'flex', gap: '12px' }}>
              <label style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                <input type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} />
                <span title="Media">🖼️</span>
              </label>
              <span title="Poll">📊</span> 
              <span title="Emoji">😀</span> 
              <span title="Location">📍</span>
            </div>
            <button type="submit" className="post-btn-small" disabled={!postText.trim() && !selectedImage}>Post</button>
          </div>
        </div>
      </form>

      {activeTab === 'for-you' ? (
        <div className="posts-list">
          {posts.map((post) => (
            <Post 
              key={post.id} 
              {...post} 
              onLike={handleLike} 
              onDelete={post.isUserPost ? handleDelete : null} 
            />
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

