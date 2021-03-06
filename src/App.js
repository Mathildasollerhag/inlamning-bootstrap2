import React from 'react';
import './App.css';
import Header from './components/header/Header';
import ShoppingSlide from './views/ShoppingSlide';
import InfoCards from './views/InfoCards';
import MasonryGrid from './views/MasonryGrid';
import NewArrivals from './views/NewArrivals';
import DiscountBanner from './views/DiscountBanner';
import FeaturedProducts from './views/FeaturedProducts';
import FlashBanner from './views/FlashBanner';
import TopSellers from './views/TopSellers';
import QuotesView from './views/QuotesView';
import LatestBlogView from './views/LatestBlogView';
import SubscribeNow from './views/SubscribeNow';
import Logos from './components/Logos';
import Footer from './components/Footer';





function App() {
  return (
    <div>
      <Header />
      <ShoppingSlide />
      <InfoCards />
      <MasonryGrid />
      <NewArrivals />
      <DiscountBanner />
      <FeaturedProducts />
      <FlashBanner />
      <TopSellers />
      <QuotesView />
      <LatestBlogView />
      <SubscribeNow />
      <Logos />
      <Footer />
    </div>
  );
}

export default App;
