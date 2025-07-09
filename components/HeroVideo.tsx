import React from 'react';

interface HeroVideoProps {
  videoId: string;
}

const HeroVideo: React.FC<HeroVideoProps> = ({ videoId }) => {
  return (
    <section id="hero-video" className="bg-gray-900 py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white">Un Vistazo desde el Cielo</h2>
            <p className="mt-2 text-lg text-gray-300">Sumérgete en la belleza del entorno con este recorrido aéreo.</p>
        </div>
        <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?rel=0`}
            title="Video Principal del Lote en Venta en La Clara, Ebéjico"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default HeroVideo;