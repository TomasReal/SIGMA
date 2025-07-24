import React from 'react';
import { AlertTriangle, Book, BookOpen, Briefcase, Check, ClipboardCheck, Clock, Earth, FileCheck, GlobeIcon, ShieldCheck, Star, Users } from 'lucide-react';

const ServicesAndTraining = () => {
  const services = [
    {
      icon: <ClipboardCheck className="h-10 w-10 text-blue-600" />,
      title: "Sistemas de Protección contra Incendios",
      description: "Checklists, mantenimiento, pruebas e instalación de sistemas de protección contra incendios."
    },
    {
      icon: <AlertTriangle className="h-10 w-10 text-blue-600" />,
      title: "Sistemas de Protección contra Caídas",
      description: "Mantenimiento y certificación de sistemas de protección contra caídas."
    },
    {
      icon: <Book className="h-10 w-10 text-blue-600" />,
      title: "Dispositivos de Medición",
      description: "Mantenimiento, calibración y certificación de dispositivos de medición de agentes contaminantes."
    },
    {
      icon: <FileCheck className="h-10 w-10 text-blue-600" />,
      title: "Equipos Respiratorios",
      description: "Alquiler y mantenimiento de equipos de respiración autónoma (SCBA)."
    },
    {
      icon: <Briefcase className="h-10 w-10 text-blue-600" />,
      title: "Trabajos en Altura",
      description: "Pintado industrial de tanques contra incendios, gasoductos, plantas reductoras, edificios y estructuras."
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-blue-600" />,
      title: "Torres de Comunicación",
      description: "Mantenimiento de torres de comunicación homologadas (personal certificados técnicos en accesos por cuerdas)."
    }
  ];

  const servicesSecondRow = [
    {
      icon: <ClipboardCheck className="h-10 w-10 text-blue-600" />,
      title: "Espacios Confinados",
      description: "Trabajos en espacios confinados o mantenimiento de atmósferas inestables."
    },
    {
      icon: <AlertTriangle className="h-10 w-10 text-blue-600" />,
      title: "Líneas de Vida y EPP",
      description: "Suministro e instalación de líneas de vida y equipos de protección personal."
    },
    {
      icon: <Book className="h-10 w-10 text-blue-600" />,
      title: "Evaluación de Riesgos",
      description: "Evaluación de riesgos y análisis de puestos de trabajo, procesos de producción y peligros ergonómicos."
    },
    {
      icon: <FileCheck className="h-10 w-10 text-blue-600" />,
      title: "Planes de Seguridad",
      description: "Desarrollo e implementación de planes de seguridad y asesoramiento en cumplimiento normativo."
    },
    {
      icon: <Briefcase className="h-10 w-10 text-blue-600" />,
      title: "Investigación de Accidentes",
      description: "Investigación de accidentes laborales y medidas correctivas."
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-blue-600" />,
      title: "Sistemas de Gestión",
      description: "Implementación de sistemas de gestión de seguridad y asesoramiento legal."
    },
    {
      icon: <Users className="h-10 w-10 text-blue-600" />,
      title: "Servicio de Técnicos en Planta",
      description: "Ponemos a disposición auxiliares y técnicos en Seguridad e Higiene para obras o industrias, según necesidad del cliente."
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-blue-600" />,
      title: "Guardia de Rescate y Prevención de Incendio",
      description: "Guardia técnica en paradas de planta o trabajos especiales, con personal capacitado en rescate y prevención."
    },
    {
      title: 'Estudios de Impacto Ambiental',
      description: 'Análisis y evaluación técnica del impacto ambiental de proyectos o emprendimientos.',
      icon: <Earth className="w-10 h-10 text-blue-600" />,
    }

  ];

  const trainingCourses = [
    {
      title: "Capacitación de Personal",
      description: "Formación del personal sobre prácticas de seguridad y uso adecuado de equipos de protección.",
      duration: "16 horas",
      format: "Presencial / Virtual",
      certification: "Certificado oficial SIGMA",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1500&auto=format&fit=crop"
    },
    {
      title: "Brigadas de Emergencia",
      description: "Entrenamiento de Brigadas de Emergencia (Incendios, Rescate, Primeros Auxilios, Materiales Peligrosos, Rescate Vehicular, Estructuras Colapsadas).",
      duration: "24 horas",
      format: "Presencial",
      certification: "Certificado oficial SIGMA",
      image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=1500&auto=format&fit=crop"
    },
    {
      title: "Boot Camp de Prevención",
      description: "Boot Camp y respuesta a emergencias y talleres de sistemas de trabajo en equipo y desempeño.",
      duration: "20 horas",
      format: "Presencial",
      certification: "Certificado oficial SIGMA",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1500&auto=format&fit=crop"
    }
  ];

  const benefits = [
    {
      icon: <Check className="h-6 w-6 text-green-500" />,
      text: "Instructores certificados con experiencia en campo"
    },
    {
      icon: <Check className="h-6 w-6 text-green-500" />,
      text: "Material didáctico actualizado y de calidad"
    },
    {
      icon: <Check className="h-6 w-6 text-green-500" />,
      text: "Prácticas con equipos reales y simulaciones"
    },
    {
      icon: <Check className="h-6 w-6 text-green-500" />,
      text: "Certificaciones reconocidas en el ámbito nacional"
    }
  ];

  return (
    <section id="services-training" className="py-16 lg:py-24 bg-gray-50 relative overflow-hidden">
      {/* Argentine Flag Background */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="w-full h-full bg-gradient-to-b from-sky-500 via-white to-sky-500" style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1483389127117-b6a2102724ae?q=80&w=1974&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'soft-light'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Servicios y Capacitación</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones integrales en seguridad y salud ocupacional, gestión ambiental, capacitación y cumplimiento normativo para empresas argentinas.
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

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"> */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8"> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {servicesSecondRow.map((service, index) => (
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

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-800 mb-10 text-center">Programas de Capacitación</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {trainingCourses.map((course, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-200">
                <div className="h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  {/* <div className="flex items-center mb-2">
                    <Clock className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-sm text-gray-600">{course.duration}</span>
                  </div> */}
                  {/* <div className="flex items-center mb-2">
                    <Users className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-sm text-gray-600">{course.format}</span>
                  </div> */}
                  {/* <div className="flex items-center mb-4">
                    <Star className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-sm text-gray-600">{course.certification}</span>
                  </div> */}
                  {/* <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium">
                    Solicitar información
                  </button> */}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">¿Por qué elegirnos para tu formación?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-3 mt-0.5">{benefit.icon}</div>
                  <p className="text-gray-700">{benefit.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">¿Necesitas formación a medida para tu empresa?</h4>
              <a href="#contact">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium">
                  Solicita una propuesta personalizada
                </button>
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesAndTraining;
