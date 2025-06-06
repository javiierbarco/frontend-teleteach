// Importa React y el hook useState para manejar estados internos
import React, { useState } from "react";
// Importa el hook useNavigate para cambiar de ruta
import { useNavigate } from "react-router-dom";
// Importa axios para hacer peticiones HTTP
import axios from "axios";

// Componente principal de Login y Registro
const Login = () => {
  const navigate = useNavigate(); // Permite redirigir a otra vista
  const [isRegistering, setIsRegistering] = useState(false); // Alterna entre login y registro

  // Estado para el formulario de inicio de sesión
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  // Estado para el formulario de registro
  const [registerData, setRegisterData] = useState({
    full_name: "",
    email: "",
    password: ""
  });

  // Función que maneja el envío del formulario de login
  const handleLogin = async (e) => {
    e.preventDefault(); // Previene recarga de página
    try {
      const res = await axios.post("http://localhost:5000/login", loginData); // Llama al backend
      localStorage.setItem("user", JSON.stringify(res.data.user)); // Guarda al usuario en localStorage
      navigate("/home"); // Redirige a la página principal
    } catch (err) {
      // Muestra un mensaje de error personalizado si lo hay
      const msg = err?.response?.data?.msg || "Error al iniciar sesión";
      alert(msg);
    }
  };

  // Función que maneja el envío del formulario de registro
  const handleRegister = async (e) => {
    e.preventDefault(); // Previene recarga de página
    try {
      const res = await axios.post("http://localhost:5000/register", registerData); // Envía datos al backend
      alert("Usuario registrado correctamente");
      setIsRegistering(false); // Cambia a modo login después de registrar
    } catch (err) {
      // Muestra mensaje de error del backend o genérico
      const msg = err?.response?.data?.msg || "Error al registrar usuario";
      alert(msg);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "1rem" }}>
      {/* Título del formulario, cambia según el modo */}
      <h2>{isRegistering ? "Registro" : "Iniciar Sesión"}</h2>

      {/* Formulario de inicio de sesión */}
      {!isRegistering ? (
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Correo"
            value={loginData.email}
            onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={loginData.password}
            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
            required
          />
          <button type="submit">Ingresar</button>
        </form>
      ) : (
        // Formulario de registro
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Nombre completo"
            value={registerData.full_name}
            onChange={(e) => setRegisterData({ ...registerData, full_name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Correo"
            value={registerData.email}
            onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={registerData.password}
            onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
            required
          />
          <button type="submit">Registrarse</button>
        </form>
      )}

      {/* Botón que alterna entre modo login y registro */}
      <button onClick={() => setIsRegistering(!isRegistering)} style={{ marginTop: "1rem" }}>
        {isRegistering ? "¿Ya tienes cuenta? Iniciar sesión" : "¿No tienes cuenta? Regístrate"}
      </button>

      <hr style={{ margin: "1rem 0" }} />

      {/* Opción para continuar sin registrarse */}
      <button onClick={() => navigate("/home")}>Continuar como invitado</button>
    </div>
  );
};

export default Login;
