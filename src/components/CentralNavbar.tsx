
import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronDown, Crown } from 'lucide-react';
import MobileNavbar from './MobileNavbar';
/* removed extra animation components to keep navbar clean */

const CentralNavbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const mainMenuItems = [
    { name: 'Início', href: '/' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contato', href: '#contato' }
  ];

  const serviceItems: Array<{name: string; href: string}> = [];

  // Fechar dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleServicesDropdown = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const closeDropdown = () => {
    setIsServicesOpen(false);
  };

  return (
    <>
      {/* Mobile Navbar */}
      <MobileNavbar />
      
      {/* Desktop Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 pt-6 hidden sm:block">
        <div className="flex justify-center px-4">
          <nav className="bg-black/10 border border-white/20 rounded-full shadow-lg px-6 py-3 backdrop-blur-sm">
          <div className="flex items-center space-x-6">
            {/* Logo VB - com brilho muito aumentado */}
            <a href="/" className="flex items-center mr-3">
              <img 
                src="/lovable-uploads/18f2c9f2-1632-4bf2-b0aa-70a38d4e33b6.png"
                alt="VB Logo"
                className="h-12 w-auto" // aumentei de h-8 para h-12
                style={{ filter: 'brightness(0)' }}
              />
            </a>

            {/* Menu Items */}
            {mainMenuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-medium transition-all duration-300 px-3 py-2 rounded-full text-black hover:bg-black/10 hover:text-blue-600`}
              >
                {item.name}
              </a>
            ))}
            
            {/* Services Dropdown removido; links diretos no menu */}

            {/* Schedule Button */}
            <a
              href="https://api.whatsapp.com/send/?phone=5541997772066&text=Ol%C3%A1%20tudo%20bem%3F%20Tenho%20interesse%20em%20conhcer%20o%20VBSolution%20CRM%20solicito%20uma%20demonstra%C3%A7%C3%A3o%21&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#3b82f6] to-[#3b82f6] text-white font-semibold px-5 py-2 rounded-full shadow-md transition-all duration-300 flex items-center gap-2"
            >
              Quero vender mais
              <Crown className="w-4 h-4 text-yellow-500" />
            </a>
          </div>
        </nav>
      </div>
    </header>
    </>
  );
};

export default CentralNavbar;
