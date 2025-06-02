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

---

## ⚙️ Instalación y ejecución local

```bash
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

---

## 👥 Equipo Castores – Ingeniería de Software 2

- Diego H. Lavado G.  
- Estephanie Perez M.  
- Frank S. Pardo A.  
- Javier E. González V.  
- Juan D. Rivera B.  
- Victor M. Torres A.  
- Wullfredo J. Barco G.

---

## 📜 Licencia

Uso académico – Universidad Nacional de Colombia – Ingeniería de Sistemas y Computación – 2025-1
