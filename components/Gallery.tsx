import React, { useRef } from 'react';
import PanoramaViewer from './PanoramaViewer';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Gallery: React.FC = () => {
  const images = [
    { src: 'https://i.ibb.co/39xKp2tv/DJI-0443-min.jpg', alt: 'Vista panorámica del lote y las montañas' },
    { src: 'https://i.ibb.co/QFrmtTsy/DJI-0442-min.jpg', alt: 'Perspectiva del lote mostrando su amplitud' },
    { src: 'https://i.ibb.co/v42XwqLM/DJI-0440-min.jpg', alt: 'Detalle de la vegetación y el entorno natural' },
    { src: 'https://i.ibb.co/N6KxYG3v/captura-cauca.png', alt: 'Impresionante vista hacia el cañón del Río Cauca' },
  ];

  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderVisible = useIntersectionObserver(headerRef, { threshold: 0.5 });

  const mainImageRef = useRef<HTMLElement>(null);
  const isMainImageVisible = useIntersectionObserver(mainImageRef, { threshold: 0.2 });

  const immersiveRef = useRef<HTMLDivElement>(null);
  const isImmersiveVisible = useIntersectionObserver(immersiveRef, { threshold: 0.2 });

  const secondaryContentRef = useRef<HTMLDivElement>(null);
  const isSecondaryContentVisible = useIntersectionObserver(secondaryContentRef, { threshold: 0.1 });

  return (
    <section id="gallery" className="bg-gray-100 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-20">
        <div ref={headerRef} className={`text-center mb-12 transition-all duration-700 ${isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
            <h2 className="text-3xl font-bold text-green-800">
                Visualiza Tu Futuro Hogar
            </h2>
            <p className="mt-4 text-lg text-gray-600">Explora cada rincón y enamórate del paisaje.</p>
        </div>

        {/* Main Aerial Image */}
        <figure 
          ref={mainImageRef}
          className={`mb-12 md:mb-16 transition-all duration-1000 ease-out ${isMainImageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
        >
          <img 
            src="https://i.ibb.co/DfBXymtF/aerea-lote-aristobulo-1-min.png" 
            alt="Vista aérea principal del lote de 15.000 m²" 
            className="w-full h-auto rounded-xl shadow-2xl object-cover" 
          />
          <figcaption className="mt-4 text-center text-gray-600 italic">Vista aérea completa del lote, ideal para planificar la construcción.</figcaption>
        </figure>
      </div>

      {/* Immersive 360 Section */}
      <div ref={immersiveRef} className={`py-16 md:py-20 bg-white my-12 md:my-16 transition-all duration-1000 ${isImmersiveVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl font-bold text-green-800 mb-4">Visión Inmersiva 360°</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Siéntete como si ya estuvieras allí. Usa el ratón sobre la imagen o desliza en tu móvil para explorar el lote desde su interior.</p>
            <PanoramaViewer src="https://i.ibb.co/7ty7VFZn/DJI-0445.jpg" />
          </div>
      </div>
      
      {/* Additional Content Section */}
      <div ref={secondaryContentRef} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-20">
        <h3 className={`text-2xl font-bold text-center text-green-800 mb-12 transition-all duration-700 ${isSecondaryContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>Más Perspectivas de Tu Futuro Paraíso</h3>
        {/* Additional Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-20">
          {images.map((image, index) => (
            <figure 
              key={index} 
              className={`rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-500 group ${isSecondaryContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <img src={image.src} alt={image.alt} className="w-full h-full object-cover aspect-video" />
              <figcaption className="p-4 bg-white text-sm text-gray-700 transition-colors group-hover:text-green-800">{image.alt}</figcaption>
            </figure>
          ))}
        </div>
        
        {/* Secondary Video */}
        <div className={`text-center transition-all duration-700 ${isSecondaryContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '600ms' }}>
            <h3 className="text-2xl font-bold text-green-800 mb-6">Recorrido Adicional en Video</h3>
            <div className="aspect-video rounded-lg overflow-hidden shadow-xl max-w-4xl mx-auto">
                <iframe 
                    src="https://www.youtube.com/embed/Uc7BTKLpQio?rel=0" 
                    title="Recorrido adicional del lote en La Clara, Ebéjico" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-full"
                    loading="lazy"
                ></iframe>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;