 HEAD
# 📜 CHANGELOG

Todas las modificaciones relevantes de este cliente frontend serán documentadas en este archivo.

Este proyecto sigue la convención de versionado [SemVer](https://semver.org/lang/es/).

# 📘 CHANGELOG – Frontend TeleTeach

Este archivo documenta los cambios significativos realizados en la interfaz de usuario del sistema **TeleTeach**.

Este proyecto sigue las reglas de versionado semántico [SemVer](https://semver.org/lang/es/).
af6c089 (Versión inicial del frontend: estructura con Vite + integración a cursos API)

---

## [0.1.0] - 2025-06-02

HEAD
### Agregado
- Estructura inicial del proyecto con React y Vite.
- Páginas básicas: Login, Registro, Dashboard.
- Conexión a APIs de autenticación y cursos.
- Manejo básico de rutas protegidas con React Router.
- Variables de entorno `.env` documentadas para integración local.

---

## [0.1.1] - YYYY-MM-DD (por definir)
### Corregido
- [pendiente] Validación de formularios en login y registro.

### Cambiado
- [pendiente] Estilos visuales para mejorar la experiencia del usuario.
=======
### 🆕 Agregado
- Estructura inicial del proyecto con Vite + React.
- Configuración base de TailwindCSS y PostCSS.
- Componente `CourseList` para mostrar los cursos obtenidos desde la API REST.
- Componente `CourseDetail` con visualización de contenido y evaluación para cursos de Zoom y Google Meet.
- Página de evaluación incluida directamente en `CourseDetail`, con validación y feedback por puntaje.
- Navegación básica gestionada por estado interno de React (`useState`).

---

## [0.2.0] - 2025-06-03
### 🆕 Agregado
- Nueva página independiente `Evaluation.jsx` con formulario de correo obligatorio antes de calificar.
- Enrutamiento completo con `react-router-dom`, soporte para `/curso/:id` y `/evaluacion`.
- Persistencia temporal del curso seleccionado con `useLocation` para evaluación.

### 🛠️ Modificado
- Separación de lógica de navegación: se elimina control con `useState` en `App.jsx`, ahora usa rutas.
- Botón "Realizar evaluación" redirige correctamente a la nueva ruta `/evaluacion`.
- Refactor visual en `CourseDetail` para separar claramente secciones de contenido y evaluación.

### 🐛 Corregido
- Manejo de cursos sin nivel definido (fallback "básico").
- Mensajes de error en caso de que falle el fetch de cursos.

---

## [0.2.1] - 2025-06-04
### 🔧 Mejoras menores
- Placeholder y validación HTML para el campo de correo electrónico.
- Se ajustaron paddings y márgenes en vista móvil.
- Código comentado innecesario eliminado.
af6c089 (Versión inicial del frontend: estructura con Vite + integración a cursos API)
