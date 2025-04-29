import React from 'react';

const getDimensionColor = (origin) => {
  const dimensionColors = {
    'Earth (C-137)': 'border-l-2 border-green-400',
    'Earth (Replacement Dimension)': 'border-l-2 border-blue-400',
    'Citadel of Ricks': 'border-l-2 border-purple-400',
    'unknown': 'border-l-2 border-yellow-400',
    'Abadango': 'border-l-2 border-pink-400',
    'Post-Apocalyptic Earth': 'border-l-2 border-red-400',
    default: 'border-l-2 border-gray-300'
  };

  return dimensionColors[origin] || dimensionColors.default;
};

const CharacterCard = ({ character }) => {
  const dimensionClass = getDimensionColor(character.origin.name);

  return (
    <div className={`bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-200 ${dimensionClass}`}>
      <div className="flex">
        <img 
          src={character.image} 
          alt={character.name}
          className="w-24 h-24 object-cover"
        />
        <div className="p-4 flex-1">
          <h3 className="text-lg font-medium text-gray-800">{character.name}</h3>
          <div className="flex items-center mt-1">
            <span className={`inline-block w-2 h-2 rounded-full mr-2 ${character.status === 'Alive' ? 'bg-green-400' : 'bg-red-400'}`}></span>
            <span className="text-xs text-gray-600">
              {character.status} - {character.species}
            </span>
          </div>
          <div className="mt-2">
            <p className="text-xs text-gray-400">Origen:</p>
            <p className="text-sm text-gray-700">{character.origin.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CharacterCard;