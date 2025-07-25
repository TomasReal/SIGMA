import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Navegación",
      links: [
        { name: "Inicio", to: "hero" },
        { name: "Sobre Nosotros", to: "about" },
        { name: "Servicios y Capacitación", to: "services-training" },
        { name: "Contacto", to: "contact" }
      ]
    },
    {
      title: "Servicios",
      links: [
        { name: "Evaluación de Riesgos", to: "services-training" },
        { name: "Sistemas de Protección", to: "services-training" },
        { name: "Trabajos en Altura", to: "services-training" },
        { name: "Capacitación de Personal", to: "services-training" },
        { name: "Brigadas de Emergencia", to: "services-training" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Términos y Condiciones", to: "#" },
        { name: "Política de Privacidad", to: "#" },
        { name: "Cookies", to: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 rounded-md bg-blue-600 flex items-center justify-center text-white font-bold text-xl mr-2">
                <img
                  src="/logo.svg"
                  alt="Logo SIGMA"
                />
              </div>
              <span className="font-bold text-xl">SIGMA</span>
            </div>
            <p className="text-sm text-gray-400 mb-2">
              Seguridad, Ingeniería y Gestión Medioambiental Argentina
            </p>
            <p className="text-gray-400 mb-4">
              Expertos en salud ocupacional y gestión ambiental para empresas argentinas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/sigma_hysservicios" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.to}
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} SIGMA - Seguridad, Ingeniería y Gestión Medioambiental Argentina. Todos los derechos reservados.
            <br />
            <span className="text-gray-400">Email: consultassigmahys@gmail.com</span>
          </p>
          <div className="text-gray-400 text-sm">
            Diseñado con <span className="text-red-500">♥</span> en Argentina
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
