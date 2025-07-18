// Importa React y el hook useState para manejar estados internos
import React, { useState } from "react";
// Importa el hook useNavigate para cambiar de ruta
import {Link, useNavigate } from "react-router-dom";
// Importa axios para hacer peticiones HTTP
import axios from "axios";

import { Eye, EyeOff } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card } from '../components/ui/Card';


export const Login: React.FC = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [attemptCount, setAttemptCount] = useState(0);
  const [isBlocked, setIsBlocked] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Estado para manejar el loading
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    if (isBlocked) {
      setErrors({ general: 'Cuenta bloqueada temporalmente. Intente más tarde.' });
      return;
    }

    // Validation
    const newErrors: { [key: string]: string } = {};
    if (!formData.email) newErrors.email = 'El email es requerido';
    if (!formData.password) newErrors.password = 'La contraseña es requerida';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // const success = await login(formData.email, formData.password);
    
    try {
      setIsLoading(true);

      const res = await axios.post('http://localhost:5000/login', formData)
      localStorage.setItem('user', JSON.stringify(res.data.user));
      navigate('/dashboard');
    } catch (err: any) {
      const newAttemptCount = attemptCount + 1;
      setAttemptCount(newAttemptCount);

      if (newAttemptCount >= 3) {
        setIsBlocked(true);
        setErrors({ general: 'Demasiados intentos fallidos. Cuenta bloqueada temporalmente.' });
        setTimeout(() => {
          setIsBlocked(false);
          setAttemptCount(0);
        }, 300000); // 5 minutos
      } else {
        const errorMessage = err?.response?.data?.msg || 'Credenciales incorrectas';
        setErrors({ general: `${errorMessage}. Te quedan ${3 - newAttemptCount} intentos restantes.` });
      }
    } finally {
      setIsLoading(false);
    }    
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-accent-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-primary-800 mb-2">
            Iniciar Sesión
          </h1>
          <p className="text-gray-600">
            Accede a tu cuenta de TeleTeach
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {errors.general && (
            <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
              {errors.general}
            </div>
          )}

          <Input
            type="email"
            label="Correo Electrónico"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            error={errors.email}
            disabled={isBlocked}
            placeholder="tu@email.com"
          />

          <div className="relative">
            <Input
              type={showPassword ? 'text' : 'password'}
              label="Contraseña"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              error={errors.password}
              disabled={isBlocked}
              placeholder="••••••••"
            />
            <button
              type="button"
              className="absolute right-3 top-9 text-gray-400 hover:text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-600">Recordarme</span>
            </label>
            <Link
              to="/forgot-password"
              className="text-sm text-primary-600 hover:text-primary-800"
            >
              ¿Olvidaste tu contraseña?
            </Link>
          </div>

          <Button
            type="submit"
            isLoading={isLoading}
            disabled={isBlocked}
            className="w-full"
          >
            Iniciar Sesión
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            ¿No tienes cuenta?{' '}
            <Link to="/register" className="text-primary-600 hover:text-primary-800 font-medium">
              Regístrate aquí
            </Link>
          </p>
        </div>

        {attemptCount > 0 && !isBlocked && (
          <div className="mt-4 text-center text-sm text-orange-600">
            Intentos fallidos: {attemptCount}/3
          </div>
        )}
      </Card>
    </div>
  );
};



/*



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
*/

export default Login;
