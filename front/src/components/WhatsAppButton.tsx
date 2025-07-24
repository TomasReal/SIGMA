import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  // Mensaje que quieres enviar al iniciar el chat
  const mensaje = 'Hola equipo de SIGMA, mi consulta refiere a...';

  // Codificamos el mensaje para que sea válido en URL
  const mensajeEncoded = encodeURIComponent(mensaje);

  return (
    <a
      href={`https://wa.me/543584020154?text=${mensajeEncoded}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg transition-all duration-300 flex items-center justify-center"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppButton;
