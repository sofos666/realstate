import React, { useState } from 'react';
import Header from './components/Header.tsx';
import HeroVideo from './components/HeroVideo.tsx';
import PriceBanner from './components/PriceBanner.tsx';
import Gallery from './components/Gallery.tsx';
import Specifications from './components/Specifications.tsx';
import StrategicLocation from './components/StrategicLocation.tsx';
import LocationMap from './components/LocationMap.tsx';
import CallToAction from './components/CallToAction.tsx';
import Footer from './components/Footer.tsx';
import Chatbot from './components/Chatbot.tsx';
import { ChatIcon } from './components/icons/ChatIcon.tsx';

const App: React.FC = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

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

      {/* Chatbot and Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className={`transition-all duration-300 ease-in-out ${isChatbotOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
          {isChatbotOpen && <Chatbot onClose={() => setIsChatbotOpen(false)} />}
        </div>
        <button
          onClick={() => setIsChatbotOpen(!isChatbotOpen)}
          className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-transform transform hover:scale-110"
          aria-label={isChatbotOpen ? 'Cerrar chat' : 'Abrir chat de ayuda'}
        >
          <ChatIcon className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
};

export default App;