// Importa React y los hooks necesarios
import React, { useEffect, useState } from 'react';
// Importa Axios para hacer peticiones HTTP
import axios from 'axios';

// Componente que recibe una función para manejar la selección de un curso
const CourseList = ({ onSelectCourse }) => {
  // Estado para almacenar los cursos obtenidos
  const [courses, setCourses] = useState([]);
  // Estado para indicar si se está cargando la información
  const [loading, setLoading] = useState(true);
  // Estado para detectar si ocurrió un error al cargar
  const [error, setError] = useState(false);

  // Hook que se ejecuta al montar el componente (solo una vez)
  useEffect(() => {
    // Realiza una petición GET a la URL definida en el entorno (vite.config)
    axios.get(import.meta.env.VITE_API_COURSES_URL)
      .then((response) => {
        // Verifica que la respuesta sea un arreglo
        if (Array.isArray(response.data)) {
          setCourses(response.data); // Almacena los cursos
        } else {
          console.error("La respuesta no es un arreglo:", response.data);
          setCourses([]);  // Vacía la lista si no es válida
          setError(true);  // Marca error
        }
        setLoading(false); // Finaliza carga
      })
      .catch((error) => {
        // Captura errores de red o del servidor
        console.error('Error al cargar cursos:', error);
        setCourses([]);
        setLoading(false);
        setError(true);
      });
  }, []); // El arreglo vacío indica que se ejecuta solo una vez

  // Si está cargando, muestra un mensaje
  if (loading) return <p className="text-center mt-10">Cargando cursos...</p>;

  // Si hay error, muestra mensaje de error
  if (error) return <p className="text-center text-red-600 mt-10">Error al cargar los cursos.</p>;

  return (
    <div className="container mx-auto px-4">
      {/* Título principal */}
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-blue-800">Cursos disponibles</h2>

      {/* Grid de tarjetas para los cursos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course._id}  // Usa el _id de MongoDB como clave
            className="bg-white border border-gray-200 shadow-md rounded-xl p-6 hover:shadow-lg transition"
          >
            {/* Título del curso */}
            <h3 className="text-lg sm:text-xl font-semibold text-blue-700">{course.title}</h3>

            {/* Descripción del curso */}
            <p className="text-gray-600 mt-2 text-sm sm:text-base">{course.description}</p>

            {/* Etiqueta de nivel */}
            <span className="inline-block mt-3 text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
              Nivel: {course.level || "básico"}
            </span>

            {/* Botón para seleccionar curso */}
            <button
              onClick={() => onSelectCourse(course)}  // Llama al callback enviado por el padre
              className="mt-4 block w-full text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Ver curso
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Exporta el componente para ser usado en otras vistas
export default CourseList;
