import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-900 text-green-200 py-8 px-4 sm:px-6 lg:px-8 text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Venta Lote La Clara. Todos los derechos reservados.
      </p>
      <p className="text-xs mt-2">
        La Clara, Ebéjico, Antioquia, Colombia.
      </p>
    </footer>
  );
};

export default Footer;