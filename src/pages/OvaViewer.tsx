import React from 'react';
import { Clock, Users, Star } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { mockCourses } from '../data/mockData';
import { useParams } from 'react-router-dom';

export const OvaViewer: React.FC = () => {

  const { id } = useParams<{ id: string }>();
  const course = mockCourses.find(course => course.id === id);

  if (!course) {
    return <div>Curso no encontrado</div>;
  }

  const ovaInfo = {
    title: 'Uso de Google Meet en Educación',
    description: 'Explora cómo utilizar Google Meet para crear experiencias educativas virtuales efectivas. Este OVA te guiará desde las funciones básicas hasta estrategias avanzadas.',
    duration: 60,
    lessons: 3,
    rating: 4.9,
    tags: ['google meet', 'educación', 'videoconferencia'],
    thumbnail: '/images/meet-ova.png',
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-primary-800 mb-4">
          Visualizador de OVA
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Accede a nuestros Objetos Virtuales de Aprendizaje interactivos para potenciar tus clases.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Info OVA */}
        <Card>
          <img
            src={ovaInfo.thumbnail}
            alt={ovaInfo.title}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-lg font-semibold text-primary-800 mb-2">
            {ovaInfo.title}
          </h3>
          <p className="text-gray-600 mb-4">
            {ovaInfo.description}
          </p>

          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{ovaInfo.duration} min</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span>{ovaInfo.lessons} secciones</span>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-yellow-500" />
              <span>{ovaInfo.rating}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1 mb-4">
            {ovaInfo.tags.map((tag, index) => (
              <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                {tag}
              </span>
            ))}
          </div>

          <Button variant="outline" className="w-full">
            Guardar en Favoritos
          </Button>
        </Card>

        {/* Iframe OVA */}
        <div>
          <div className="aspect-video w-full border rounded-lg overflow-hidden shadow">
            <iframe
              src={course.ovaPath} // RUTA AL OVA
              width="100%"
              height="100%"
              allowFullScreen
              className="w-full h-full"
              title='Visualizador de OVA'
            />
          </div>
        </div>
      </div>
    </div>
  );
};
