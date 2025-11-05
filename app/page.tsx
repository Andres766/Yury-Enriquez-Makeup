'use client'
import React, { useState } from 'react';
import AnimatedLogo from '@/components/AnimatedLogo';
import { Phone, Instagram, Facebook, MessageCircle, Award, BookOpen, Star, Calendar } from 'lucide-react';

export default function MakeupPortfolio() {
  const [activeSection, setActiveSection] = useState('inicio');

  const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: '#', color: 'hover:text-pink-400' },
    { icon: Facebook, label: 'Facebook', href: '#', color: 'hover:text-blue-400' },
    { icon: MessageCircle, label: 'WhatsApp', href: '#', color: 'hover:text-green-400' },
  ];

  const achievements = [
    {
      icon: Award,
      title: 'Certificación Internacional',
      description: 'Makeup Artist Professional - Academia Paris 2023',
      year: '2023'
    },
    {
      icon: BookOpen,
      title: 'Curso Avanzado de Novias',
      description: 'Técnicas especializadas en maquillaje nupcial',
      year: '2022'
    },
    {
      icon: Star,
      title: 'Maquillaje Editorial',
      description: 'Curso de maquillaje para fotografía y pasarela',
      year: '2022'
    },
    {
      icon: Award,
      title: 'Técnicas de Aerografía',
      description: 'Certificación en airbrush makeup',
      year: '2021'
    }
  ];

  const services = [
    {
      title: 'Maquillaje de Novia',
      description: 'Luce radiante en el día más importante de tu vida',
      features: ['Prueba de maquillaje', 'Maquillaje del día', 'Retoques incluidos']
    },
    {
      title: 'Maquillaje Social',
      description: 'Para eventos, fiestas y ocasiones especiales',
      features: ['Eventos corporativos', 'Fiestas', 'Graduaciones']
    },
    {
      title: 'Maquillaje Editorial',
      description: 'Para sesiones fotográficas y producciones',
      features: ['Sesiones fotográficas', 'Videos', 'Catálogos']
    },
    {
      title: 'Automaquillaje',
      description: 'Aprende a maquillarte como una profesional',
      features: ['Clases personalizadas', 'Técnicas básicas', 'Tips y trucos']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--gold-50)] via-stone-50 to-[var(--gold-100)]">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <nav className="hidden md:flex gap-8">
              {['Inicio', 'Servicios', 'Logros', 'Contacto'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className={`text-sm tracking-wider transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'text-[var(--gold-700)] font-semibold'
                      : 'text-gray-700 hover:text-[var(--gold-700)]'
                  }`}
                >
                  {item.toUpperCase()}
                </button>
              ))}
            </nav>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className={`text-gray-600 transition-colors ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          {/* Animated logo prominently showcased */}
          <div className="mb-8 flex justify-center">
            <AnimatedLogo />
          </div>
          <h1 className="text-6xl md:text-7xl font-serif text-gray-800 mb-4">
            Yury Enriquez
          </h1>
          <p className="text-2xl text-[var(--gold-700)] tracking-widest mb-8 font-light">
            MAKEUP ARTIST
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-12">
            Transformando belleza en arte. Con más de 5 años de experiencia,
            creo looks únicos que resaltan tu belleza natural y personalidad.
          </p>
          <button className="bg-[var(--gold-600)] text-white px-8 py-4 rounded-full hover:bg-[var(--gold-700)] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            AGENDAR CITA
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-serif text-center text-gray-800 mb-16">
            Servicios
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2"
              >
                <h3 className="text-xl font-semibold text-[var(--gold-700)] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-sm text-gray-500 flex items-center">
                      <span className="w-1.5 h-1.5 bg-[var(--gold-500)] rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-serif text-center text-gray-800 mb-4">
            Formación & Logros
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Comprometida con la excelencia y el aprendizaje continuo
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-white to-[var(--gold-50)] p-6 rounded-lg shadow-md border border-[var(--gold-100)]"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--gold-600)] p-3 rounded-lg">
                    <achievement.icon className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-800">
                        {achievement.title}
                      </h3>
                      <span className="text-xs text-[var(--gold-600)] font-semibold">
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[var(--gold-600)] to-[var(--gold-700)]">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-serif text-white mb-6">
            ¿Lista para tu Transformación?
          </h2>
          <p className="text-[var(--gold-100)] mb-12 max-w-2xl mx-auto text-lg">
            Agenda tu cita y déjame resaltar tu belleza natural
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#"
              className="flex items-center gap-2 bg-white text-[var(--gold-700)] px-8 py-4 rounded-full hover:bg-[var(--gold-50)] transition-all shadow-lg hover:shadow-xl font-semibold"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
            <a
              href="#"
              className="flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-[var(--gold-700)] transition-all font-semibold"
            >
              <Calendar size={20} />
              Agendar Cita
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <img src="logo.jpg" alt="Yury Enriquez" className="h-20 w-auto mx-auto mb-6 opacity-80" />
          <p className="text-gray-400 mb-6">
            © 2024 Yury Enriquez Makeup Artist. Todos los derechos reservados.
          </p>
          <div className="flex justify-center gap-6">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                className="text-gray-400 hover:text-[var(--gold-400)] transition-colors"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}