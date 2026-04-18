import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widgets from './components/Widgets';
import Register from './components/Register';

function App() {
  const [showRegister, setShowRegister] = useState(true);

  return (
    <div className="app">
      <Sidebar />
      <main className="feed">
        <Feed />
      </main>
      <aside className="widgets">
        <Widgets />
      </aside>

      {showRegister && <Register onToggle={() => setShowRegister(false)} />}
      
      {!showRegister && (
        <button 
          className="post-btn" 
          style={{ position: 'fixed', bottom: '20px', right: '20px', width: 'auto', padding: '10px 20px' }}
          onClick={() => setShowRegister(true)}
        >
          Open Register UI
        </button>
      )}
    </div>
  );
}

export default App;
