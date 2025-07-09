import React from 'react';
import Header from './components/Header';
import HeroVideo from './components/HeroVideo';
import PriceBanner from './components/PriceBanner';
import Gallery from './components/Gallery';
import Specifications from './components/Specifications';
import StrategicLocation from './components/StrategicLocation';
import LocationMap from './components/LocationMap';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col antialiased text-gray-800">
      <Header />
      <main className="flex-grow">
        <HeroVideo videoId="cb4MczS6GAY" />
        <PriceBanner />
        <Specifications />
        <Gallery />
        <StrategicLocation />
        <LocationMap />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default App;