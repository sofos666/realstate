import React from 'react';

const PriceBanner: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 py-6 shadow-lg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-4xl font-extrabold text-white shadow-text animate-pulse">
          ¡OPORTUNIDAD ÚNICA! $40.000 COP por m² ¡NEGOCIABLE!
        </h2>
        <p className="mt-2 text-white font-medium text-opacity-90">
          Precio increíble y abierto a negociación. ¡Haz tu oferta!
        </p>
      </div>
      <style>{`
        .shadow-text {
          text-shadow: 2px 2px 4px rgba(0,0,0,0.4);
        }
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
        .animate-pulse {
            animation: pulse 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default PriceBanner;