import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-green-700 to-teal-800 text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 shadow-lg">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Tu Refugio Soñado: Lote de 15.000 m² en La Clara, Ebéjico
        </h1>
        <p className="mt-6 text-xl sm:text-2xl text-green-200 max-w-3xl mx-auto">
          Un lienzo en blanco con vistas espectaculares, aire puro y la tranquilidad que buscas, a un paso de todo lo que necesitas.
        </p>
      </div>
    </header>
  );
};

export default Header;