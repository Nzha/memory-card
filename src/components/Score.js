function Score({ currentScore, bestScore }) {
  return (
    <div className="flex gap-20 self-center text-lg font-bold">
      <div className="rounded-full bg-[#facba1] px-6 py-2">
        Current score: {currentScore}
      </div>
      <div className="rounded-full bg-[#ed9d00] px-6 py-2">
        Best score: {bestScore}
      </div>
    </div>
  );
}

export default Score;
