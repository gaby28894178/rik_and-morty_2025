import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterGrid = ({ characters }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {characters.map(character => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};
export default CharacterGrid;

// DONE