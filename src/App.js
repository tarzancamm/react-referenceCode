import React from 'react'

import {Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen';
import ReferenceScreen from './screens/ReferenceScreen';
import DetailScreen from './screens/DetailScreen';
import './App.css';

function App() {
  return (
    <div className="App col-container">
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/reference" element={<ReferenceScreen />} />
        <Route path="/details/:id" element={<DetailScreen />} />
      </Routes>
    </div>
  );
}

export default App;
