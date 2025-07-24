// import React from 'react';
// import { Award, Shield, Users } from 'lucide-react';

// const AboutUs = () => {
//   const teamMembers = [
//     {
//       name: "Rubén Rimondetti",
//       role: "Instructor de brigadas y trabajos en altura",
//       description: "Especialista con más de 15 años de experiencia en capacitación de brigadas de emergencia y trabajos en altura. Certificado en normativas nacionales e internacionales.",
//       image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1374&auto=format&fit=crop"
//     },
//     {
//       name: "Tomás Real",
//       role: "Licenciado en Seguridad e Higiene",
//       description: "Profesional especializado en implementación de sistemas de gestión de seguridad y salud ocupacional. Experto en evaluación de riesgos y cumplimiento normativo.",
//       image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1374&auto=format&fit=crop"
//     }
//   ];

//   const values = [
//     {
//       icon: <Shield className="h-8 w-8 text-blue-600" />,
//       title: "Compromiso con la seguridad",
//       description: "Promovemos una cultura de prevención y seguridad en todos los niveles organizacionales."
//     },
//     {
//       icon: <Award className="h-8 w-8 text-blue-600" />,
//       title: "Excelencia profesional",
//       description: "Nuestro equipo se mantiene actualizado con las últimas normativas y prácticas internacionales."
//     },
//     {
//       icon: <Users className="h-8 w-8 text-blue-600" />,
//       title: "Enfoque personalizado",
//       description: "Adaptamos nuestros servicios a las necesidades específicas de cada cliente y sector industrial."
//     }
//   ];

//   return (
//     <section id="about" className="py-16 lg:py-24 bg-white">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Sobre Nosotros</h2>
//           <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             En SIGMA, combinamos experiencia, conocimiento técnico y pasión por la seguridad para ofrecer soluciones integrales adaptadas al contexto empresarial argentino.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
//           {values.map((value, index) => (
//             <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
//               <div className="mb-4">{value.icon}</div>
//               <h3 className="text-xl font-semibold mb-2 text-gray-800">{value.title}</h3>
//               <p className="text-gray-600">{value.description}</p>
//             </div>
//           ))}
//         </div>

//         <h3 className="text-2xl font-bold text-center text-gray-800 mb-10">Nuestro Equipo</h3>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//           {teamMembers.map((member, index) => (
//             <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
//               <div className="h-64 overflow-hidden">
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-300"
//                 />
//               </div>
//               <div className="p-6">
//                 <h4 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h4>
//                 <p className="text-blue-600 font-medium mb-3">{member.role}</p>
//                 <p className="text-gray-600">{member.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;

import React from 'react';
import { Award, Shield, Users } from 'lucide-react';

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Rubén Rimondetti",
      role: "Instructor de brigadas y trabajos en altura",
      description: "Especialista con más de 15 años de experiencia en capacitación de brigadas de emergencia y trabajos en altura. Certificado en normativas nacionales e internacionales.",
    },
    {
      name: "Tomás Real",
      role: "Licenciado en Seguridad e Higiene",
      description: "Profesional especializado en implementación de sistemas de gestión de seguridad y salud ocupacional. Evaluación de riesgos y cumplimiento normativo.",
    }
  ];

  const values = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Compromiso con la seguridad",
      description: "Promovemos una cultura de prevención y seguridad en todos los niveles organizacionales."
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Excelencia profesional",
      description: "Nuestro equipo se mantiene actualizado con las últimas normativas y prácticas internacionales."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Enfoque personalizado",
      description: "Adaptamos nuestros servicios a las necesidades específicas de cada cliente y sector industrial."
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Sobre Nosotros</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            En SIGMA, combinamos experiencia, conocimiento técnico y pasión por la seguridad para ofrecer soluciones integrales adaptadas al contexto empresarial argentino.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-center text-gray-800 mb-10">Nuestro Equipo</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h4>
              <p className="text-blue-600 font-medium mb-2">{member.role}</p>
              <p className="text-gray-600">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

