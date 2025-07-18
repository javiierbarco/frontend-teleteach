import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  BookOpen, 
  TrendingUp, 
  User, 
  Heart, 
  Search,
  X
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { icon: Home, label: 'Dashboard', path: '/dashboard' },
  { icon: BookOpen, label: 'Cursos', path: '/courses' },
  { icon: Search, label: 'Explorar', path: '/explore' },
  { icon: TrendingUp, label: 'Mi Progreso', path: '/progress' },
  { icon: User, label: 'Perfil', path: '/profile' },
  { icon: Heart, label: 'Donaciones', path: '/donations' }
];

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-50 z-20 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 z-30 w-64 h-full bg-white border-r border-gray-200 
        transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:z-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex items-center justify-between p-4 border-b border-gray-200 lg:hidden">
          <span className="text-lg font-semibold text-primary-800">Menú</span>
          <button
            onClick={onClose}
            className="p-2 text-gray-600 hover:text-gray-900"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="mt-4 lg:mt-8">
          <div className="px-4 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  className={`
                    flex items-center px-4 py-3 rounded-lg transition-colors duration-200
                    ${isActive 
                      ? 'bg-primary-50 text-primary-800 border-r-2 border-primary-800' 
                      : 'text-gray-700 hover:bg-gray-100'
                    }
                  `}
                >
                  <Icon className="h-5 w-5 mr-3" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-accent-100 p-4 rounded-lg">
            <h4 className="font-semibold text-primary-800 mb-2">
              ¿Te gusta TeleTeach?
            </h4>
            <p className="text-sm text-gray-600 mb-3">
              Ayúdanos a seguir mejorando con tu donación.
            </p>
            <Link to="/donations">
              <button className="w-full bg-accent-500 text-primary-800 py-2 px-4 rounded-lg font-medium hover:bg-accent-400 transition-colors">
                Donar Ahora
              </button>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};