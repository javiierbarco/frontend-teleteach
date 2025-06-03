import React, { useState } from 'react';

const CourseDetail = ({ course, onBack }) => {
  const isZoom = course.title.toLowerCase().includes("zoom");
  const isMeet = course.title.toLowerCase().includes("meet");
  const [showQuiz, setShowQuiz] = useState(false);
  const [score, setScore] = useState(null);

  const handleToggleQuiz = () => {
    setShowQuiz(!showQuiz);
    setScore(null); // Reinicia el puntaje si se oculta la evaluación
  };

  const handleSubmit = () => {
    let correct = 0;

    if (isZoom) {
      if (document.querySelector('input[name="q1"]:checked')?.nextSibling?.textContent.includes("zoom.us")) correct++;
      if (document.querySelector('input[name="q2"]:checked')?.nextSibling?.textContent.includes("Invitar")) correct++;
      if (document.querySelector('input[name="q3"]:checked')?.nextSibling?.textContent.includes("Grabar")) correct++;
    } else if (isMeet) {
      if (document.querySelector('input[name="m1"]:checked')?.nextSibling?.textContent.includes("meet.google.com")) correct++;
      if (document.querySelector('input[name="m2"]:checked')?.nextSibling?.textContent.includes("Google")) correct++;
      if (document.querySelector('input[name="m3"]:checked')?.nextSibling?.textContent.includes("Compartir pantalla")) correct++;
    }

    setScore(correct);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <button onClick={onBack} className="text-blue-600 underline mb-6 block text-sm sm:text-base">
        &larr; Volver
      </button>

      <div className="bg-white p-5 sm:p-6 md:p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-3">{course.title}</h2>
        <p className="text-gray-700 text-sm sm:text-base mb-4">{course.description}</p>
        <p className="text-sm text-gray-600 mb-6">
          Nivel: <strong>{course.level}</strong>
        </p>

        {isZoom && (
          <>
            <h3 className="text-lg sm:text-xl font-semibold mb-3">📘 Guía rápida para usar Zoom</h3>
            <ul className="list-disc pl-6 text-gray-700 text-sm sm:text-base space-y-1 mb-6">
              <li>Descarga e instala Zoom desde <a className="text-blue-600 underline" href="https://zoom.us/download" target="_blank">zoom.us/download</a>.</li>
              <li>Abre Zoom y haz clic en “Iniciar sesión”.</li>
              <li>Haz clic en “Nueva reunión” para iniciar una sesión.</li>
              <li>Usa el botón “Invitar” para compartir el enlace con tus estudiantes.</li>
              <li>Durante la reunión puedes compartir pantalla, grabar, silenciar participantes y más.</li>
              <li>Finaliza la reunión con el botón “Terminar”.</li>
            </ul>

            <h3 className="text-lg sm:text-xl font-semibold mb-3">🎥 Video demostrativo</h3>
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

        {isMeet && (
          <>
            <h3 className="text-lg sm:text-xl font-semibold mb-3">📘 Guía rápida para usar Google Meet</h3>
            <ul className="list-disc pl-6 text-gray-700 text-sm sm:text-base space-y-1 mb-6">
              <li>Abre tu navegador y ve a <a className="text-blue-600 underline" href="https://meet.google.com/" target="_blank">meet.google.com</a>.</li>
              <li>Inicia sesión con tu cuenta de Google institucional.</li>
              <li>Haz clic en “Nueva reunión” y selecciona “Crear una reunión para más tarde” o “Iniciar ahora”.</li>
              <li>Comparte el enlace con tus estudiantes por correo o chat.</li>
              <li>Durante la clase puedes compartir tu pantalla, activar subtítulos, silenciar participantes, y más.</li>
              <li>Finaliza la reunión con el botón rojo de colgar llamada.</li>
            </ul>

            <h3 className="text-lg sm:text-xl font-semibold mb-3">🎥 Video demostrativo</h3>
            <div className="relative w-full pt-[56.25%] mb-6">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded"
                src="https://www.youtube.com/embed/993GyGpakuw"
                title="Videotutorial Google Meet actualizado"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </>
        )}

        {(isZoom || isMeet) && (
          <>
            <button
              onClick={handleToggleQuiz}
              className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
            >
              {showQuiz ? "Ocultar evaluación" : "Realizar evaluación"}
            </button>

            {showQuiz && (
              <div className="mt-6 bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="text-lg font-semibold text-green-800 mb-3">
                  Evaluación: {isZoom ? "Uso básico de Zoom" : "Uso básico de Google Meet"}
                </h4>
                <ol className="list-decimal pl-5 space-y-4 text-sm text-gray-800">
                  {isZoom ? (
                    <>
                      <li>
                        ¿Dónde se descarga Zoom?<br />
                        <label><input type="radio" name="q1" /> WhatsApp</label><br />
                        <label><input type="radio" name="q1" /> PlayStation Store</label><br />
                        <label><input type="radio" name="q1" /> <a className="underline text-blue-600" href="https://zoom.us/download" target="_blank">zoom.us/download</a></label>
                      </li>
                      <li>
                        ¿Qué opción debes usar para invitar a tus estudiantes?<br />
                        <label><input type="radio" name="q2" /> Compartir pantalla</label><br />
                        <label><input type="radio" name="q2" /> Invitar</label><br />
                        <label><input type="radio" name="q2" /> Finalizar reunión</label>
                      </li>
                      <li>
                        ¿Cuál es una función importante durante la clase?<br />
                        <label><input type="radio" name="q3" /> Cambiar el fondo del chat</label><br />
                        <label><input type="radio" name="q3" /> Grabar la reunión</label><br />
                        <label><input type="radio" name="q3" /> Eliminar la app</label>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        ¿Dónde se inicia una reunión en Google Meet?<br />
                        <label><input type="radio" name="m1" /> TikTok</label><br />
                        <label><input type="radio" name="m1" /> <a className="underline text-blue-600" href="https://meet.google.com" target="_blank">meet.google.com</a></label><br />
                        <label><input type="radio" name="m1" /> Google Drive</label>
                      </li>
                      <li>
                        ¿Qué necesitas para usar Meet?<br />
                        <label><input type="radio" name="m2" /> Una cuenta de Yahoo</label><br />
                        <label><input type="radio" name="m2" /> Una cuenta de Google</label><br />
                        <label><input type="radio" name="m2" /> Una cuenta bancaria</label>
                      </li>
                      <li>
                        ¿Cuál de estas funciones tiene Meet?<br />
                        <label><input type="radio" name="m3" /> Compartir pantalla</label><br />
                        <label><input type="radio" name="m3" /> Jugar videojuegos</label><br />
                        <label><input type="radio" name="m3" /> Cambiar idioma del sistema</label>
                      </li>
                    </>
                  )}
                </ol>

                <button
                  onClick={handleSubmit}
                  className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                >
                  Calificar
                </button>

                {score !== null && (
                  <p className="mt-4 text-green-700 font-semibold">
                    Resultado: {score}/3 respuestas correctas
                    <br />
                    {score === 3
                      ? "¡Excelente! Has comprendido muy bien el contenido."
                      : score === 2
                      ? "Muy bien, pero puedes reforzar un poco más."
                      : "Te recomendamos repasar el contenido nuevamente."}
                  </p>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CourseDetail;