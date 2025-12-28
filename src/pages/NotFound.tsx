
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import CentralNavbar from "../components/CentralNavbar";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen tech-background w-full">
      <CentralNavbar />
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">404</h1>
          <p className="text-xl text-gray-300 mb-4">Oops! Página não encontrada</p>
          <a href="/" className="text-blue-400 hover:text-blue-300 underline">
            Voltar ao Início
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
