import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { User, AuthState } from '../types';

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: Omit<User, 'id' | 'registrationDate' | 'lastLogin'>) => Promise<boolean>;
  logout: () => void;
  updateProfile: (userData: Partial<User>) => Promise<boolean>;
  resetPassword: (email: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthAction = 
  | { type: 'LOGIN_START' }
  | { type: 'LOGIN_SUCCESS'; payload: User }
  | { type: 'LOGIN_FAILURE' }
  | { type: 'LOGOUT' }
  | { type: 'UPDATE_USER'; payload: User };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN_START':
      return { ...state, isLoading: true };
    case 'LOGIN_SUCCESS':
      return { 
        user: action.payload, 
        isAuthenticated: true, 
        isLoading: false 
      };
    case 'LOGIN_FAILURE':
      return { 
        user: null, 
        isAuthenticated: false, 
        isLoading: false 
      };
    case 'LOGOUT':
      return { 
        user: null, 
        isAuthenticated: false, 
        isLoading: false 
      };
    case 'UPDATE_USER':
      return { 
        ...state, 
        user: action.payload 
      };
    default:
      return state;
  }
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    isAuthenticated: false,
    isLoading: false
  });

  useEffect(() => {
    // Check for stored user data on app start
    const storedUser = localStorage.getItem('teleteach_user');
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        dispatch({ type: 'LOGIN_SUCCESS', payload: user });
      } catch (error) {
        localStorage.removeItem('teleteach_user');
      }
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    dispatch({ type: 'LOGIN_START' });
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock authentication logic
    if (email && password.length >= 6) {
      const user: User = {
        id: '1',
        email,
        firstName: 'Usuario',
        lastName: 'Demo',
        role: 'student',
        registrationDate: new Date().toISOString(),
        lastLogin: new Date().toISOString()
      };
      
      localStorage.setItem('teleteach_user', JSON.stringify(user));
      dispatch({ type: 'LOGIN_SUCCESS', payload: user });
      return true;
    } else {
      dispatch({ type: 'LOGIN_FAILURE' });
      return false;
    }
  };

  const register = async (userData: Omit<User, 'id' | 'registrationDate' | 'lastLogin'>): Promise<boolean> => {
    dispatch({ type: 'LOGIN_START' });
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const user: User = {
      ...userData,
      id: Date.now().toString(),
      registrationDate: new Date().toISOString(),
      lastLogin: new Date().toISOString()
    };
    
    localStorage.setItem('teleteach_user', JSON.stringify(user));
    dispatch({ type: 'LOGIN_SUCCESS', payload: user });
    return true;
  };

  const logout = () => {
    localStorage.removeItem('teleteach_user');
    dispatch({ type: 'LOGOUT' });
  };

  const updateProfile = async (userData: Partial<User>): Promise<boolean> => {
    if (!state.user) return false;
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const updatedUser = { ...state.user, ...userData };
    localStorage.setItem('teleteach_user', JSON.stringify(updatedUser));
    dispatch({ type: 'UPDATE_USER', payload: updatedUser });
    return true;
  };

  const resetPassword = async (email: string): Promise<boolean> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    return true; // Always return true for demo
  };

  return (
    <AuthContext.Provider value={{
      ...state,
      login,
      register,
      logout,
      updateProfile,
      resetPassword
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};