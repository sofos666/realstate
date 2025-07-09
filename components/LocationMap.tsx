import React, { useState, useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver.ts';
import { MapPinIcon } from './icons/MapPinIcon.tsx';

const LocationMap: React.FC = () => {
  const [loadMap, setLoadMap] = useState(false);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  
  const isVisible = useIntersectionObserver(mapContainerRef, {
    threshold: 0,
    rootMargin: "200px",
  });

  const handleLoadMap = () => {
    setLoadMap(true);
  };

  return (
    <section id="location-map" className="py-12 md:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
          Ubicación Exacta del Lote
        </h2>
        <div 
          ref={mapContainerRef} 
          className="h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl border-4 border-gray-200 relative bg-gray-200 transition-opacity duration-500"
          style={{ opacity: isVisible ? 1 : 0 }}
        >
          {isVisible && (
            <>
              {loadMap ? (
                <iframe
                  src="https://maps.google.com/maps?q=6.279583,-75.762056&z=17&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  title="Mapa de Ubicación del Lote en La Clara, Ebéjico"
                ></iframe>
              ) : (
                <div 
                  className="w-full h-full flex flex-col items-center justify-center cursor-pointer bg-cover bg-center transition-all duration-300"
                  style={{ backgroundImage: "url('https://i.ibb.co/zHxpJChr/captura-maps.png')" }}
                  onClick={handleLoadMap}
                  role="button"
                  tabIndex={0}
                  aria-label="Cargar mapa interactivo"
                  onKeyPress={(e) => { if (e.key === 'Enter') handleLoadMap(); }}
                >
                    <div className="bg-black bg-opacity-50 p-6 rounded-xl text-center shadow-lg transform hover:scale-105 transition-transform backdrop-blur-sm">
                        <MapPinIcon className="h-12 w-12 text-white mx-auto mb-4" />
                        <h3 className="text-white text-xl font-bold mb-2">Cargar Mapa Interactivo</h3>
                        <p className="text-gray-100">Haz clic para explorar la ubicación</p>
                    </div>
                </div>
              )}
            </>
          )}
        </div>
        <p className="text-center mt-6 text-gray-600">
          Coordenadas: 6°16'46.5"N 75°45'43.4"W. En el corazón de La Clara, Ebéjico, Antioquia.
        </p>
      </div>
    </section>
  );
};

export default LocationMap;