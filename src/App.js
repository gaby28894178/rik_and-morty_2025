import React, { useState } from 'react';
import MenuHamburguesa from './components/MenuHamburguesa';
import Buscador from './components/Buscador';
import CharacterGrid from './components/CharacterGrid';
import Footer from './components/Footer';
import characters from './mock/data';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCharacters, setFilteredCharacters] = useState(characters);
  const [currentView, setCurrentView] = useState('characters');
  
  const handleSearch = (term) => {
    setSearchTerm(term);
    const filtered = characters.filter(character =>
      character.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredCharacters(filtered);
  };

  const handleRandom = () => {
    const randomIndex = Math.floor(Math.random() * characters.length);
    setFilteredCharacters([characters[randomIndex]]);
    setSearchTerm('');
  };

  const handleFilterBySpecies = () => {
    const species = ['Human', 'Alien', 'Humanoid', 'Robot'];
    const randomSpecies = species[Math.floor(Math.random() * species.length)];
    const filtered = characters.filter(character => 
      character.species === randomSpecies
    );
    setFilteredCharacters(filtered);
    setSearchTerm('');
  };

  const renderView = () => {
    switch(currentView) {
      case 'home':
        return (
          <div className="text-center py-20">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Bienvenido al Multiverso</h2>
            <p className="text-gray-600">Selecciona una opción del menú para comenzar</p>
          </div>
        );
      case 'episodes':
        return (
          <div className="text-center py-20">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Episodios</h2>
            <p className="text-gray-600">Próximamente: Todos los episodios de Rick y Morty</p>
          </div>
        );
      case 'characters':
      default:
        return (
          <>
            {filteredCharacters.length > 0 ? (
              <CharacterGrid characters={filteredCharacters} />
            ) : (
              <div className="text-center py-10">
                <p className="text-xl text-gray-600">¡No se encontraron personajes!</p>
                <p className="text-gray-500">Intenta con otro nombre, Morty</p>
              </div>
            )}
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-600">Rick & Morty</h1>
          <div className="flex items-center space-x-4">
            {currentView === 'characters' && <Buscador onSearch={handleSearch} />}
            <MenuHamburguesa onNavigate={setCurrentView} />
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        {renderView()}
      </main>

      <Footer 
        onRandom={handleRandom} 
        onFilterBySpecies={handleFilterBySpecies} 
      />
    </div>
  );
};
export default App;

// DONE