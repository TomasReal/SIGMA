import React, { useState } from 'react';
import { Clock, LoaderCircle, Mail, Phone } from 'lucide-react';

const API_URL = import.meta.env.VITE_API_URL;


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  }>({
    submitted: false,
    success: false,
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al enviar el mensaje');
      }

      setFormStatus({
        submitted: true,
        success: true,
        message: '¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.',
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });
    } catch (error: any) {
      setFormStatus({
        submitted: true,
        success: false,
        message: error.message || 'Ocurrió un error al enviar el mensaje.',
      });
    }

    setLoading(false);
    setTimeout(() => {
      setFormStatus({
        submitted: false,
        success: false,
        message: '',
      });
    }, 5000);
  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 text-blue-600" />,
      title: "Teléfono",
      info: "Tomás Real: +543584843317 | Rubén Rimondetti: +5493584020154"
    },
    {
      icon: <Mail className="h-5 w-5 text-blue-600" />,
      title: "Email",
      info: "consultassigmahys@gmail.com"
    },
    {
      icon: <Clock className="h-5 w-5 text-blue-600" />,
      title: "Horario",
      info: "Lunes a Viernes: 9:00 - 18:00"
    }
  ];

  return (
    <section id="contact" className="py-16 lg:py-24 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Contacto</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Estamos listos para ayudarte. Contáctanos para recibir más información sobre nuestros servicios o solicitar una cotización personalizada.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Información de Contacto</h3>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mt-1 mr-3">{item.icon}</div>
                    <div>
                      <h4 className="font-medium text-gray-800">{item.title}</h4>
                      <p className="text-gray-600">{item.info}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="font-medium text-gray-800 mb-3">Síguenos</h4>
                <div className="flex space-x-4">
                  {/* <a href="#" className="h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                    <svg className="h-5 w-5" fill="curreadasdasdntColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a> */}
                  <a href="https://www.instagram.com/sigma_hysservicios" target="_blank" rel="noopener noreferrer" className="h-10 w-10 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm4.88-.88a.88.88 0 1 1 0 1.76.88.88 0 0 1 0-1.76z" />
                    </svg>
                  </a>

                  <a href="#" className="h-10 w-10 bg-blue-700 rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Envíanos un mensaje</h3>
              <p className="text-gray-600 mb-4">
                Los mensajes serán enviados a: <span className="font-medium text-blue-600">consultassigmahys@gmail.com</span>
              </p>

              {formStatus.submitted ? (
                <div className={`p-4 rounded-md mb-6 ${formStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {formStatus.message}
                </div>
              ) : null}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>

                <div className="text-right">
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium"
                  >
                    {loading ? <LoaderCircle /> : 'Enviar mensaje'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
