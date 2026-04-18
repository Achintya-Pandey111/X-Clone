import React from 'react';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widgets from './components/Widgets';
import Register from './components/Register';
import { useAuth } from './AuthContext';

function App() {
  const { user } = useAuth();

  if (!user) {
    return <Register />;
  }

  return (
    <div className="app">
      <Sidebar />
      <main className="feed">
        <Feed />
      </main>
      <aside className="widgets">
        <Widgets />
      </aside>
    </div>
  );
}

export default App;
