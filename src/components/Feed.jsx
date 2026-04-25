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
      user: 'Airbnb',
      handle: '@Airbnb',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Airbnb',
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=600',
      content: 'Waking up to this view. Where would you rather be? 🏡✨',
      timestamp: '3h',
      stats: { replies: '800', retweets: '2.5K', likes: 15000, views: '800K', isLiked: false }
    },
    {
      id: 6,
      user: 'Spotify',
      handle: '@Spotify',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Spotify',
      image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=600',
      content: 'Your Wrapped might be far away, but your current anthem is just a play button away. 🎵',
      timestamp: '4h',
      stats: { replies: '1.5K', retweets: '5K', likes: 32000, views: '1.2M', isLiked: false }
    },
    {
      id: 7,
      user: 'Adobe',
      handle: '@Adobe',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Adobe',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=600',
      content: 'Master your craft with the new AI-powered tools in Photoshop. The only limit is your imagination. 🎨',
      timestamp: '6h',
      stats: { replies: '400', retweets: '1.2K', likes: 8000, views: '500K', isLiked: false }
    },
    {
      id: 8,
      user: 'National Geographic',
      handle: '@NatGeo',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NatGeo',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=600',
      content: 'A rare glimpse of the untouched wilderness. Nature never ceases to amaze. 🏔️',
      timestamp: '7h',
      stats: { replies: '2K', retweets: '10K', likes: 120000, views: '5M', isLiked: false }
    },
    {
      id: 9,
      user: 'Netflix',
      handle: '@netflix',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=netflix',
      image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=600',
      content: 'The weekend plan: Grab snacks, get cozy, and finish that series you started. 🍿',
      timestamp: '9h',
      stats: { replies: '5K', retweets: '15K', likes: 95000, views: '3M', isLiked: false }
    },
    {
      id: 10,
      user: 'Nike',
      handle: '@Nike',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nike',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600',
      content: 'Greatness is not a destination, it is a journey. Just do it. ✔️',
      timestamp: '10h',
      stats: { replies: '3K', retweets: '20K', likes: 250000, views: '10M', isLiked: false }
    },
    {
      id: 11,
      user: 'Tesla',
      handle: '@Tesla',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tesla',
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=600',
      content: 'Supercharging the future. ⚡',
      timestamp: '12h',
      stats: { replies: '8K', retweets: '12K', likes: 85000, views: '4M', isLiked: false }
    },
    {
      id: 12,
      user: 'Google',
      handle: '@Google',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Google',
      image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&q=80&w=600',
      content: 'The new Pixel 9 Pro camera captures every detail, even in the dark. 📸',
      timestamp: '14h',
      stats: { replies: '1.2K', retweets: '3K', likes: 18000, views: '1M', isLiked: false }
    },
    {
      id: 13,
      user: 'PlayStation',
      handle: '@PlayStation',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=PlayStation',
      image: 'https://images.unsplash.com/photo-1605906302474-f60dfaa5169c?auto=format&fit=crop&q=80&w=600',
      content: 'New exclusive titles are coming to PS5. Are you ready for the next level? 🎮',
      timestamp: '16h',
      stats: { replies: '6K', retweets: '18K', likes: 130000, views: '6M', isLiked: false }
    },
    {
      id: 14,
      user: 'Vogue',
      handle: '@voguemagazine',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vogue',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=600',
      content: 'Fashion is about more than just clothes; it is about identity. 👗',
      timestamp: '18h',
      stats: { replies: '500', retweets: '1.5K', likes: 12000, views: '400K', isLiked: false }
    },
    {
      id: 15,
      user: 'NASA',
      handle: '@NASA',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NASA',
      image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=600',
      content: 'Looking back at our home planet from the ISS. 🌍',
      timestamp: '20h',
      stats: { replies: '4K', retweets: '25K', likes: 300000, views: '15M', isLiked: false }
    },
    {
      id: 16,
      user: 'BMW',
      handle: '@BMW',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BMW',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=600',
      content: 'Sheer driving pleasure. 🏎️',
      timestamp: '22h',
      stats: { replies: '900', retweets: '4K', likes: 28000, views: '1.2M', isLiked: false }
    },
    {
      id: 17,
      user: 'Starbucks',
      handle: '@Starbucks',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Starbucks',
      image: 'https://images.unsplash.com/photo-1541167760496-162955ed8a9f?auto=format&fit=crop&q=80&w=600',
      content: 'The perfect companion for your morning commute. ☕',
      timestamp: '1d',
      stats: { replies: '1K', retweets: '2K', likes: 15000, views: '900K', isLiked: false }
    },
    {
      id: 18,
      user: 'Microsoft',
      handle: '@Microsoft',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Microsoft',
      image: 'https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?auto=format&fit=crop&q=80&w=600',
      content: 'Empowering every person and organization to achieve more. 💻',
      timestamp: '1d',
      stats: { replies: '600', retweets: '1.8K', likes: 10000, views: '700K', isLiked: false }
    },
    {
      id: 19,
      user: 'Amazon',
      handle: '@amazon',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=amazon',
      image: 'https://images.unsplash.com/photo-1523474253046-2cd2c78b6ad1?auto=format&fit=crop&q=80&w=600',
      content: 'Your package is out for delivery! 📦',
      timestamp: '1d',
      stats: { replies: '1.5K', retweets: '3K', likes: 22000, views: '1.5M', isLiked: false }
    },
    {
      id: 20,
      user: 'Meta',
      handle: '@Meta',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meta',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=600',
      content: 'Connecting the world through social technology. 🌐',
      timestamp: '1d',
      stats: { replies: '3K', retweets: '8K', likes: 45000, views: '3M', isLiked: false }
    },
    {
      id: 21,
      user: 'Discord',
      handle: '@discord',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=discord',
      image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&q=80&w=600',
      content: 'Your place to talk. Whether you are part of a school club, gaming group, or world-wide art community. 🎧',
      timestamp: '1d',
      stats: { replies: '2K', retweets: '5K', likes: 38000, views: '2M', isLiked: false }
    },
    {
      id: 22,
      user: 'Slack',
      handle: '@SlackHQ',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Slack',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600',
      content: 'Making work life simpler, more pleasant, and more productive. 💬',
      timestamp: '1d',
      stats: { replies: '400', retweets: '1K', likes: 5000, views: '300K', isLiked: false }
    },
    {
      id: 23,
      user: 'GitHub',
      handle: '@github',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=github',
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=600',
      content: 'Build like a team, from anywhere. 🚀',
      timestamp: '2d',
      stats: { replies: '1.1K', retweets: '4K', likes: 25000, views: '1.3M', isLiked: false }
    },
    {
      id: 24,
      user: 'Pinterest',
      handle: '@Pinterest',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Pinterest',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=600',
      content: 'Find your next DIY project or home decor inspiration. 📌',
      timestamp: '2d',
      stats: { replies: '300', retweets: '2K', likes: 12000, views: '500K', isLiked: false }
    },
    {
      id: 25,
      user: 'Zoom',
      handle: '@Zoom',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Zoom',
      image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&q=80&w=600',
      content: 'Connecting people wherever they are. Your meeting is ready. 📹',
      timestamp: '2d',
      stats: { replies: '500', retweets: '1.2K', likes: 8000, views: '400K', isLiked: false }
    },
    {
      id: 26,
      user: 'Uber',
      handle: '@Uber',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Uber',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=600',
      content: 'Where to? Your ride is around the corner. 🚗',
      timestamp: '2d',
      stats: { replies: '1K', retweets: '3K', likes: 20000, views: '1.2M', isLiked: false }
    },
    {
      id: 27,
      user: 'Shopify',
      handle: '@Shopify',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Shopify',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600',
      content: 'Starting a business has never been easier. Build your dream store today. 🛍️',
      timestamp: '3d',
      stats: { replies: '400', retweets: '1.5K', likes: 9000, views: '600K', isLiked: false }
    },
    {
      id: 28,
      user: 'Unity',
      handle: '@unity',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=unity',
      image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=600',
      content: 'Empowering creators to build the games of tomorrow. 🎮',
      timestamp: '3d',
      stats: { replies: '800', retweets: '2.5K', likes: 18000, views: '1M', isLiked: false }
    },
    {
      id: 29,
      user: 'Canva',
      handle: '@canva',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=canva',
      image: 'https://images.unsplash.com/photo-1626785774625-ddc7c8241314?auto=format&fit=crop&q=80&w=600',
      content: 'Design for everyone. Create beautiful graphics in minutes. 🎨',
      timestamp: '3d',
      stats: { replies: '600', retweets: '3K', likes: 25000, views: '1.5M', isLiked: false }
    },
    {
      id: 30,
      user: 'Figma',
      handle: '@figma',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=figma',
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=600',
      content: 'The collaborative interface design tool. Designing together, better. ✏️',
      timestamp: '3d',
      stats: { replies: '700', retweets: '4K', likes: 30000, views: '2M', isLiked: false }
    },
    {
      id: 31,
      user: 'Notion',
      handle: '@NotionHQ',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Notion',
      image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=600',
      content: 'Your wiki, docs, and projects. Together. 📝',
      timestamp: '4d',
      stats: { replies: '500', retweets: '2.5K', likes: 15000, views: '800K', isLiked: false }
    },
    {
      id: 32,
      user: 'Tesla Robotics',
      handle: '@TeslaRobotics',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Optimus',
      image: 'https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&q=80&w=600',
      content: 'Optimus is learning fast. The future of automation is here. 🤖',
      timestamp: '4d',
      stats: { replies: '9K', retweets: '15K', likes: 95000, views: '5M', isLiked: false }
    },
    {
      id: 33,
      user: 'Neuralink',
      handle: '@neuralink',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Neuralink',
      image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=600',
      content: 'Developing high-bandwidth brain-machine interfaces to connect humans and computers. 🧠',
      timestamp: '5d',
      stats: { replies: '4K', retweets: '12K', likes: 65000, views: '3M', isLiked: false }
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

