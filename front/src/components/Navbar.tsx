import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Sobre Nosotros', to: 'about' },
    { name: 'Servicios y Capacitación', to: 'services-training' },
    { name: 'Contacto', to: 'contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled
        ? 'bg-blue-700 shadow-md py-2'
        : 'bg-transparent py-4'
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* <div className="flex flex-col">
            <Link to="hero" smooth={true} duration={500} className="cursor-pointer">
              <div className="flex items-center">

                <span className="ml-2 font-bold text-2xl text-white">
                  <img src="/logo.svg" alt="Logo SIGMA" className="h-14 w-14 transition-transform duration-500 ease-in-out hover:scale-150" />
                </span>
              </div>
            </Link>
            <span className="text-white text-sm ml-14 -md-1">Seguridad, Ingeniería y Gestión Medioambiental Argentina</span>
          </div> */}
          <div className="flex items-center space-x-4">
            <Link to="hero" smooth={true} duration={500} className="cursor-pointer">
              <img
                src="/logo.svg"
                alt="Logo SIGMA"
                className="h-20 w-auto rounded-xl transition-transform duration-500 ease-in-out hover:scale-125"
              />
            </Link>
            <span className="text-white text-base sm:text-lg lg:text-xl font-medium">
              Seguridad, Ingeniería y Gestión Medioambiental Argentina
            </span>
          </div>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer text-base font-medium text-white hover:text-blue-200 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              className="bg-white text-blue-700 px-5 py-2 rounded-md text-base font-medium hover:bg-blue-100 transition-colors cursor-pointer"
            >
              Contáctanos
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 shadow-lg py-2">
          <div className="container mx-auto px-4">
            <div className="flex flex-col space-y-3 py-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="text-white text-base font-medium hover:text-blue-200 transition-colors cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className="bg-white text-blue-700 px-4 py-2 rounded-md text-base font-medium hover:bg-blue-100 transition-colors text-center cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Contáctanos
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
