import { useState } from 'react';

function Cards() {
  const futuramaCharacters = [
    {
      name: 'Philip J. Fry',
      avatarUrl: 'https://i.imgur.com/lWAi2sT.png',
    },
    {
      name: 'Turanga Leela',
      avatarUrl: 'https://i.imgur.com/gTK0CAr.png',
    },
    {
      name: 'Bender Bending Rodriguez',
      avatarUrl: 'https://i.imgur.com/c5ebN1S.png',
    },
    {
      name: 'Professor Hubert J. Farnsworth',
      avatarUrl: 'https://i.imgur.com/Ujmyf7E.png',
    },
  ];

  const [characters] = useState(futuramaCharacters);

  const listCharacters = characters.map((character) => (
    <Card character={character} />
  ));

  return (
    <div className="flex flex-wrap justify-center gap-8 px-8">
      {listCharacters}
    </div>
  );
}

function Card({ character }) {
  return (
    <div className="flex h-60 w-60 justify-center rounded-xl bg-white shadow-xl">
      <div>{character.name}</div>
    </div>
  );
}

export default Cards;
