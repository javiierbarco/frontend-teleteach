import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from './components/Home';
import CourseDetail from './components/CourseDetail';
import Login from './pages/Login';

function App() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          {/* Ruta de inicio de sesión */}
          <Route path="/login" element={<Login />} />

          {/* Ruta principal con lista de cursos */}
          <Route
            path="/home"
            element={
              <Home onSelectCourse={setSelectedCourse} />
            }
          />

          {/* Ruta para detalle del curso */}
          <Route
            path="/course"
            element={
              selectedCourse ? (
                <CourseDetail
                  course={selectedCourse}
                  onBack={() => setSelectedCourse(null)}
                />
              ) : (
                <Navigate to="/home" />
              )
            }
          />

          {/* Ruta por defecto redirige a login */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
