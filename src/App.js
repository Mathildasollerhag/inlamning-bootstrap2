import React from 'react';
import './App.css';
import Header from './components/header/Header';
import ShoppingSlide from './views/ShoppingSlide';
import InfoCards from './views/InfoCards';
import MasonryGrid from './views/MasonryGrid';

function App() {
  return (
    <div>
      <Header />
      <ShoppingSlide />
      <InfoCards />
      <MasonryGrid />
    </div>
  );
}

export default App;
