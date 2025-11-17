
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-[#0A0F1A]/95 backdrop-blur-md text-white sticky top-0 z-50 border-b border-[#1BE7FF]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-[#1BE7FF] cursor-pointer flex items-center space-x-2">
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-rocket-line text-2xl"></i>
              </div>
              <span style={{ fontFamily: "Montserrat, sans-serif" }}>{t('common:companyName')}</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium cursor-pointer whitespace-nowrap transition-colors ${isActive('/') ? 'text-[#1BE7FF]' : 'text-white hover:text-[#1BE7FF]'}`}
            >
              {t('common:home')}
            </Link>
            <Link 
              to="/curriculum" 
              className={`font-medium cursor-pointer whitespace-nowrap transition-colors ${isActive('/curriculum') ? 'text-[#1BE7FF]' : 'text-white hover:text-[#1BE7FF]'}`}
            >
              {t('common:curriculum')}
            </Link>
            <Link 
              to="/projects" 
              className={`font-medium cursor-pointer whitespace-nowrap transition-colors ${isActive('/projects') ? 'text-[#1BE7FF]' : 'text-white hover:text-[#1BE7FF]'}`}
            >
              {t('common:projects')}
            </Link>
            <Link 
              to="/about" 
              className={`font-medium cursor-pointer whitespace-nowrap transition-colors ${isActive('/about') ? 'text-[#1BE7FF]' : 'text-white hover:text-[#1BE7FF]'}`}
            >
              {t('common:about')}
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium cursor-pointer whitespace-nowrap transition-colors ${isActive('/contact') ? 'text-[#1BE7FF]' : 'text-white hover:text-[#1BE7FF]'}`}
            >
              {t('common:contact')}
            </Link>
          </nav>

          {/* Language Switcher & CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <Link 
              to="/contact"
              className="px-6 py-2 bg-gradient-to-r from-[#1BE7FF] to-[#6C63FF] text-[#0A0F1A] font-semibold rounded-full hover:shadow-lg hover:shadow-[#1BE7FF]/25 transition-all cursor-pointer whitespace-nowrap"
            >
              {t('common:consultation')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white hover:text-[#1BE7FF] cursor-pointer"
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#1BE7FF]/20">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`font-medium cursor-pointer transition-colors ${isActive('/') ? 'text-[#1BE7FF]' : 'text-white hover:text-[#1BE7FF]'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('common:home')}
              </Link>
              <Link 
                to="/curriculum" 
                className={`font-medium cursor-pointer transition-colors ${isActive('/curriculum') ? 'text-[#1BE7FF]' : 'text-white hover:text-[#1BE7FF]'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('common:curriculum')}
              </Link>
              <Link 
                to="/projects" 
                className={`font-medium cursor-pointer transition-colors ${isActive('/projects') ? 'text-[#1BE7FF]' : 'text-white hover:text-[#1BE7FF]'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('common:projects')}
              </Link>
              <Link 
                to="/about" 
                className={`font-medium cursor-pointer transition-colors ${isActive('/about') ? 'text-[#1BE7FF]' : 'text-white hover:text-[#1BE7FF]'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('common:about')}
              </Link>
              <Link 
                to="/contact" 
                className={`font-medium cursor-pointer transition-colors ${isActive('/contact') ? 'text-[#1BE7FF]' : 'text-white hover:text-[#1BE7FF]'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('common:contact')}
              </Link>
            </nav>
            <div className="mt-4 pt-4 border-t border-[#1BE7FF]/20 flex flex-col space-y-3">
              <LanguageSwitcher />
              <Link 
                to="/contact"
                className="inline-block px-6 py-2 bg-gradient-to-r from-[#1BE7FF] to-[#6C63FF] text-[#0A0F1A] font-semibold rounded-full hover:shadow-lg hover:shadow-[#1BE7FF]/25 transition-all cursor-pointer whitespace-nowrap text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('common:consultation')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
