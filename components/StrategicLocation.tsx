import React from 'react';
import { MapPinIcon } from './icons/MapPinIcon';

interface BenefitItemProps {
  children: React.ReactNode;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ children }) => (
  <li className="flex items-start">
    <span className="flex-shrink-0 w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center mr-3 mt-1">
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
    </span>
    <span className="text-gray-700">{children}</span>
  </li>
);

const StrategicLocation: React.FC = () => {
  return (
    <section id="strategic-location" className="py-12 md:py-20 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
           <MapPinIcon className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-green-800">
            Un Oasis de Paz con Conectividad Estratégica
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto text-lg text-gray-700 space-y-6">
          <p>
            La Clara, en Ebéjico, es la combinación perfecta entre la <strong className="text-green-700">serenidad del campo y la comodidad</strong> de tener todo cerca. Es un corregimiento próspero y seguro, ideal para quienes buscan desconectarse del ruido de la ciudad sin sacrificar el acceso a servicios esenciales.
          </p>
          <ul className="space-y-4 mt-6">
            <BenefitItem>A solo <strong className="text-green-700">90 minutos de Medellín</strong>, un escape perfecto para fines de semana o para vivir permanentemente.</BenefitItem>
            <BenefitItem>Ubicación central en el corregimiento, a pasos de <strong className="text-green-700">supermercados, tiendas, sucursal Bancolombia</strong> y locales de insumos agrícolas.</BenefitItem>
            <BenefitItem>Entorno <strong className="text-green-700">seguro y tranquilo</strong>, con una comunidad acogedora y escuelas rurales cercanas.</BenefitItem>
            <BenefitItem>Clima de montaña agradable durante todo el año, ideal para <strong className="text-green-700">cultivos y descanso</strong>.</BenefitItem>
            <BenefitItem>Potencial de alta valorización por el desarrollo agroturístico de la <strong className="text-green-700">«Ruta del Sol y la Fruta»</strong> en el Occidente antioqueño.</BenefitItem>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default StrategicLocation;