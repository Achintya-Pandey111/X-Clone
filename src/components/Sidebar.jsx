import React from 'react';

const SidebarItem = ({ label, active }) => (
  <div className={`sidebar-item ${active ? 'active' : ''}`}>
    <span className="sidebar-icon">○</span>
    <span className="sidebar-label">{label}</span>
  </div>
);

function Sidebar() {
  return (
    <div className="sidebar-content">
      <div className="logo">𝕏</div>
      <nav>
        <SidebarItem label="Home" active />
        <SidebarItem label="Explore" />
        <SidebarItem label="Notifications" />
        <SidebarItem label="Messages" />
        <SidebarItem label="Lists" />
        <SidebarItem label="Communities" />
        <SidebarItem label="Premium" />
        <SidebarItem label="Profile" />
        <SidebarItem label="More" />
      </nav>
      <button className="post-btn">Post</button>
      
      <div className="profile-mini">
        <div className="avatar-placeholder"></div>
        <div className="profile-info">
          <div className="name">User Name</div>
          <div className="handle">@username</div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
