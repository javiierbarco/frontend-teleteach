// Importa React y hooks necesarios para gestionar estado y efectos
import React, { useEffect, useState } from 'react';

// Importa funciones de React Router para obtener parámetros de la URL y navegación
import { useParams, useNavigate } from 'react-router-dom';

// Importa Axios para realizar peticiones HTTP
import axios from 'axios';

// Componente principal de la página de detalle del curso
const CoursePage = () => {
  // Obtiene el parámetro de la URL (el ID del curso)
  const { courseId } = useParams();

  // Hook para redireccionar o volver atrás
  const navigate = useNavigate();

  // Estados para almacenar los datos del curso, el estado de carga y error
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Efecto que se ejecuta al montar el componente o cuando cambia courseId
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_COURSES_URL}/${courseId}`)
      .then((res) => {
        setCourse(res.data);   // Almacena los datos del curso
        setLoading(false);     // Finaliza la carga
      })
      .catch((err) => {
        console.error('Error al obtener el curso:', err);
        setError(true);        // Marca que hubo un error
        setLoading(false);     // Finaliza la carga
      });
  }, [courseId]);

  // Mientras se carga la información, muestra un mensaje
  if (loading) return <p className="text-center mt-10">Cargando curso...</p>;

  // Si hubo error o no hay datos, muestra mensaje de error
  if (error || !course) return <p className="text-center text-red-600 mt-10">Error al cargar el curso.</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Botón para volver atrás */}
      <button onClick={() => navigate(-1)} className="text-blue-600 underline mb-6 block text-sm sm:text-base">
        &larr; Volver
      </button>

      {/* Contenedor principal con los detalles del curso */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-blue-800 mb-3">{course.title}</h2>
        <p className="text-gray-700 mb-4">{course.description}</p>
        <p className="text-sm text-gray-600 mb-6">Nivel: <strong>{course.level}</strong></p>

        {/* Sección condicional: si el curso es de Zoom, muestra guía y video */}
        {course.title.toLowerCase().includes('zoom') && (
          <>
            <h3 className="text-lg font-semibold mb-3">Guía rápida para usar Zoom</h3>
            <ul className="list-disc pl-6 text-gray-700 text-sm space-y-1 mb-6">
              <li>Descarga Zoom desde <a className="text-blue-600 underline" href="https://zoom.us/download" target="_blank">zoom.us/download</a></li>
              <li>Inicia sesión con tu cuenta</li>
              <li>Haz clic en "Nueva reunión"</li>
              <li>Invita a tus estudiantes</li>
              <li>Usa las herramientas: compartir pantalla, grabar, etc.</li>
              <li>Finaliza con el botón "Terminar"</li>
            </ul>

            {/* Video de Zoom incrustado desde YouTube */}
            <div className="relative w-full pt-[56.25%] mb-6">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded"
                src="https://www.youtube.com/embed/FWSm6vWORxo"
                title="Videotutorial Zoom"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </>
        )}

        {/* Sección condicional: si el curso es de Google Meet */}
        {course.title.toLowerCase().includes('meet') && (
          <>
            <h3 className="text-lg font-semibold mb-3">Guía rápida para usar Google Meet</h3>
            <ul className="list-disc pl-6 text-gray-700 text-sm space-y-1 mb-6">
              <li>Abre <a className="text-blue-600 underline" href="https://meet.google.com" target="_blank">meet.google.com</a></li>
              <li>Inicia sesión con tu cuenta de Google</li>
              <li>Haz clic en "Nueva reunión"</li>
              <li>Comparte el enlace</li>
              <li>Utiliza funciones como subtítulos, silenciar, compartir pantalla</li>
              <li>Finaliza la sesión con el botón rojo</li>
            </ul>

            {/* Video de Google Meet incrustado desde YouTube */}
            <div className="relative w-full pt-[56.25%] mb-6">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded"
                src="https://www.youtube.com/embed/993GyGpakuw"
                title="Videotutorial Meet"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

// Exporta el componente para usarlo en las rutas de React Router
export default CoursePage;
