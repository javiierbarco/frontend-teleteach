import React from 'react';
import CourseList from './CourseList';
import logo from '../assets/teleteach-logo.png'; // Asegúrate de tener esta imagen o cambia la ruta

const Home = ({ onSelectCourse }) => {
  return (
    <div className="bg-gray-50 min-h-screen pb-10">
      <div className="text-center px-4 pt-10">
        <h1 className="text-4xl font-bold mb-4">
          Domina las herramientas digitales para una enseñanza virtual efectiva con <span className="text-blue-700">TeleTeach</span>
        </h1>
        <img src={logo} alt="TeleTeach Logo" className="mx-auto w-36 my-6" />
        <h2 className="text-2xl font-semibold mb-2">Bienvenido a TeleTeach</h2>
        <p className="max-w-3xl mx-auto text-gray-700">
          TeleTeach es una plataforma de formación interactiva diseñada para fortalecer las habilidades digitales de los docentes en el uso de herramientas de videoconferencia como Zoom, Google Meet y Microsoft Teams. Aquí encontrarás contenidos prácticos, simulaciones, OVAs y evaluaciones que te permitirán mejorar tu desempeño en entornos virtuales de aprendizaje. Nuestra misión es acompañarte en el proceso de transformación educativa, brindándote recursos accesibles, claros y actualizados para que enseñes con confianza en la era digital.
        </p>
      </div>

      <div className="mt-10">
        <CourseList onSelectCourse={onSelectCourse} />
      </div>
    </div>
  );
};

export default Home;