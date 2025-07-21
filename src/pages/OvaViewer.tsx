import React from 'react';
import { mockCourses } from '../data/mockData';
import { useParams } from 'react-router-dom';

export const OvaViewer: React.FC = () => {

  const { id } = useParams<{ id: string }>();
  const course = mockCourses.find(course => course.id === id);

  if (!course) {
    return <div>Curso no encontrado</div>;
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-primary-800 mb-4">
          Bienvenido
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Accede a nuestros Objetos Virtuales de Aprendizaje interactivos para potenciar tus clases.
        </p>
      </div>

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
  );
};
