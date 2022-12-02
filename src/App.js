import React from 'react'

import Header from './components/Header'
import StateComponent from './components/StateComponent';
import EffectComponent from './components/EffectComponent';
import './App.css';

function App() {
  return (
    <div className="App col-container">
      <Header />
      <StateComponent />
      <EffectComponent />
    </div>
  );
}

export default App;
