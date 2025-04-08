import React from 'react';
import Navbar from './Navbar';
import Body from './Body';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <h1>¡Hola, mundo!</h1>
      <Body cardTitle={'Showcases'} />
    </div>
  );
}

export default App;
