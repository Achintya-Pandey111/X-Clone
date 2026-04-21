import React, { useState } from 'react';

const TrendingItem = ({ category, title, posts, image }) => (
  <div className="explore-trend-item">
    <div className="trend-content">
      <div className="trend-meta">
        <span>{category} · Trending</span>
        <span className="more-icon">•••</span>
      </div>
      <div className="trend-title">{title}</div>
      <div className="trend-posts">{posts} Posts</div>
    </div>
    {image && (
      <div className="trend-image">
        <img src={image} alt={title} />
      </div>
    )}
  </div>
);

function Explore() {
  const [activeTab, setActiveTab] = useState('For you');

  const tabs = ['For you', 'Trending', 'News', 'Sports', 'Entertainment'];

  const trendingData = {
    'For you': [
      { category: 'Technology', title: 'React 19', posts: '125K' },
      { category: 'Business', title: '#StockMarket', posts: '85.4K' },
      { category: 'Sports', title: 'Champions League', posts: '240K', image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=150&h=150' },
      { category: 'Politics', title: 'Global Summit 2026', posts: '56.2K' },
      { category: 'Entertainment', title: 'Dune: Part Three', posts: '110K', image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=150&h=150' }
    ],
    'Trending': [
      { category: 'Gaming', title: 'GTA VI Trailer', posts: '1.2M' },
      { category: 'Music', title: 'New Album Release', posts: '45K' },
      { category: 'World', title: '#FutureTech', posts: '92K' },
      { category: 'Health', title: 'New Fitness Trends', posts: '30K' }
    ],
    'News': [
      { category: 'Politics', title: 'Election Results 2026', posts: '2.5M' },
      { category: 'World', title: 'Peace Treaty Signed', posts: '400K', image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=150&h=150' },
      { category: 'Climate', title: 'Global Warming Report', posts: '150K' },
      { category: 'Technology', title: 'AI Ethics Summit', posts: '80K' }
    ],
    'Sports': [
      { category: 'Football', title: 'World Cup Qualifiers', posts: '1.1M', image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=150&h=150' },
      { category: 'Basketball', title: 'NBA Finals Update', posts: '500K' },
      { category: 'Tennis', title: 'Grand Slam Results', posts: '200K' },
      { category: 'Cricket', title: 'T20 Series Final', posts: '350K' }
    ],
    'Entertainment': [
      { category: 'Movies', title: 'Oscars 2026 Nominations', posts: '600K', image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=150&h=150' },
      { category: 'Music', title: 'Grammy Awards Live', posts: '450K' },
      { category: 'Celebrity', title: 'Exclusive Interview', posts: '120K' },
      { category: 'Fashion', title: 'Paris Fashion Week', posts: '95K' }
    ]
  };

  const renderContent = () => {
    const currentData = trendingData[activeTab] || [];
    
    return (
      <>
        {activeTab === 'For you' && (
          <div className="explore-hero">
            <div className="hero-content">
              <div className="hero-label">SpaceX · Live</div>
              <div className="hero-title">Starship Flight 5: Integrated Flight Test</div>
            </div>
            <img src="https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=600&h=300" alt="SpaceX" className="hero-img" />
          </div>
        )}

        <div className="explore-trends">
          <h2 className="trends-title">{activeTab === 'For you' ? 'Trends for you' : `${activeTab} Trends`}</h2>
          {currentData.map((item, index) => (
            <TrendingItem key={`${activeTab}-${index}`} {...item} />
          ))}
          <div className="show-more-trends">Show more</div>
        </div>
      </>
    );
  };

  return (
    <div className="explore-container">
      <div className="explore-header">
        <div className="explore-search-wrapper">
          <div className="search-bar">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="var(--text-secondary)">
              <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z" />
            </svg>
            <input type="text" placeholder="Search" />
          </div>
          <div className="settings-icon">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M10.54 1.75h2.92l.61 3.01c.5.16.97.39 1.41.67l2.75-1.45 2.06 2.06-1.45 2.75c.28.44.51.91.67 1.41l3.01.61v2.92l-3.01.61c-.16.5-.39.97-.67 1.41l1.45 2.75-2.06 2.06-2.75-1.45c-.44.28-.91.51-1.41.67l-.61 3.01h-2.92l-.61-3.01c-.5-.16-.97-.39-1.41-.67l-2.75 1.45-2.06-2.06 1.45-2.75c-.28-.44-.51-.91-.67-1.41l-3.01-.61v-2.92l3.01-.61c.16-.5.39-.97.67-1.41L1.74 5.97l2.06-2.06 2.75 1.45c.44-.28.91-.51 1.41-.67l.61-3.01zM12 8.5c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5z" />
            </svg>
          </div>
        </div>
        <div className="explore-tabs">
          {tabs.map(tab => (
            <div 
              key={tab} 
              className={`explore-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </div>
          ))}
        </div>
      </div>

      {renderContent()}
    </div>
  );
}

export default Explore;
