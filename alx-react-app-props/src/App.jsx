// src/App.jsx
import React from 'react';
import Counter from './components/Counter';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserContext from './UserContext';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <UserContext.Provider value={{ name: 'Nelly', age: 23 }}>
      <div>
        <Counter />
        <MainContent />
        <UserProfile />
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
