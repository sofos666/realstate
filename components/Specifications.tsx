import React, { useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { LandAreaIcon } from './icons/LandAreaIcon';
import { DeedIcon } from './icons/DeedIcon';
import { TopographyIcon } from './icons/TopographyIcon';
import { AccessIcon } from './icons/AccessIcon';
import { ServicesIcon } from './icons/ServicesIcon';
import { ViewIcon } from './icons/ViewIcon';

interface SpecCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SpecCard: React.FC<SpecCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center h-full">
    <div className="text-green-600 mb-2">{icon}</div>
    <h3 className="text-base font-semibold text-gray-700 mb-1 flex-grow">{title}</h3>
    <p className="text-xl font-bold text-green-800">{description}</p>
  </div>
);

const Specifications: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.2 });
  
  const specs = [
    { icon: <LandAreaIcon className="w-10 h-10" />, title: 'Área Total', description: '15.000 m²' },
    { icon: <DeedIcon className="w-10 h-10" />, title: 'Estado Legal', description: 'Listo para escriturar' },
    { icon: <TopographyIcon className="w-10 h-10" />, title: 'Topografía Mixta', description: 'Zonas planas y suaves' },
    { icon: <AccessIcon className="w-10 h-10" />, title: 'Acceso Fácil', description: 'Carretera al lote' },
    { icon: <ServicesIcon className="w-10 h-10" />, title: 'Servicios Públicos', description: 'Agua y energía' },
    { icon: <ViewIcon className="w-10 h-10" />, title: 'Vistas Increíbles', description: 'Río Cauca y montañas' },
  ];

  return (
    <section ref={sectionRef} id="specifications" className="py-12 md:py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl font-bold text-center text-green-800 mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
          Características que Inspiran
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {specs.map((spec, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <SpecCard icon={spec.icon} title={spec.title} description={spec.description} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specifications;