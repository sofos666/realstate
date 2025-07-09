import React from 'react';
import { PhoneIcon } from './icons/PhoneIcon.tsx';
import { EmailIcon } from './icons/EmailIcon.tsx';
import { WhatsappIcon } from './icons/WhatsappIcon.tsx';

const CallToAction: React.FC = () => {
  const tanya = {
    name: "Tanya López",
    phone: "+573025960770",
    phoneDisplay: "+57 302 596 0770",
    email: "tania.wasp2016@gmail.com",
    whatsappMessage: "Hola Tanya, estoy interesado/a en el lote de 15.000 m² en La Clara, Ebéjico. Me gustaría recibir más información o agendar una visita."
  };

  const cristian = {
    name: "Cristian Morales",
    phone: "+573107782146",
    phoneDisplay: "+57 310 778 2146",
    whatsappMessage: "Hola Cristian, estoy interesado/a en el lote de 15.000 m² en La Clara, Ebéjico. Me gustaría recibir más información."
  };
  
  const leon = {
    name: "Leon Velásquez",
    phone: "+573122525348",
    phoneDisplay: "+57 312 252 5348",
    whatsappMessage: "Hola Leon, estoy interesado/a en el lote de 15.000 m² en La Clara, Ebéjico. Me gustaría recibir más información."
  };

  return (
    <section id="contact" className="bg-gradient-to-br from-green-800 to-teal-900 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
            ¿Listo para Dar el Siguiente Paso?
          </h2>
          <p className="mt-4 text-xl text-green-200 max-w-3xl mx-auto">
            Contacta a nuestro equipo para resolver tus dudas o para coordinar una visita al lote. ¡Estamos para servirte!
          </p>
        </div>

        {/* Centered Contact Card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg text-white max-w-3xl mx-auto">
          
          {/* Main Contact: Tanya */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">{tanya.name}</h3>
            <p className="text-green-200 mb-1">Contacto Principal</p>
            <a href={`mailto:${tanya.email}`} className="text-green-300 hover:text-white transition-colors text-sm mb-4 inline-block">{tanya.email}</a>
            <div className="mt-2">
              <a 
                href={`https://wa.me/${tanya.phone}?text=${encodeURIComponent(tanya.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-green-500 hover:bg-green-400 font-bold rounded-lg transition-colors text-base"
                aria-label={`Contactar a ${tanya.name} por WhatsApp`}
              >
                <WhatsappIcon className="w-5 h-5 mr-3" />
                Contactar por WhatsApp
              </a>
            </div>
          </div>

          {/* Separator */}
          <hr className="my-6 border-white/20" />

          {/* Secondary Contacts */}
          <div className="flex items-stretch justify-center gap-4 text-center">
            
            {/* Cristian's Card */}
            <div className="flex-1">
              <h4 className="font-semibold text-lg">{cristian.name}</h4>
              <p className="text-sm text-green-300 mb-2">{cristian.phoneDisplay}</p>
              <a 
                href={`https://wa.me/${cristian.phone}?text=${encodeURIComponent(cristian.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 bg-white/20 hover:bg-white/30 font-bold rounded-lg text-sm transition-colors"
                aria-label={`Contactar a ${cristian.name} por WhatsApp`}
              >
                <WhatsappIcon className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </div>

            {/* Vertical Separator */}
            <div className="w-px bg-white/20"></div>

            {/* Leon's Card */}
            <div className="flex-1">
              <h4 className="font-semibold text-lg">{leon.name}</h4>
              <p className="text-sm text-green-300 mb-2">{leon.phoneDisplay}</p>
              <a 
                href={`https://wa.me/${leon.phone}?text=${encodeURIComponent(leon.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 bg-white/20 hover:bg-white/30 font-bold rounded-lg text-sm transition-colors"
                aria-label={`Contactar a ${leon.name} por WhatsApp`}
              >
                <WhatsappIcon className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;