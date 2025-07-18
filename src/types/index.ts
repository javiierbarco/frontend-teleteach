export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'student' | 'admin';
  registrationDate: string;
  lastLogin?: string;
  avatar?: string;
  bio?: string;
  phone?: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  platform: 'zoom' | 'meet' | 'discord';
  duration: number; // in minutes
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  lessons: Lesson[];
  thumbnail: string;
  tags: string[];
  createdAt: string;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  content: string;
  videoUrl?: string;
  duration: number;
  order: number;
  quiz?: Quiz;
}

export interface Quiz {
  id: string;
  questions: Question[];
  passingScore: number;
}

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface UserProgress {
  userId: string;
  courseId: string;
  completedLessons: string[];
  quizScores: { [lessonId: string]: number };
  overallProgress: number;
  lastAccessed: string;
}

export interface Donation {
  id: string;
  userId: string;
  amount: number;
  currency: string;
  status: 'pending' | 'completed' | 'failed';
  date: string;
  paymentMethod: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}