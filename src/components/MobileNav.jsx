import React from 'react';

function MobileNav({ activeTab, setActiveTab }) {
  return (
    <div className="mobile-nav">
      <div 
        className={`mobile-nav-item ${activeTab === 'home' ? 'active' : ''}`} 
        onClick={() => setActiveTab('home')}
      >
        <span>🏠</span>
      </div>
      <div 
        className={`mobile-nav-item ${activeTab === 'explore' ? 'active' : ''}`} 
        onClick={() => setActiveTab('explore')}
      >
        <span>🔍</span>
      </div>
      <div 
        className={`mobile-nav-item ${activeTab === 'notifications' ? 'active' : ''}`} 
        onClick={() => setActiveTab('notifications')}
      >
        <span>🔔</span>
      </div>
      <div className="mobile-nav-item">
        <span>✉️</span>
      </div>
    </div>
  );
}

export default MobileNav;
