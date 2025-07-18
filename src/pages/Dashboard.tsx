import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Award, Clock, TrendingUp, ArrowRight } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { useAuth } from '../contexts/AuthContext';
import { mockCourses, mockUserProgress } from '../data/mockData';

export const Dashboard: React.FC = () => {
  const { user } = useAuth();
  
  // Get user progress for enrolled courses
  const userProgress = mockUserProgress.filter(progress => progress.userId === user?.id);
  const enrolledCourses = mockCourses.filter(course => 
    userProgress.some(progress => progress.courseId === course.id)
  );

  const totalCompletedLessons = userProgress.reduce(
    (total, progress) => total + progress.completedLessons.length, 
    0
  );

  const averageProgress = userProgress.length > 0 
    ? userProgress.reduce((sum, progress) => sum + progress.overallProgress, 0) / userProgress.length
    : 0;

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary-800 to-primary-600 rounded-lg p-8 text-white">
        <h1 className="text-2xl lg:text-3xl font-bold mb-2">
          ¡Bienvenido de vuelta, {user?.firstName}! 👋
        </h1>
        <p className="text-primary-100 mb-6">
          Continúa tu viaje de aprendizaje en videoconferencias educativas
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/courses">
            <Button variant="secondary" size="lg">
              Explorar Cursos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link to="/progress">
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary-800">
              Ver Mi Progreso
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="text-center">
          <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <BookOpen className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold text-primary-800 mb-1">
            {enrolledCourses.length}
          </h3>
          <p className="text-gray-600">Cursos Inscritos</p>
        </Card>

        <Card className="text-center">
          <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <Award className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-primary-800 mb-1">
            {totalCompletedLessons}
          </h3>
          <p className="text-gray-600">Lecciones Completadas</p>
        </Card>

        <Card className="text-center">
          <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <Clock className="h-6 w-6 text-yellow-600" />
          </div>
          <h3 className="text-2xl font-bold text-primary-800 mb-1">
            {Math.round(averageProgress)}%
          </h3>
          <p className="text-gray-600">Progreso Promedio</p>
        </Card>

        <Card className="text-center">
          <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <TrendingUp className="h-6 w-6 text-purple-600" />
          </div>
          <h3 className="text-2xl font-bold text-primary-800 mb-1">
            {userProgress.length > 0 ? 'Activo' : 'Inactivo'}
          </h3>
          <p className="text-gray-600">Estado de Aprendizaje</p>
        </Card>
      </div>

      {/* Current Courses */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-primary-800">
            Mis Cursos Actuales
          </h2>
          <Link to="/courses">
            <Button variant="outline" size="sm">
              Ver Todos
            </Button>
          </Link>
        </div>

        {enrolledCourses.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enrolledCourses.map((course) => {
              const progress = userProgress.find(p => p.courseId === course.id);
              const progressPercentage = progress?.overallProgress || 0;
              
              return (
                <Card key={course.id} hover className="group">
                  <img 
                    src={course.thumbnail} 
                    alt={course.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  
                  <div className="flex items-center space-x-2 mb-2">
                    <div className={`px-2 py-1 rounded text-sm font-medium ${
                      course.platform === 'zoom' ? 'bg-blue-100 text-blue-800' :
                      course.platform === 'meet' ? 'bg-green-100 text-green-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {course.platform === 'zoom' ? 'Zoom' : 
                       course.platform === 'meet' ? 'Google Meet' : 'Discord'}
                    </div>
                    <div className={`px-2 py-1 rounded text-sm font-medium ${
                      course.difficulty === 'beginner' ? 'bg-green-100 text-green-800' :
                      course.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {course.difficulty === 'beginner' ? 'Básico' :
                       course.difficulty === 'intermediate' ? 'Intermedio' : 'Avanzado'}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-primary-800 mb-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {course.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Progreso</span>
                      <span>{progressPercentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${progressPercentage}%` }}
                      ></div>
                    </div>
                  </div>

                  <Link to={`/course/${course.id}`}>
                    <Button variant="outline" className="w-full group-hover:bg-primary-800 group-hover:text-white">
                      {progressPercentage > 0 ? 'Continuar Curso' : 'Comenzar Curso'}
                    </Button>
                  </Link>
                </Card>
              );
            })}
          </div>
        ) : (
          <Card className="text-center py-12">
            <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              No tienes cursos inscritos aún
            </h3>
            <p className="text-gray-500 mb-6">
              Explora nuestro catálogo y comienza tu viaje de aprendizaje
            </p>
            <Link to="/courses">
              <Button>
                Explorar Cursos
              </Button>
            </Link>
          </Card>
        )}
      </div>

      {/* Recent Activity */}
      <Card>
        <h3 className="text-lg font-semibold text-primary-800 mb-4">
          Actividad Reciente
        </h3>
        <div className="space-y-4">
          {userProgress.length > 0 ? (
            userProgress.map((progress, index) => {
              const course = mockCourses.find(c => c.id === progress.courseId);
              return (
                <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                  <div className="bg-primary-100 p-2 rounded-full">
                    <BookOpen className="h-5 w-5 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">
                      Progreso en "{course?.title}"
                    </p>
                    <p className="text-sm text-gray-500">
                      Último acceso: {new Date(progress.lastAccessed).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-primary-600">
                      {progress.overallProgress}% completado
                    </p>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-8">
              <Clock className="h-12 w-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500">No hay actividad reciente</p>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};