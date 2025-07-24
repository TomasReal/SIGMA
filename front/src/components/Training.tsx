import React from 'react';
import { BookOpen, Check, Clock, Star, Users } from 'lucide-react';

const Training = () => {
  const courses = [
    {
      title: "Brigadas de Emergencia",
      description: "Formación completa para brigadas de emergencia, incluyendo primeros auxilios, evacuación y control de incendios.",
      duration: "20 horas",
      format: "Presencial / Virtual",
      certification: "Certificado oficial SIGMA",
      image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=1500&auto=format&fit=crop"
    },
    {
      title: "Trabajo en Altura",
      description: "Capacitación especializada en técnicas seguras de trabajo en altura y uso correcto de equipos de protección anti-caídas.",
      duration: "16 horas",
      format: "Presencial",
      certification: "Certificado oficial SIGMA",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1500&auto=format&fit=crop"
    },
    {
      title: "Gestión Ambiental en Industrias",
      description: "Formación en gestión de residuos industriales, normativa ambiental argentina y sistemas de gestión ISO 14001.",
      duration: "24 horas",
      format: "Presencial / Virtual",
      certification: "Certificado oficial SIGMA",
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=1500&auto=format&fit=crop"
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
    <section id="training" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Capacitación</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Formamos profesionales capacitados para implementar y mantener ambientes de trabajo seguros y cumplir con la normativa vigente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {courses.map((course, index) => (
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
                <div className="flex items-center mb-2">
                  <Clock className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-sm text-gray-600">{course.duration}</span>
                </div>
                <div className="flex items-center mb-2">
                  <Users className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-sm text-gray-600">{course.format}</span>
                </div>
                <div className="flex items-center mb-4">
                  <Star className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-sm text-gray-600">{course.certification}</span>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium">
                  Solicitar información
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 p-8 rounded-lg">
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
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium">
              Solicita una propuesta personalizada
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;
