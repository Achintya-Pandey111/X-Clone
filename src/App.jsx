import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widgets from './components/Widgets';
import Register from './components/Register';
import Notifications from './components/Notifications';
import Explore from './components/Explore';
import { useAuth } from './AuthContext';

function App() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('home');

  if (!user) {
    return <Register />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Feed />;
      case 'explore':
        return <Explore />;
      case 'notifications':
        return <Notifications />;
      default:
        return <Feed />;
    }
  };

  return (
    <div className="app">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="feed">
        {renderContent()}
      </main>
      <aside className="widgets">
        <Widgets />
      </aside>
    </div>
  );
}

export default App;
