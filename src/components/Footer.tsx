
import React from 'react';
import { Linkedin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-4 h-4" />,
      url: 'https://www.linkedin.com/company/visão-business-soluções-digitais/?viewAsMember=true',
      color: 'hover:bg-blue-600'
    },
    {
      name: 'Instagram',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      url: 'https://www.instagram.com/visaobusiness',
      color: 'hover:bg-pink-600'
    },
    {
      name: 'WhatsApp',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      ),
      url: 'https://wa.me/5541997772066?text=Ol%C3%A1%20tudo%20bem%3F%20Tenho%20interesse%20em%20conhcer%20o%20VBSolution%20CRM%20solicito%20uma%20demonstra%C3%A7%C3%A3o%21',
      color: 'hover:bg-green-600'
    }
  ];

  return (
    <footer className="bg-bg-darker border-t border-blue-500/20 py-2 sm:py-3 font-sans">
      <div className="max-w-3xl px-3 sm:px-4 ml-5 sm:ml-10">
        <div className="grid grid-cols-1 gap-3">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-2 sm:mb-3">
              <img 
                src="/lovable-uploads/fd318cfe-a33a-4323-aea5-ad50995fd4f9.png" 
                alt="VB Logo" 
                className="h-5 sm:h-6 w-auto logo-highlight mr-2 sm:mr-2"
              />
              <span className="text-sm sm:text-base font-semibold text-white">
                Visão Business
              </span>
            </div>
            <p className="text-gray-300 mb-2 sm:mb-3 leading-relaxed max-w-md text-sm sm:text-sm">
              Transformamos sua rotina com soluções sob medida a partir da empresa destaque no setor de tecnologia empresarial.
            </p>
            
            {/* Social Icons */}
            <div className="flex justify-start space-x-1 sm:space-x-2">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-blue-500/20 border border-blue-500/30 p-1 sm:p-1 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-blue-500/30 ${social.color} group`}
                  aria-label={social.name}
                >
                  <div className="text-white group-hover:text-white transition-colors">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Seções removidas para um rodapé mais compacto */}
        </div>

        <div className="border-t border-blue-500/20 mt-3 sm:mt-4 pt-2 sm:pt-3">
          <div className="flex flex-col md:flex-row justify-start items-start md:items-center gap-2 md:gap-3">
            <div className="text-gray-400 text-xs sm:text-xs mb-2 md:mb-0 text-left">
              © 2025 Visão Business. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-xs md:ml-4">
              <a href="#" className="text-gray-400 blue-hover p-1 rounded transition-colors">
                LGPD
              </a>
              <a href="#" className="text-gray-400 blue-hover p-1 rounded transition-colors">
                Política de Privacidade
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
