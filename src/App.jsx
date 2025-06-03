// App.jsx
import React, { useState } from 'react';
import Home from './components/Home';
import CourseDetail from './components/CourseDetail';

function App() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {!selectedCourse ? (
        <Home onSelectCourse={setSelectedCourse} />
      ) : (
        <CourseDetail course={selectedCourse} onBack={() => setSelectedCourse(null)} />
      )}
    </div>
  );
}

export default App;