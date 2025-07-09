import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';

interface Message {
  sender: 'user' | 'ai';
  text: string;
}

interface ChatbotProps {
  onClose: () => void;
}

// Safely access the API_KEY to prevent crashing in environments without process.env
const API_KEY = (typeof process !== 'undefined' && process.env?.API_KEY) ? process.env.API_KEY : undefined;

const Chatbot: React.FC<ChatbotProps> = ({ onClose }) => {
  const [isConfigured] = useState<boolean>(!!API_KEY);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'ai',
      text: isConfigured
        ? "¡Hola! Soy tu asistente virtual. Estoy aquí para responder tus preguntas sobre este increíble lote en La Clara. ¿En qué puedo ayudarte?"
        : "Lo siento, el asistente de IA no está configurado en este momento. Por favor, usa los números de contacto de la página para resolver tus dudas."
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading || !isConfigured) return;

    const userMessage: Message = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // The isConfigured check already ensures API_KEY is a string here
      const ai = new GoogleGenAI({ apiKey: API_KEY! });
      
      const propertyInfo = `
        - Ubicación: Corregimiento La Clara, municipio de Ebéjico, Antioquia, Colombia.
        - Área: 15,000 metros cuadrados (m²).
        - Precio: $40,000 COP por m². El precio total es $600,000,000 COP. El precio es negociable.
        - Estado Legal: Listo para escriturar, con papeles al día.
        - Topografía: Mixta, con zonas planas y pendientes suaves, ideal para construir.
        - Acceso: Carretera vehicular hasta el propio lote.
        - Servicios Públicos: Disponibilidad de agua y energía eléctrica.
        - Vistas: Espectaculares hacia el cañón del Río Cauca y las montañas circundantes.
        - Distancia: A 90 minutos de Medellín.
        - Entorno: Zona rural, segura, tranquila y próspera. Cerca de supermercados, tiendas y otros servicios en el corregimiento.
        - Potencial: Alta valorización por desarrollo agroturístico de la "Ruta del Sol y la Fruta".
        - Contactos para venta: Tanya López, Cristian Morales, Leon Velásquez. Sus números están en la sección de contacto de la página.
      `;
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [{ role: 'user', parts: [{text: input}] }],
        config: {
            systemInstruction: `Eres un asistente inmobiliario virtual, amigable y experto. Tu única tarea es responder preguntas sobre un lote específico en venta basado en la siguiente información. Sé conciso y directo. Si te preguntan algo no relacionado con el lote, amablemente indica que solo puedes dar información sobre la propiedad. No inventes información. La información del lote es: ${propertyInfo}`,
        }
      });
      
      const aiMessage: Message = { sender: 'ai', text: response.text };
      setMessages(prev => [...prev, aiMessage]);

    } catch (error) {
      console.error("Error fetching AI response:", error);
      const errorMessage: Message = { sender: 'ai', text: "Lo siento, tuve un problema para conectarme. Por favor, intenta de nuevo más tarde." };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-80 h-96 bg-white rounded-lg shadow-xl flex flex-col fixed bottom-24 right-6 sm:w-96 sm:h-[450px]">
      {/* Header */}
      <div className="bg-green-700 text-white p-3 flex justify-between items-center rounded-t-lg">
        <h3 className="font-bold">Asistente Virtual</h3>
        <button onClick={onClose} className="text-white hover:text-green-200" aria-label="Cerrar chat">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
        {messages.map((msg, index) => (
          <div key={index} className={`flex mb-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`rounded-lg px-3 py-2 max-w-xs lg:max-w-md ${msg.sender === 'user' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-800'}`}>
              <p className="text-sm">{msg.text}</p>
            </div>
          </div>
        ))}
        {isLoading && (
            <div className="flex justify-start mb-3">
                 <div className="rounded-lg px-3 py-2 bg-gray-200 text-gray-800">
                    <div className="flex items-center space-x-1">
                        <span className="w-2 h-2 bg-gray-500 rounded-full animate-pulse"></span>
                        <span className="w-2 h-2 bg-gray-500 rounded-full animate-pulse delay-75"></span>
                        <span className="w-2 h-2 bg-gray-500 rounded-full animate-pulse delay-150"></span>
                    </div>
                 </div>
            </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <div className="p-2 border-t border-gray-200">
        <form onSubmit={handleSend} className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={isConfigured ? "Escribe tu pregunta..." : "Asistente no disponible"}
            className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
            disabled={isLoading || !isConfigured}
          />
          <button type="submit" disabled={isLoading || !input.trim() || !isConfigured} className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;