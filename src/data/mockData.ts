import { Course, UserProgress, Donation } from '../types';

export const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Zoom para Educadores: Fundamentos',
    description: 'Aprende los conceptos básicos de Zoom para crear clases virtuales efectivas.',
    platform: 'zoom',
    duration: 120,
    difficulty: 'beginner',
    thumbnail: 'https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&w=400',
    tags: ['zoom', 'básico', 'videoconferencia', 'aula virtual'],
    createdAt: '2024-01-15',

    ovaPath: 'ova/zoom-fundamentos', // RUTA AL OVA
    
    lessons: [
      {
        id: '1-1',
        title: 'Introducción a Zoom',
        description: 'Conoce la interfaz y funciones básicas de Zoom.',
        content: 'En esta lección aprenderás sobre la interfaz principal de Zoom, cómo crear una cuenta y configurar tu perfil básico.',
        duration: 15,
        order: 1,
        quiz: {
          id: 'quiz-1-1',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: '¿Cuál es la función principal del botón "Mute" en Zoom?',
              options: ['Silenciar el micrófono', 'Apagar la cámara', 'Salir de la reunión', 'Compartir pantalla'],
              correctAnswer: 0,
              explanation: 'El botón "Mute" se usa para silenciar y activar el micrófono durante una videollamada.'
            },
            {
              id: 'q2',
              question: '¿Cómo puedes acceder a los controles de la reunión en Zoom?',
              options: ['Presionando Ctrl+Alt', 'Moviendo el mouse sobre la ventana', 'Haciendo clic derecho', 'Presionando Espacio'],
              correctAnswer: 1,
              explanation: 'Los controles aparecen automáticamente cuando mueves el mouse sobre la ventana de Zoom.'
            }
          ]
        }
      },
      {
        id: '1-2',
        title: 'Configuración de Audio y Video',
        description: 'Optimiza tu configuración de audio y video para mejores clases.',
        content: 'Aprende a configurar correctamente tu micrófono, cámara y opciones de audio para obtener la mejor calidad en tus clases virtuales.',
        duration: 20,
        order: 2,
        quiz: {
          id: 'quiz-1-2',
          passingScore: 70,
          questions: [
            {
              id: 'q3',
              question: '¿Qué configuración de audio es recomendable para educadores?',
              options: ['Audio automático', 'Micrófono siempre activo', 'Suprimir ruido de fondo', 'Volumen al máximo'],
              correctAnswer: 2,
              explanation: 'La supresión de ruido de fondo ayuda a mantener una clase más profesional y sin distracciones.'
            }
          ]
        }
      }
    ]
  },

  {
    id: '2',
    title: 'Google Meet Avanzado para Docentes',
    description: 'Domina las funciones avanzadas de Google Meet para maximizar el aprendizaje.',
    platform: 'meet',
    duration: 90,
    difficulty: 'intermediate',
    thumbnail: 'https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=400',
    tags: ['google meet', 'intermedio', 'educación', 'colaboración'],
    createdAt: '2024-01-20',

    ovaPath: '/ovas/meet.html', // RUTA AL OVA

    lessons: [
      {
        id: '2-1',
        title: 'Funciones Colaborativas en Meet',
        description: 'Usa herramientas de colaboración para clases interactivas.',
        content: 'Descubre cómo usar las pizarras digitales, salas de grupos y otras funciones colaborativas de Google Meet.',
        duration: 25,
        order: 1,
        quiz: {
          id: 'quiz-2-1',
          passingScore: 75,
          questions: [
            {
              id: 'q4',
              question: '¿Cuál es la ventaja principal de las salas de grupos en Meet?',
              options: ['Reducir el ancho de banda', 'Facilitar trabajo en equipo', 'Grabar automáticamente', 'Mejorar el audio'],
              correctAnswer: 1,
              explanation: 'Las salas de grupos permiten dividir a los estudiantes en equipos pequeños para trabajo colaborativo.'
            }
          ]
        }
      }
    ]
  },

  {
    id: '3',
    title: 'Discord para Comunidades Educativas',
    description: 'Crea y gestiona comunidades educativas efectivas usando Discord.',
    platform: 'discord',
    duration: 150,
    difficulty: 'advanced',
    thumbnail: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=400',
    tags: ['discord', 'avanzado', 'comunidad', 'moderación'],
    createdAt: '2024-01-25',

    ovaPath: 'ova/discord-comunidades', // RUTA AL OVA
    
    lessons: [
      {
        id: '3-1',
        title: 'Configuración de Servidor Educativo',
        description: 'Aprende a configurar un servidor de Discord para uso educativo.',
        content: 'Paso a paso para crear y configurar un servidor de Discord optimizado para el aprendizaje.',
        duration: 30,
        order: 1,
        quiz: {
          id: 'quiz-3-1',
          passingScore: 80,
          questions: [
            {
              id: 'q5',
              question: '¿Qué tipo de canal es mejor para anuncios importantes?',
              options: ['Canal de voz', 'Canal de texto normal', 'Canal de anuncios', 'Canal de hilo'],
              correctAnswer: 2,
              explanation: 'Los canales de anuncios están diseñados específicamente para comunicaciones importantes y unidireccionales.'
            }
          ]
        }
      }
    ]
  }
];

export const mockUserProgress: UserProgress[] = [
  {
    userId: '1',
    courseId: '1',
    completedLessons: ['1-1'],
    quizScores: { '1-1': 85 },
    overallProgress: 50,
    lastAccessed: '2024-01-28'
  },
  {
    userId: '1',
    courseId: '2',
    completedLessons: [],
    quizScores: {},
    overallProgress: 0,
    lastAccessed: '2024-01-26'
  }
];

export const mockDonations: Donation[] = [
  {
    id: '1',
    userId: '1',
    amount: 25,
    currency: 'USD',
    status: 'completed',
    date: '2024-01-20',
    paymentMethod: 'Tarjeta de Crédito'
  },
  {
    id: '2',
    userId: '1',
    amount: 10,
    currency: 'USD',
    status: 'completed',
    date: '2024-01-15',
    paymentMethod: 'PayPal'
  }
];