import React, { useState } from 'react';

function Notifications() {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Verified', 'Mentions'];

  const notifications = [
    {
      id: 1,
      type: 'like',
      users: [
        { name: 'John Doe', handle: 'johndoe', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100' },
        { name: 'Alice Smith', handle: 'alice', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100' },
        { name: 'Bob Johnson', handle: 'bjohnson', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100' }
      ],
      content: 'liked your post',
      postContent: 'Just launched my new project! 🚀 Check it out at link.com #coding #webdev',
      time: '2h'
    },
    {
      id: 2,
      type: 'follow',
      users: [
        { name: 'Tech News', handle: 'technews', avatar: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&q=80&w=100&h=100' }
      ],
      content: 'followed you',
      time: '5h'
    },
    {
      id: 3,
      type: 'repost',
      users: [
        { name: 'Sarah Wilson', handle: 'sarahw', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100' }
      ],
      content: 'reposted your post',
      postContent: 'The future of AI is looking bright. ✨ Exploring the new GPT-5 capabilities!',
      time: '1d'
    },
    {
      id: 4,
      type: 'mention',
      users: [
        { name: 'Mark Reed', handle: 'mreed', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100' }
      ],
      content: 'mentioned you in a post',
      postContent: 'Hey @user, check out this amazing UI update! I think you would love the new dark mode aesthetics.',
      time: '3h'
    },
    {
      id: 5,
      type: 'like',
      users: [
        { name: 'Emma Davis', handle: 'emmad', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=100&h=100' },
        { name: 'David Chen', handle: 'dchen', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=100&h=100' }
      ],
      content: 'liked your reply',
      postContent: 'That sounds like a great idea! I would love to contribute.',
      time: '6h'
    },
    {
      id: 6,
      type: 'follow',
      users: [
        { name: 'Design Daily', handle: 'designdaily', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100' }
      ],
      content: 'followed you',
      time: '12h'
    },
    {
      id: 7,
      type: 'repost',
      users: [
        { name: 'Chris Evans', handle: 'cevans', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100' }
      ],
      content: 'reposted your post',
      postContent: 'Why everyone should learn React in 2026. A comprehensive thread 🧵',
      time: '2d'
    },
    {
      id: 8,
      type: 'like',
      users: [
        { name: 'Google Devs', handle: 'googledevs', avatar: 'https://images.unsplash.com/photo-1573806119335-f0037eb43063?auto=format&fit=crop&q=80&w=100&h=100' }
      ],
      content: 'liked your post',
      postContent: 'Just integrated Gemini API into my latest app. The latency is incredible!',
      time: '4h'
    }
  ];

  const getIcon = (type) => {
    switch (type) {
      case 'like':
        return (
          <svg viewBox="0 0 24 24" width="28" height="28" fill="#f91880">
            <path d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z" />
          </svg>
        );
      case 'follow':
        return (
          <svg viewBox="0 0 24 24" width="28" height="28" fill="#1d9bf0">
            <path d="M17.863 13.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44zM12 2C9.791 2 8 3.79 8 6s1.791 4 4 4 4-1.79 4-4-1.791-4-4-4z" />
          </svg>
        );
      case 'repost':
        return (
          <svg viewBox="0 0 24 24" width="28" height="28" fill="#00ba7c">
            <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" />
          </svg>
        );
      case 'mention':
        return null; // Mentions usually just show the avatar
      default:
        return null;
    }
  };

  return (
    <div className="notifications-container">
      <header className="feed-header notifications-header">
        <div className="header-top">
          <h2>Notifications</h2>
          <div className="settings-icon">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M10.54 1.75h2.92l.61 3.01c.5.16.97.39 1.41.67l2.75-1.45 2.06 2.06-1.45 2.75c.28.44.51.91.67 1.41l3.01.61v2.92l-3.01.61c-.16.5-.39.97-.67 1.41l1.45 2.75-2.06 2.06-2.75-1.45c-.44.28-.91.51-1.41.67l-.61 3.01h-2.92l-.61-3.01c-.5-.16-.97-.39-1.41-.67l-2.75 1.45-2.06-2.06 1.45-2.75c-.28-.44-.51-.91-.67-1.41l-3.01-.61v-2.92l3.01-.61c.16-.5.39-.97.67-1.41L1.74 5.97l2.06-2.06 2.75 1.45c.44-.28.91-.51 1.41-.67l.61-3.01zM12 8.5c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5z" />
            </svg>
          </div>
        </div>
        <div className="feed-tabs">
          {tabs.map(tab => (
            <div 
              key={tab} 
              className={`tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </div>
          ))}
        </div>
      </header>
      
      <div className="notifications-list">
        {notifications.map(notif => (
          <div key={notif.id} className={`notification-item ${notif.type}`}>
            {notif.type !== 'mention' && (
              <div className="notification-icon-wrapper">
                {getIcon(notif.type)}
              </div>
            )}
            <div className="notification-main">
              <div className="notification-avatars">
                {notif.users.map((u, i) => (
                  <img key={i} src={u.avatar} alt={u.name} className="notif-avatar" />
                ))}
              </div>
              <div className="notification-body">
                <div className="notification-text">
                  <span className="bold">{notif.users.map(u => u.name).join(', ')}</span> {notif.content}
                </div>
                {notif.postContent && (
                  <div className="notification-post-preview">
                    {notif.postContent}
                  </div>
                )}
              </div>
            </div>
            <div className="notification-time">{notif.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notifications;
