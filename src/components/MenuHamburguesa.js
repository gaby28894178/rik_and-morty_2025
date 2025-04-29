import React, { useState } from 'react';

const MenuHamburguesa = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (view) => {
    setIsOpen(false);
    onNavigate(view);
  };

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 focus:outline-none"
      >
        <div className={`w-6 h-0.5 bg-black mb-1.5 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-black mb-1.5 transition-all ${isOpen ? 'opacity-0' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-black transition-all ${isOpen ? '-rotate-45' : ''}`}></div>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 border border-gray-200">
          <div className="py-1">
            <button 
              onClick={() => handleNavigation('home')}
              className="block w-full text-left px-4 py-2 text-sm text-black hover:bg-blue-600 hover:text-white"
            >
              Inicio
            </button>
            <button 
              onClick={() => handleNavigation('characters')}
              className="block w-full text-left px-4 py-2 text-sm text-black hover:bg-blue-600 hover:text-white"
            >
              Personajes
            </button>
            <button 
              onClick={() => handleNavigation('episodes')}
              className="block w-full text-left px-4 py-2 text-sm text-black hover:bg-blue-600 hover:text-white"
            >
              Episodios
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default MenuHamburguesa;