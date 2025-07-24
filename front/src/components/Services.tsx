import React from 'react';
import { AlertTriangle, Book, Briefcase, ClipboardCheck, FileCheck, ShieldCheck } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <ClipboardCheck className="h-10 w-10 text-blue-600" />,
      title: "Evaluación de Riesgos",
      description: "Identificación, evaluación y control de riesgos laborales específicos para diferentes sectores industriales. Cumplimiento con normativas argentinas."
    },
    {
      icon: <AlertTriangle className="h-10 w-10 text-blue-600" />,
      title: "Planes de Emergencia",
      description: "Desarrollo e implementación de planes de emergencia y evacuación adaptados a las necesidades de cada empresa y sus instalaciones."
    },
    {
      icon: <Book className="h-10 w-10 text-blue-600" />,
      title: "Consultoría Ambiental",
      description: "Asesoramiento en gestión ambiental, evaluación de impacto ambiental y desarrollo de programas de sustentabilidad empresarial."
    },
    {
      icon: <FileCheck className="h-10 w-10 text-blue-600" />,
      title: "Auditorías de Cumplimiento",
      description: "Auditorías de cumplimiento legal en materia de seguridad, salud ocupacional y medio ambiente según normativas argentinas."
    },
    {
      icon: <Briefcase className="h-10 w-10 text-blue-600" />,
      title: "Sistemas de Gestión",
      description: "Implementación y certificación de sistemas de gestión integrados (ISO 45001, ISO 14001) adaptados al contexto empresarial argentino."
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-blue-600" />,
      title: "Prevención de Riesgos",
      description: "Desarrollo de programas preventivos específicos para diferentes sectores industriales según normativas locales."
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones integrales en seguridad y salud ocupacional, gestión ambiental y cumplimiento normativo para empresas argentinas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-600">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-600 rounded-lg p-8 text-white shadow-xl">
          <div className="md:flex items-center justify-between">
            <div className="mb-6 md:mb-0 md:w-2/3">
              <h3 className="text-2xl font-bold mb-3">¿Necesitas un servicio personalizado?</h3>
              <p className="text-blue-100">
                Contacta con nuestros expertos para una evaluación inicial sin costo y adaptada a las necesidades específicas de tu empresa.
              </p>
            </div>
            <div className="md:w-1/3 text-center">
              <a
                href="#contact"
                className="inline-block bg-white text-blue-600 font-medium px-6 py-3 rounded-md hover:bg-blue-50 transition-colors"
              >
                Solicitar asesoría
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
