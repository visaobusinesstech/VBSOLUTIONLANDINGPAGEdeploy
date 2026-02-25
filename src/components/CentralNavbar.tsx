
import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { ShinyButton } from './ui/shiny-button';
import MobileNavbar from './MobileNavbar';
/* removed extra animation components to keep navbar clean */
import { getWhatsAppUrl } from '../utils/whatsapp';

const CentralNavbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const mainMenuItems = [
    { name: 'Início', href: '/' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Planos', href: '/planos' },
    { name: 'Contato', href: '/contato' }
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
      <MobileNavbar />
      
      <header className="fixed top-0 left-0 right-0 z-50 pt-6 hidden sm:block">
        <div className="flex justify-center px-4">
          <nav className="bg-black/10 border border-white/20 rounded-full shadow-lg px-6 py-3 backdrop-blur-sm">
            <div className="flex items-center space-x-6">
              <a href="/" className="flex items-center mr-3">
                <img 
                  src="/lovable-uploads/18f2c9f2-1632-4bf2-b0aa-70a38d4e33b6.png"
                  alt="VB Logo"
                  className="h-12 w-auto"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </a>

              {mainMenuItems.map((item) => {
                const itemHref =
                  location.pathname === '/planos' && item.name === 'Serviços'
                    ? '/'
                    : item.href;
                return (
                  <a
                    key={item.name}
                    href={itemHref}
                    className="font-medium transition-all duration-300 px-3 py-2 rounded-full text-white hover:bg-white/10 hover:text-white"
                  >
                    {item.name}
                  </a>
                );
              })}

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <ShinyButton className="text-base" size="md">
                  Agendar Demonstração
                </ShinyButton>
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default CentralNavbar;
