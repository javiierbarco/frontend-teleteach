// Importa React y el hook useState para manejar el estado del curso seleccionado
import React, { useState } from 'react';

// Importa el componente Home que muestra la introducción y la lista de cursos
import Home from './components/Home';

// Importa el componente CourseDetail que muestra el contenido de un curso específico
import CourseDetail from './components/CourseDetail';

// Componente principal de la aplicación
function App() {
  // Estado para almacenar el curso seleccionado; si es null se muestra Home
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Si no hay curso seleccionado, muestra la página de inicio con la lista */}
      {!selectedCourse ? (
        <Home onSelectCourse={setSelectedCourse} /> // Pasa la función para seleccionar un curso
      ) : (
        <CourseDetail 
          course={selectedCourse}                 // Pasa el curso seleccionado
          onBack={() => setSelectedCourse(null)}  // Permite volver a la lista al quitar el curso
        />
      )}
    </div>
  );
}

// Exporta el componente App como punto de entrada de la aplicación
export default App;
