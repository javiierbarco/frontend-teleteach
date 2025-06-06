HEAD
# 🎓 TeleTeach – Frontend

Este es el repositorio oficial del **frontend del sistema TeleTeach**, una plataforma de capacitación digital dirigida a docentes que necesitan fortalecer sus competencias en herramientas de videoconferencia como Zoom, Meet y Discord.

Forma parte del desarrollo del curso **Ingeniería de Software 2 – 2025-1** y sigue una arquitectura **SOFEA** (Service-Oriented Front-End Architecture), con separación total entre frontend y servicios backend.

---

## 🖥️ Tecnologías utilizadas

- ⚛️ React 18
- 🎨 Tailwind CSS (o el framework visual que el equipo use)
- 🔗 Axios para peticiones HTTP
- 🌐 React Router DOM
- ⚙️ Vite (o Create React App)

---

## 🧩 Estructura del sistema

Este frontend se comunica con dos microservicios REST:

- 🔐 [auth-api-teleteach](https://github.com/javiierbarco/auth-api-teleteach): Registro, login, recuperación de contraseña
- 📚 [courses-api-teleteach](https://github.com/javiierbarco/courses-api-teleteach): Listado de cursos y seguimiento del progreso

Todo el sistema forma parte del proyecto **TeleTeach - Castores**.

# 🖥️ TeleTeach – Frontend

Este repositorio contiene el frontend de la plataforma **TeleTeach**, una aplicación educativa enfocada en capacitar a docentes en el uso de herramientas de videoconferencia como **Zoom** y **Google Meet**.

Forma parte del proyecto académico desarrollado para la materia **Ingeniería de Software 2 (2025-1)** bajo un enfoque de arquitectura **SOFEA**, con microservicios independientes para autenticación y gestión de cursos.

---

## 🚀 Tecnologías utilizadas

- [Vite](https://vitejs.dev/) + React 18
- [Tailwind CSS](https://tailwindcss.com/) para diseño responsivo
- [React Router DOM](https://reactrouter.com/) para navegación tipo SPA
- [Axios](https://axios-http.com/) para llamadas a APIs REST
- [Dotenv](https://www.npmjs.com/package/dotenv) para variables de entorno
- Backend conectado: [courses-api-teleteach](https://github.com/javiierbarco/courses-api-teleteach)

---

## 📂 Estructura del proyecto

```
frontend-teleteach/
├── public/                        # Recursos estáticos (favicon, index.html)
├── src/
│   ├── components/                # Componentes principales (CourseList, CourseDetail, Home)
│   ├── pages/                     # Páginas como Evaluation.jsx
│   ├── services/                  # Axios service (courseService.js)
│   ├── App.jsx                    # Control de navegación y vista principal
│   ├── main.jsx                   # Entrada principal de la aplicación
│   └── styles/                    # (opcional) Estilos personalizados
├── .env                           # Configuración de endpoints por entorno
├── .gitignore                     # Archivos y carpetas ignoradas por git
├── package.json                   # Configuración de dependencias npm
└── vite.config.js                 # Configuración de Vite
```
af6c089 (Versión inicial del frontend: estructura con Vite + integración a cursos API)

---

## ⚙️ Instalación y ejecución local

```bash
HEAD
# Clona el repositorio
git clone https://github.com/javiierbarco/frontend-teleteach.git
cd frontend-teleteach

# Instala dependencias
npm install

# Ejecuta la aplicación en modo desarrollo
npm run dev
```

> Requiere Node.js v16 o superior

---

## ⚠️ Variables de entorno

Crea un archivo `.env` en la raíz con las siguientes variables:

```
VITE_API_AUTH_URL=http://localhost:8000/api/auth
VITE_API_COURSES_URL=http://localhost:8001/api/courses
```

Asegúrate de que los servicios de backend estén ejecutándose en esas rutas.

---

## 🔐 Funcionalidades del MVP

- Registro de usuario docente
- Inicio de sesión y cierre de sesión
- Acceso a un panel de cursos
- Visualización del contenido por herramienta (Meet, Zoom)
- Seguimiento visual del progreso en los cursos
- Navegación protegida con autenticación
- Registro e inicio de sesión conectados al microservicio auth-api-teleteach
- Login y registro con validación de campos y manejo de errores del backend
- Opción para continuar como invitado sin autenticación

---

## 📁 Estructura de carpetas

```bash
src/
├── assets/               # Imágenes, logos
├── components/           # Componentes reutilizables (Navbar, Card, etc.)
├── pages/                # Páginas como Login, Dashboard, Cursos
├── services/             # Funciones de conexión a APIs (authService, courseService)
├── App.jsx
└── main.jsx
```

---

## ✅ Estado actual del desarrollo

✔️ Integración con APIs  
✔️ UI funcional para login y dashboard  
🛠️ En desarrollo: visualización detallada de cursos y OVAs  

---

## 🔗 Otros Repositorios del Proyecto TeleTeach

- [API de Autenticación](https://github.com/javiierbarco/auth-api-teleteach)
- [API de Cursos y Progreso](https://github.com/javiierbarco/courses-api-teleteach)

# 1. Clona el repositorio
git clone https://github.com/javiierbarco/frontend-teleteach.git
cd frontend-teleteach

# 2. Instala las dependencias
npm install

# 3. Crea el archivo de entorno
cp .env.example .env

# 4. Configura la URL de tu API de cursos en el archivo .env:
VITE_API_COURSES_URL=http://localhost:8001/api/courses

# 5. Inicia el servidor de desarrollo
npm run dev
```

---

## 📋 Funcionalidades implementadas

- ✅ Vista de cursos cargados dinámicamente desde el backend
- ✅ Detalle del curso con guía rápida y videotutorial embebido
- ✅ Evaluación integrada para cada curso (3 preguntas)
- ✅ Evaluación inicial sin correo, luego se migró a pedir correo
- ✅ Componente `CourseDetail` con botón para activar quiz y calificación
- ✅ Componente `Evaluation` (versión extendida con validación y POST a backend)
- ✅ Navegación entre vista general y detalle (SPA sin recargas)
- ✅ Página Login.jsx con cambio dinámico entre login y registro
- ✅ Conexión completa con /register y /login del microservicio de autenticación
- ✅ Manejo de tokens JWT aún pendiente de implementar (si es el caso)
- ✅ Botón para "Continuar como invitado" que redirige a /home sin autenticarse

---

## 📌 Mejoras y pendientes futuros

- 🔄 Integrar autenticación desde `auth-api-teleteach`
- 📧 Notificación por email del resultado de la evaluación (en futuro)
- 📊 Panel de administración para ver estadísticas de cursos completados
- 🔐 Restringir acceso a evaluaciones a usuarios autenticados
- 🌍 Soporte multilingüe e internacionalización

---

## 🔗 Microservicios relacionados

- 🔐 [API de Autenticación – auth-api-teleteach](https://github.com/javiierbarco/auth-api-teleteach)
- 🎓 [API de Cursos y Progreso – courses-api-teleteach](https://github.com/javiierbarco/courses-api-teleteach)
 af6c089 (Versión inicial del frontend: estructura con Vite + integración a cursos API)

---

## 👥 Equipo Castores – Ingeniería de Software 2

HEAD
=======
Desarrollado por el equipo 6 para la Universidad Nacional de Colombia – 2025-1:

 af6c089 (Versión inicial del frontend: estructura con Vite + integración a cursos API)
- Diego H. Lavado G.  
- Estephanie Perez M.  
- Frank S. Pardo A.  
- Javier E. González V.  
- Juan D. Rivera B.  
- Victor M. Torres A.  
- Wullfredo J. Barco G.

 HEAD

---

## 📜 Licencia

Uso académico – Universidad Nacional de Colombia – Ingeniería de Sistemas y Computación – 2025-1

af6c089 (Versión inicial del frontend: estructura con Vite + integración a cursos API)
