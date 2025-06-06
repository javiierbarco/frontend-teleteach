// Importa React y hooks necesarios
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Importa el componente CourseList que muestra los cursos
import CourseList from './CourseList';

// Importa el logo de TeleTeach desde la carpeta de assets
import logo from '../assets/teleteach-logo.png'; // Asegúrate de tener esta imagen o cambia la ruta

// Componente principal de bienvenida que también carga los cursos
const Home = ({ onSelectCourse }) => {
  const navigate = useNavigate();

  // Maneja la selección de un curso
  const handleCourseSelect = (course) => {
    onSelectCourse(course);
    navigate("/course");
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-10">
      {/* Sección de bienvenida y descripción */}
      <div className="text-center px-4 pt-10">
        {/* Título principal con énfasis en "TeleTeach" */}
        <h1 className="text-4xl font-bold mb-4">
          Domina las herramientas digitales para una enseñanza virtual efectiva con <span className="text-blue-700">TeleTeach</span>
        </h1>

        {/* Logo de la plataforma */}
        <img src={logo} alt="TeleTeach Logo" className="mx-auto w-36 my-6" />

        {/* Subtítulo de bienvenida */}
        <h2 className="text-2xl font-semibold mb-2">Bienvenido a TeleTeach</h2>

        {/* Descripción general de la plataforma y su propósito */}
        <p className="max-w-3xl mx-auto text-gray-700">
          TeleTeach es una plataforma de formación interactiva diseñada para fortalecer las habilidades digitales de los docentes en el uso de herramientas de videoconferencia como Zoom, Google Meet y Microsoft Teams. Aquí encontrarás contenidos prácticos, simulaciones, OVAs y evaluaciones que te permitirán mejorar tu desempeño en entornos virtuales de aprendizaje. Nuestra misión es acompañarte en el proceso de transformación educativa, brindándote recursos accesibles, claros y actualizados para que enseñes con confianza en la era digital.
        </p>
      </div>

      {/* Lista de cursos disponibles (cargada desde CourseList) */}
      <div className="mt-10">
        <CourseList onSelectCourse={handleCourseSelect} /> {/* Callback con navegación */}
      </div>
    </div>
  );
};

// Exporta el componente para ser usado en App.jsx u otras rutas
export default Home;
