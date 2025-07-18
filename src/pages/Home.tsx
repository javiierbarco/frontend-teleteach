import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Users, Award, Heart, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

const features = [
  {
    icon: Monitor,
    title: 'Videoconferencias Profesionales',
    description: 'Aprende a dominar Zoom, Google Meet y Discord para crear experiencias educativas excepcionales.'
  },
  {
    icon: Users,
    title: 'Comunidad Educativa',
    description: 'Conecta con otros docentes y comparte experiencias en nuestra plataforma colaborativa.'
  },
  {
    icon: Award,
    title: 'Certificación Incluida',
    description: 'Obtén certificados que validen tus nuevas habilidades en tecnología educativa.'
  },
  {
    icon: Heart,
    title: 'Plataforma Solidaria',
    description: 'Apoya el desarrollo de la educación digital con donaciones voluntarias.'
  }
];

const stats = [
  { number: '500+', label: 'Docentes Capacitados' },
  { number: '50+', label: 'Horas de Contenido' },
  { number: '3', label: 'Plataformas Cubiertas' },
  { number: '95%', label: 'Satisfacción' }
];

export const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-800 to-primary-600 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Domina las
              <span className="text-accent-500"> Videoconferencias</span>
              <br />en Educación
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Capacítate en Zoom, Google Meet y Discord para crear experiencias educativas 
              digitales excepcionales. Aprende de forma práctica y obtén certificación.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Comenzar Gratis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/courses">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-primary-800">
                  Ver Cursos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-800 mb-4">
              ¿Por qué elegir TeleTeach?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ofrecemos una experiencia de aprendizaje completa diseñada específicamente 
              para educadores que quieren destacar en el mundo digital.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center" hover>
                  <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary-800" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Course Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-800 mb-4">
              Nuestros Cursos
            </h2>
            <p className="text-xl text-gray-600">
              Programas estructurados para dominar cada plataforma
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Zoom Course */}
            <Card hover className="group">
              <img 
                src="https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Zoom Course"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="flex items-center space-x-2 mb-2">
                <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">
                  Zoom
                </div>
                <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                  Básico
                </div>
              </div>
              <h3 className="text-lg font-semibold text-primary-800 mb-2">
                Zoom para Educadores
              </h3>
              <p className="text-gray-600 mb-4">
                Aprende los fundamentos de Zoom para crear clases virtuales efectivas.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                <span>⏱️ 2 horas</span>
                <span>📚 6 lecciones</span>
              </div>
              <Link to="/courses">
                <Button variant="outline" className="w-full group-hover:bg-primary-800 group-hover:text-white">
                  Ver Curso
                </Button>
              </Link>
            </Card>

            {/* Meet Course */}
            <Card hover className="group">
              <img 
                src="https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Google Meet Course"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="flex items-center space-x-2 mb-2">
                <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                  Google Meet
                </div>
                <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm font-medium">
                  Intermedio
                </div>
              </div>
              <h3 className="text-lg font-semibold text-primary-800 mb-2">
                Google Meet Avanzado
              </h3>
              <p className="text-gray-600 mb-4">
                Domina las funciones avanzadas de Google Meet para maximizar el aprendizaje.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                <span>⏱️ 1.5 horas</span>
                <span>📚 4 lecciones</span>
              </div>
              <Link to="/courses">
                <Button variant="outline" className="w-full group-hover:bg-primary-800 group-hover:text-white">
                  Ver Curso
                </Button>
              </Link>
            </Card>

            {/* Discord Course */}
            <Card hover className="group">
              <img 
                src="https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Discord Course"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="flex items-center space-x-2 mb-2">
                <div className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-medium">
                  Discord
                </div>
                <div className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">
                  Avanzado
                </div>
              </div>
              <h3 className="text-lg font-semibold text-primary-800 mb-2">
                Comunidades con Discord
              </h3>
              <p className="text-gray-600 mb-4">
                Crea y gestiona comunidades educativas efectivas usando Discord.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                <span>⏱️ 2.5 horas</span>
                <span>📚 8 lecciones</span>
              </div>
              <Link to="/courses">
                <Button variant="outline" className="w-full group-hover:bg-primary-800 group-hover:text-white">
                  Ver Curso
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-primary-800 to-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Transforma tu enseñanza con tecnología
              </h2>
              <p className="text-xl text-gray-200 mb-8">
                Descubre cómo las herramientas digitales pueden potenciar tu impacto 
                educativo y mejorar la experiencia de aprendizaje de tus estudiantes.
              </p>
              <div className="space-y-4">
                {[
                  'Clases más dinámicas e interactivas',
                  'Mayor engagement de los estudiantes',
                  'Flexibilidad para enseñar desde cualquier lugar',
                  'Herramientas de colaboración avanzadas'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-accent-500 flex-shrink-0" />
                    <span className="text-gray-200">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:text-center">
              <img 
                src="https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Online Teaching"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-800 mb-4">
            ¿Listo para comenzar?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Únete a cientos de educadores que ya están transformando 
            su enseñanza con TeleTeach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="w-full sm:w-auto">
                Registrarse Gratis
              </Button>
            </Link>
            <Link to="/donations">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Apoyar la Plataforma
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
