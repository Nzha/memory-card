import { useState } from 'react';
import Score from './Score';
import Cards from './Cards';

function Main() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div className="flex flex-col gap-8 bg-[#7bd0f5] py-8">
      <Score currentScore={currentScore} bestScore={bestScore} />
      <Cards
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
        bestScore={bestScore}
        setBestScore={setBestScore}
      />
    </div>
  );
}

export default Main;
