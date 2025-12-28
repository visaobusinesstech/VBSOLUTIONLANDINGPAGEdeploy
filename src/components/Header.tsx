
import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: 'Início', href: '/' },
    { name: 'Sobre nós', href: '/sobre' },
    { name: 'Contato', href: '/contato' },
    { name: 'Agende uma Reunião', href: '/contato', isSpecial: true }
  ];

  const serviceItems = [
    { name: 'Rocket Mail', href: '/rocket-mail' },
    { name: 'Automações', href: '/automacoes' },
    { name: 'Análise de Dados', href: '/analise-dados' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-6">
      <div className="flex justify-center px-4">
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex bg-blue-900 rounded-full shadow-lg border border-blue-700 px-8 py-4">
          <div className="flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-all duration-300 px-4 py-2 rounded-full ${
                  item.isSpecial 
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md'
                    : `text-white hover:bg-blue-800 hover:text-blue-200 ${
                        location.pathname === item.href ? 'bg-blue-800 text-blue-200' : ''
                      }`
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className="text-white font-medium transition-all duration-300 px-4 py-2 rounded-full hover:bg-blue-800 hover:text-blue-200 flex items-center gap-2"
              >
                Serviços
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isServicesOpen && (
                <div 
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="absolute top-full left-0 mt-2 bg-blue-900 border border-blue-700 rounded-xl shadow-lg py-2 min-w-48"
                >
                  {serviceItems.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="block px-4 py-2 text-white hover:bg-blue-800 hover:text-blue-200 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden bg-blue-900 rounded-full shadow-lg border border-blue-700 p-3">
          <button
            className="text-white hover:text-blue-200 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 mx-4">
          <div className="bg-blue-900 rounded-3xl shadow-lg border border-blue-700 py-6 px-4">
            <nav className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium transition-all duration-300 p-3 rounded-full text-center ${
                    item.isSpecial 
                      ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md'
                      : `text-white hover:bg-blue-800 hover:text-blue-200 ${
                          location.pathname === item.href ? 'bg-blue-800 text-blue-200' : ''
                        }`
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Services */}
              <div className="border-t border-blue-700 pt-2 mt-2">
                <div className="text-blue-200 font-medium px-3 py-2 text-sm">Serviços:</div>
                {serviceItems.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    className="block text-white hover:bg-blue-800 hover:text-blue-200 transition-colors p-3 rounded-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
