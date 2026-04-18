import React, { useState } from 'react';
import { useAuth } from '../AuthContext';

const SidebarItem = ({ label, active, icon }) => (
  <div className={`sidebar-item ${active ? 'active' : ''}`}>
    <span className="sidebar-icon">{icon}</span>
    <span className="sidebar-label">{label}</span>
  </div>
);

function Sidebar() {
  const { user, logout } = useAuth();
  const [showLogout, setShowLogout] = useState(false);

  const icons = {
    home: <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 9c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4zm0 6c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm0-13.304L.622 8.807l1.06 1.346L3 9.146V21c0 .553.448 1 1 1h16c.552 0 1-.447 1-1V9.147l1.318 1.005 1.06-1.347L12 1.696zM19 20H5V7.571l7-5.334 7 5.334V20z"/></svg>,
    explore: <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M11.83 2.14l-.06-.01c-1.3-.12-2.58.11-3.76.66-1.18.54-2.21 1.39-2.98 2.45-1.55 2.11-2.02 4.77-1.31 7.27l1.93-.52c-.54-1.92-.18-3.95 1.01-5.57.59-.81 1.38-1.46 2.29-1.87 1.03-.47 2.16-.59 3.25-.43l.87-1.98zM19.1 5.35c-2.42-2.42-5.71-3.52-8.99-3.03l.29 1.98c2.72-.4 5.45.51 7.45 2.51l-1.41 1.41 6.36 1.42-1.41-6.36-2.29 2.07zM12 22.25c-5.65 0-10.25-4.6-10.25-10.25 0-1.24.22-2.45.66-3.6l1.87.71c-.34.89-.53 1.83-.53 2.89 0 4.55 3.7 8.25 8.25 8.25s8.25-3.7 8.25-8.25c0-1.06-.19-2.01-.53-2.89l1.87-.71c.44 1.15.66 2.36.66 3.6 0 5.65-4.6 10.25-10.25 10.25z"/></svg>,
    notifications: <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M19.993 19.04a.997.997 0 0 1-1 1H5.006a.997.997 0 0 1-1-1v-1.71L5.88 15.46a2.97 2.97 0 0 0 .86-2.07V9a5.26 5.26 0 0 1 5.25-5.25A5.26 5.26 0 0 1 17.25 9v4.39a2.97 2.97 0 0 0 .86 2.07l1.875 1.87v1.71zM17.25 18H6.756l-.875-.875a.997.997 0 0 1-.29-.7V15.42a4.97 4.97 0 0 1 1.414-3.535L8.5 10.38V9a3.25 3.25 0 0 1 6.5 0v1.38l1.495 1.505a4.97 4.97 0 0 1 1.414 3.535v1.006a.997.997 0 0 1-.293.7L17.25 18zm-5.25 4c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2z"/></svg>,
    messages: <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 4.444 8-4.444V5.5c0-.276-.224-.5-.5-.5h-15zm15 14c.276 0 .5-.224.5-.5V10.336l-8 4.444-8-4.444V18.5c0 .276.224.5.5.5h15z"/></svg>,
    lists: <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M3 4.5c0-.28.22-.5.5-.5h17c.28 0 .5.22.5.5s-.22.5-.5.5h-17c-.28 0-.5-.22-.5-.5zm0 7c0-.28.22-.5.5-.5h17c.28 0 .5.22.5.5s-.22.5-.5.5h-17c-.28 0-.5-.22-.5-.5zm0 7c0-.28.22-.5.5-.5h17c.28 0 .5.22.5.5s-.22.5-.5.5h-17c-.28 0-.5-.22-.5-.5z"/></svg>,
    communities: <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M7.5 10c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5-3.5-1.57-3.5-3.5zm3.5-1.5c-0.83 0-1.5 0.67-1.5 1.5s0.67 1.5 1.5 1.5 1.5-0.67 1.5-1.5-0.67-1.5-1.5-1.5zm11 11.5c0 0.55-0.45 1-1 1h-14c-0.55 0-1-0.45-1-1 0-2.48 2.02-4.5 4.5-4.5h7c2.48 0 4.5 2.02 4.5 4.5zm-2.02-1c-0.24-1.42-1.47-2.5-2.98-2.5h-7c-1.51 0-2.74 1.08-2.98 2.5h12.96z"/></svg>,
    premium: <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg>,
    profile: <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 4c-1.93 0-3.5 1.57-3.5 3.5S10.07 11 12 11s3.5-1.57 3.5-3.5S13.93 4 12 4zm-5.5 3.5c0-3.04 2.46-5.5 5.5-5.5s5.5 2.46 5.5 5.5-2.46 5.5-5.5 5.5-5.5-2.46-5.5-5.5zM4 21c0-3.31 2.69-6 6-6h4c3.31 0 6 2.69 6 6 0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1zm6-4c-2.21 0-4 1.79-4 4h12c0-2.21-1.79-4-4-4h-4z"/></svg>,
    more: <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 18c4.41 0 8-3.59 8-8s-3.59-8-8-8-8 3.59-8 8 3.59 8 8 8zm-1-8c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm-4 0c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm8 0c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1z"/></svg>,
  };

  return (
    <div className="sidebar-content">
      <div className="logo">
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
        </svg>
      </div>
      <nav>
        <SidebarItem label="Home" active icon={icons.home} />
        <SidebarItem label="Explore" icon={icons.explore} />
        <SidebarItem label="Notifications" icon={icons.notifications} />
        <SidebarItem label="Messages" icon={icons.messages} />
        <SidebarItem label="Lists" icon={icons.lists} />
        <SidebarItem label="Communities" icon={icons.communities} />
        <SidebarItem label="Premium" icon={icons.premium} />
        <SidebarItem label="Profile" icon={icons.profile} />
        <SidebarItem label="More" icon={icons.more} />
      </nav>
      <button className="post-btn">Post</button>
      
      <div className="profile-mini" onClick={() => setShowLogout(!showLogout)}>
        <div className="avatar-placeholder" style={{ backgroundColor: '#1d9bf0' }}>
          {user?.name?.[0].toUpperCase()}
        </div>
        <div className="profile-info">
          <div className="name">{user?.name}</div>
          <div className="handle">@{user?.email.split('@')[0]}</div>
        </div>
        <div style={{ marginLeft: 'auto', color: 'var(--text-secondary)' }}>•••</div>
        
        {showLogout && (
          <div className="logout-popup" onClick={(e) => { e.stopPropagation(); logout(); }}>
            Log out @{user?.email.split('@')[0]}
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
