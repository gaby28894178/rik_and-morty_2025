import React from 'react';

const Footer = ({ onRandom, onFilterBySpecies }) => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-blue-500">Rick & Morty Explorer</h2>
            <p className="mt-2 text-gray-400">© {new Date().getFullYear()} Todos los derechos reservados</p>
          </div>
          <div className="flex space-x-4">
            <button 
              onClick={onRandom}
              className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
            >
              Buscar Random
            </button>
            <button 
              onClick={onFilterBySpecies}
              className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
            >
              Por Especie
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;