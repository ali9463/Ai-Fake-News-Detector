import React, { useState } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Moon,
  Sun,
  Menu,
  X,
  Shield,
  User,
  LogOut,
  Home,
  UserPlus,
  LogIn,
  Newspaper,
  TrendingUp,
  SearchCheck,
  Mail
} from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useAuth } from '../../contexts/AuthContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { user, logout, isAuthenticated } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMobileMenuOpen(false);
    setShowUserMenu(false);
  };

  const unauthenticatedNavItems = [
    { name: 'Features', path: '/#features' },
    { name: 'How It Works', path: '/#how-it-works' },
    { name: 'Testimonials', path: '/#testimonials' },
  ];

  const authenticatedNavItems = [
    { name: 'Home', path: '/dashboard', icon: Home },
    { name: 'News Analyzer', path: '/news-analyzer', icon: SearchCheck },
    { name: 'Trending News', path: '/trending-news', icon: TrendingUp },
    { name: 'Articles', path: '/articles', icon: Newspaper },
    { name: 'Contact Us', path: '/contact', icon: Mail },
  ];

  const authActionItems = [
    { name: 'Sign Up', path: '/signup', icon: UserPlus },
    { name: 'Sign In', path: '/login', icon: LogIn }
  ];

  const NavItem = ({ to, children }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive
          ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
          : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
        }`
      }
    >
      {children}
    </NavLink>
  );

  const MobileNavItem = ({ to, icon: Icon, children, onClick }) => (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${isActive
          ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
          : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800'
        }`
      }
    >
      <Icon className="h-5 w-5" />
      <span>{children}</span>
    </NavLink>
  );

  return (
    <nav className="bg-white/95 dark:bg-gray-900/95 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to={isAuthenticated ? "/dashboard" : "/"} className="flex items-center space-x-2 group">
          
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Fake News Detector
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {isAuthenticated ? (
              authenticatedNavItems.map(item => <NavItem key={item.name} to={item.path}>{item.name}</NavItem>)
            ) : (
              unauthenticatedNavItems.map(item => (
                <a key={item.name} href={item.path} className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {item.name}
                </a>
              ))
            )}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </motion.button>

            {/* Auth Navigation */}
            {!isAuthenticated ? (
              <div className="flex items-center space-x-2">
                <Link to="/login" className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Sign In
                </Link>
                <Link to="/signup">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 py-2 rounded-lg text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                  >
                    Sign Up
                  </motion.div>
                </Link>
              </div>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-2 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="h-8 w-8 rounded-full border-2 border-blue-200 dark:border-blue-800"
                  />
                </button>

                {showUserMenu && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1"
                  >
                    <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                      <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{user.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{user.email}</p>
                    </div>
                    <Link
                      to="/profile"
                      onClick={() => setShowUserMenu(false)}
                      className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <User className="h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Logout</span>
                    </button>
                  </motion.div>
                )}
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300"
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </motion.button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="space-y-2">
              {isAuthenticated ? (
                authenticatedNavItems.map(item => (
                  <MobileNavItem key={item.name} to={item.path} icon={item.icon} onClick={() => setIsMobileMenuOpen(false)}>
                    {item.name}
                  </MobileNavItem>
                ))
              ) : (
                <>
                  {unauthenticatedNavItems.map(item => (
                    <a key={item.name} href={item.path} onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200">
                      {item.name}
                    </a>
                  ))}
                  <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700 space-y-2">
                    {authActionItems.map(item => (
                      <MobileNavItem key={item.name} to={item.path} icon={item.icon} onClick={() => setIsMobileMenuOpen(false)}>
                        {item.name}
                      </MobileNavItem>
                    ))}
                  </div>
                </>
              )}

              {isAuthenticated && (
                <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700 space-y-2">
                  <div className="flex items-center space-x-3 px-3 py-2">
                    <img src={user.avatar} alt={user.name} className="h-10 w-10 rounded-full border-2 border-blue-200 dark:border-blue-800" />
                    <div>
                      <span className="text-base font-medium text-gray-700 dark:text-gray-300">{user.name}</span>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{user.email}</p>
                    </div>
                  </div>
                  <MobileNavItem to="/profile" icon={User} onClick={() => setIsMobileMenuOpen(false)}>Profile</MobileNavItem>
                  <button onClick={handleLogout} className="flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 w-full text-left transition-all duration-200">
                    <LogOut className="h-5 w-5" />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
