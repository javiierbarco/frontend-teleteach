import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Clock, Users, Star } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { mockCourses } from '../data/mockData';

export const Courses: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredCourses = mockCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesPlatform = selectedPlatform === 'all' || course.platform === selectedPlatform;
    const matchesDifficulty = selectedDifficulty === 'all' || course.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesPlatform && matchesDifficulty;
  });

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'zoom': return 'bg-blue-100 text-blue-800';
      case 'meet': return 'bg-green-100 text-green-800';
      case 'discord': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPlatformName = (platform: string) => {
    switch (platform) {
      case 'zoom': return 'Zoom';
      case 'meet': return 'Google Meet';
      case 'discord': return 'Discord';
      default: return platform;
    }
  };

  const getDifficultyName = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'Básico';
      case 'intermediate': return 'Intermedio';
      case 'advanced': return 'Avanzado';
      default: return difficulty;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-primary-800 mb-4">
          Catálogo de Cursos
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Descubre nuestros cursos especializados en videoconferencias educativas. 
          Desde fundamentos hasta técnicas avanzadas.
        </p>
      </div>

      {/* Search and Filters */}
      <Card>
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Buscar cursos por título, descripción o etiquetas..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2"
            >
              <Filter className="h-4 w-4" />
              <span>Filtros</span>
            </Button>
          </div>

          {showFilters && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t">
              <div>
                <label htmlFor='platforma' className="block text-sm font-medium text-gray-700 mb-1">
                  Plataforma
                </label>
                <select
                  id='platforma'
                  value={selectedPlatform}
                  onChange={(e) => setSelectedPlatform(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="all">Todas las plataformas</option>
                  <option value="zoom">Zoom</option>
                  <option value="meet">Google Meet</option>
                  <option value="discord">Discord</option>
                </select>
              </div>
              <div>
                <label htmlFor='dificultad' className="block text-sm font-medium text-gray-700 mb-1">
                  Nivel de Dificultad
                </label>
                <select
                  id='dificultad'
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="all">Todos los niveles</option>
                  <option value="beginner">Básico</option>
                  <option value="intermediate">Intermedio</option>
                  <option value="advanced">Avanzado</option>
                </select>
              </div>
            </div>
          )}
        </div>
      </Card>

      {/* Course Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.map((course) => (
          <Card key={course.id} hover className="group">
            <img 
              src={course.thumbnail} 
              alt={course.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            
            <div className="flex items-center space-x-2 mb-3">
              <div className={`px-2 py-1 rounded text-sm font-medium ${getPlatformColor(course.platform)}`}>
                {getPlatformName(course.platform)}
              </div>
              <div className={`px-2 py-1 rounded text-sm font-medium ${getDifficultyColor(course.difficulty)}`}>
                {getDifficultyName(course.difficulty)}
              </div>
            </div>

            <h3 className="text-lg font-semibold text-primary-800 mb-2">
              {course.title}
            </h3>
            <p className="text-gray-600 mb-4 line-clamp-3">
              {course.description}
            </p>

            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{course.duration} min</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4" />
                <span>{course.lessons.length} lecciones</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-500" />
                <span>4.8</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-1 mb-4">
              {course.tags.slice(0, 3).map((tag, index) => (
                <span 
                  key={index}
                  className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                >
                  {tag}
                </span>
              ))}
              {course.tags.length > 3 && (
                <span className="text-gray-400 text-xs">
                  +{course.tags.length - 3} más
                </span>
              )}
            </div>

            <Link to={`/course/${course.id}`}>
              <Button 
                variant="outline" 
                className="w-full group-hover:bg-primary-800 group-hover:text-white transition-all duration-200"
              >
                Ver Curso
              </Button>
            </Link>
          </Card>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <Card className="text-center py-12">
          <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            No se encontraron cursos
          </h3>
          <p className="text-gray-500 mb-6">
            Intenta ajustar tus filtros de búsqueda
          </p>
          <Button
            variant="outline"
            onClick={() => {
              setSearchTerm('');
              setSelectedPlatform('all');
              setSelectedDifficulty('all');
            }}
          >
            Limpiar Filtros
          </Button>
        </Card>
      )}
    </div>
  );
};