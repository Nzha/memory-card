import { useState } from 'react';
import data from '../utilities/data';
import shuffleArray from '../utilities/utils';

function Cards({ currentScore, setCurrentScore, bestScore, setBestScore }) {
  const [characters, setCharacters] = useState(shuffleArray(data));

  function handleClick(charId) {
    const newChars = [...characters];
    const charClicked = newChars.find((char) => char.id === charId);

    if (charClicked.clicked === true) {
      if (currentScore > bestScore) setBestScore(currentScore);
      setCurrentScore(0);
      newChars.map((char) => (char.clicked = false));
    } else {
      setCurrentScore(currentScore + 1);
      charClicked.clicked = true;
    }

    const randomChar = shuffleArray(newChars);
    setCharacters([...randomChar]);
  }

  const listCharacters = characters.map((character) => (
    <Card key={character.id} character={character} handleClick={handleClick} />
  ));

  return (
    <div className="flex flex-wrap justify-center gap-8 px-8">
      {listCharacters}
    </div>
  );
}

function Card({ character, handleClick }) {
  return (
    <button
      className="flex h-60 w-52 flex-col items-center justify-between rounded-xl border border-white bg-white shadow-xl transition-transform duration-75 hover:scale-110"
      onClick={() => handleClick(character.id)}
    >
      <img
        src={character.avatarUrl}
        alt={character.name}
        className="h-48 w-52 rounded-t-xl"
      />
      <div className="px-2 py-2">{character.name}</div>
    </button>
  );
}

export default Cards;
