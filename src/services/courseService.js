// src/services/courseService.js

const API_URL = 'http://localhost:8001/api/courses';

export async function getCourses() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Error al obtener cursos');
    return await response.json();
  } catch (error) {
    console.error('Error en getCourses:', error);
    return [];
  }
}

export async function getCourseById(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) throw new Error('Error al obtener detalles del curso');
    return await response.json();
  } catch (error) {
    console.error('Error en getCourseById:', error);
    return null;
  }
}
