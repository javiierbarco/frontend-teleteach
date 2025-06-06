import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Para redireccionar
import axios from 'axios'; // Cliente HTTP

// Componente principal que recibe un callback para seleccionar un curso
const CourseList = ({ onSelectCourse }) => {
  const [courses, setCourses] = useState([]);        // Lista de cursos
  const [loading, setLoading] = useState(true);      // Estado de carga
  const [error, setError] = useState(false);         // Estado de error
  const navigate = useNavigate();                    // Hook para redireccionar

  // Cargar cursos desde la API al montar el componente
  useEffect(() => {
    axios.get(import.meta.env.VITE_API_COURSES_URL)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setCourses(response.data); // OK: almacena los cursos
        } else {
          console.error("La respuesta no es un arreglo:", response.data);
          setCourses([]);
          setError(true);
        }
      })
      .catch((error) => {
        console.error('Error al cargar cursos:', error);
        setCourses([]);
        setError(true);
      })
      .finally(() => setLoading(false)); // Siempre desactiva carga
  }, []);

  // Mensaje de carga
  if (loading) return <p className="text-center mt-10">Cargando cursos...</p>;

  // Mensaje de error
  if (error) return <p className="text-center text-red-600 mt-10">Error al cargar los cursos.</p>;

  // Vista principal
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-blue-800">Cursos disponibles</h2>

      {/* Grid de tarjetas de cursos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course._id} // Importante: clave única para React
            className="bg-white border border-gray-200 shadow-md rounded-xl p-6 hover:shadow-lg transition"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-blue-700">{course.title}</h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">{course.description}</p>

            <span className="inline-block mt-3 text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
              Nivel: {course.level || "básico"}
            </span>

            <button
              onClick={() => {
                onSelectCourse(course);  // Actualiza estado global
                navigate("/course");     // Navega al detalle del curso
              }}
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Ver curso
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
