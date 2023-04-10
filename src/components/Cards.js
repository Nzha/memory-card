import { useState } from 'react';

function Cards() {
  const futuramaCharacters = [
    {
      id: 1,
      name: 'Philip J. Fry',
      avatarUrl: 'https://i.imgur.com/lWAi2sT.png',
    },
    {
      id: 2,
      name: 'Turanga Leela',
      avatarUrl: 'https://i.imgur.com/gTK0CAr.png',
    },
    {
      id: 3,
      name: 'Bender Bending Rodriguez',
      avatarUrl: 'https://i.imgur.com/c5ebN1S.png',
    },
    {
      id: 4,
      name: 'Professor Hubert J. Farnsworth',
      avatarUrl: 'https://i.imgur.com/Ujmyf7E.png',
    },
  ];

  const [characters, setCharacters] = useState(
    shuffleArray(futuramaCharacters)
  );

  function handleClick() {
    const randomChar = shuffleArray(futuramaCharacters);
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
      className="flex h-60 w-60 justify-center rounded-xl bg-white shadow-xl"
      onClick={handleClick}
    >
      <div>{character.name}</div>
    </button>
  );
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default Cards;
