import React from 'react';
import { Link } from 'react-scroll';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen bg-gray-100 flex items-center">
      <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1770&auto=format&fit=crop')",
        filter: "brightness(0.6)"
      }}></div>

      {/* Translucent Argentine flag overlay */}
      <div className="absolute inset-0 opacity-15">
        <div className="h-full w-full bg-gradient-to-b from-sky-500 via-white to-sky-500"></div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-700/60"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-5" >
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Comprometidos con la seguridad, el medio ambiente y el bienestar laboral
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100">
            Somos especialistas en consultoría y capacitación en seguridad ocupacional, gestión ambiental y normativas laborales para empresas argentinas.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-medium transition-colors cursor-pointer inline-flex items-center"
            >
              Contáctanos
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-6 py-3 rounded-md text-lg font-medium transition-colors cursor-pointer inline-flex items-center"
            >
              Conocer más
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link to="about" spy={true} smooth={true} duration={500} offset={-70} className="cursor-pointer">
          <ChevronDown size={36} className="text-white" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
