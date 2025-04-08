import React from 'react';
import Navbar from './Navbar';
import Body from './Body';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <MainContent />
    </div>
  );
}

export default App;
