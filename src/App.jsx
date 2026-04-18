import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widgets from './components/Widgets';
import Register from './components/Register';
import Notifications from './components/Notifications';
import { useAuth } from './AuthContext';

function App() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('home');

  if (!user) {
    return <Register />;
  }

  return (
    <div className="app">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="feed">
        {activeTab === 'home' ? <Feed /> : <Notifications />}
      </main>
      <aside className="widgets">
        <Widgets />
      </aside>
    </div>
  );
}

export default App;
