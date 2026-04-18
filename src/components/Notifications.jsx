import React from 'react';

function Notifications() {
  const notifications = [
    {
      id: 1,
      type: 'like',
      user: 'John Doe',
      content: 'liked your post',
      time: '2h',
      avatar: 'J'
    },
    {
      id: 2,
      type: 'follow',
      user: 'Jane Smith',
      content: 'followed you',
      time: '5h',
      avatar: 'S'
    },
    {
      id: 3,
      type: 'repost',
      user: 'Tech News',
      content: 'reposted your post',
      time: '1d',
      avatar: 'T'
    }
  ];

  const getIcon = (type) => {
    switch (type) {
      case 'like':
        return <span style={{ color: '#f91880' }}>❤️</span>;
      case 'follow':
        return <span style={{ color: '#1d9bf0' }}>👤</span>;
      case 'repost':
        return <span style={{ color: '#00ba7c' }}>🔁</span>;
      default:
        return '🔔';
    }
  };

  return (
    <div className="notifications-container">
      <header className="feed-header">
        <h2>Notifications</h2>
        <div className="feed-tabs">
          <div className="tab active">All</div>
          <div className="tab">Verified</div>
          <div className="tab">Mentions</div>
        </div>
      </header>
      
      <div className="notifications-list">
        {notifications.map(notif => (
          <div key={notif.id} className="notification-item">
            <div className="notification-icon">
              {getIcon(notif.type)}
            </div>
            <div className="notification-content">
              <div className="avatar-placeholder small" style={{ backgroundColor: '#333', marginBottom: '8px' }}>
                {notif.avatar}
              </div>
              <div className="notification-text">
                <span className="bold">{notif.user}</span> {notif.content}
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
