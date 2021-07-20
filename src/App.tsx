import React from 'react';
import './App.css';

import Homepage from './components/Homepage/Homepage';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <Homepage/>
    </div>
  );
}

export default App;
