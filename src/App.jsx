import React, { useRef } from 'react';
import Home from './pages/Home';
import './css/App.css';
import { useScrollPositionRelativeTo } from './components/ScrollPos';


function App() {
    const cardRef = useRef(null);
    const scrollY = useScrollPositionRelativeTo(cardRef);

    console.log('sroll ', scrollY);
  return (
    <div ref={cardRef} className={`app ${scrollY > 100 ? 'scrolled' : ''}`}>
      <Home />
    </div>
  );
}

export default App;
