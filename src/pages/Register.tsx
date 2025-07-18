import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card } from '../components/ui/Card';

import axios from 'axios';

export const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false); // Estado para manejar el loading, reemplazar con tu lógica de autenticación
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'El nombre es requerido';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'El apellido es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Ingresa un email válido';
    }

    if (!formData.password) {
      newErrors.password = 'La contraseña es requerida';
    } else if (formData.password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden';
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {

      try {
        setIsLoading(true);
        
        await axios.post('http://localhost:5000/register', {
          full_name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          password: formData.password
        });

        alert('Usuario registrado correctamente. Por favor inicia sesión.');
        navigate('/login');
      } catch (err: any) {
        const errorMessage = err.response?.data?.message || 'Error al registrar el usuario';
        setErrors({ general: errorMessage });
      } finally {
        setIsLoading(false);  
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-accent-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-primary-800 mb-2">
            Crear Cuenta
          </h1>
          <p className="text-gray-600">
            Únete a la comunidad TeleTeach
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <Input
              type="text"
              label="Nombre"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              error={errors.firstName}
              placeholder="Juan"
            />
            <Input
              type="text"
              label="Apellido"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              error={errors.lastName}
              placeholder="Pérez"
            />
          </div>

          <Input
            type="email"
            label="Correo Electrónico"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            error={errors.email}
            placeholder="tu@email.com"
          />

          <div className="relative">
            <Input
              type={showPassword ? 'text' : 'password'}
              label="Contraseña"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              error={errors.password}
              placeholder="••••••••"
              helperText="Mínimo 6 caracteres"
            />
            <button
              type="button"
              className="absolute right-3 top-9 text-gray-400 hover:text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>

          <Input
            type="password"
            label="Confirmar Contraseña"
            value={formData.confirmPassword}
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            error={errors.confirmPassword}
            placeholder="••••••••"
          />

          <div className="flex items-start">
            <input
              type="checkbox"
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded mt-1"
              required
            />
            <label className="ml-2 text-sm text-gray-600">
              Acepto los{' '}
              <Link to="/terms" className="text-primary-600 hover:text-primary-800">
                términos y condiciones
              </Link>{' '}
              y la{' '}
              <Link to="/privacy" className="text-primary-600 hover:text-primary-800">
                política de privacidad
              </Link>
            </label>
          </div>

          <Button
            type="submit"
            isLoading={isLoading}
            className="w-full"
          >
            Crear Cuenta
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            ¿Ya tienes cuenta?{' '}
            <Link to="/login" className="text-primary-600 hover:text-primary-800 font-medium">
              Inicia sesión aquí
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
};