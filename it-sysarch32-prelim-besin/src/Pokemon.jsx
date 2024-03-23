// Pokemon.jsx
import React from 'react';

function Pokemon({ pokemon, language }) {
  const getNameByLanguage = () => {
    switch (language) {
      case 'japanese':
        return pokemon.name.japanese;
      case 'chinese':
        return pokemon.name.chinese;
      case 'french':
        return pokemon.name.french;
      default:
        return pokemon.name.english;
    }
  };

  return (
    <div className="pokemon-card">
      <img src={pokemon.image} alt={pokemon.name.english} className="pokemon-image" />
      <div className="id-pokemon">
        <p>[{pokemon.id}]  {getNameByLanguage()} </p>
      </div>
      
      <div className="type-container">
        {pokemon.type.map((type, index) => (
          <p key={index} className='border'>{type}</p>
        ))}
      </div>

      <div className="pokemon-details">
        <div className="group">
          <p>HP: {pokemon.base.HP}</p>
          <p>Speed: {pokemon.base.Speed}</p>
        </div>
        <div className="group">
          <p>Attack: {pokemon.base.Attack}</p>
          <p>Sp.Attk: {pokemon.base['Sp. Attack']}</p>
        </div>
        <div className="group">
          <p>Defense: {pokemon.base.Defense}</p>
          <p>Sp.Defense: {pokemon.base['Sp. Defense']}</p>
        </div>
      </div>
    </div>
  );
}

export default Pokemon;
