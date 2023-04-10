function Score({ currentScore, bestScore }) {
  return (
    <div className="flex gap-20 self-center">
      <div>Current score: {currentScore}</div>
      <div>Best score: {bestScore}</div>
    </div>
  );
}

export default Score;
