interface HomeProps {
  onPlay: () => void;
}

const Home: React.FC<HomeProps> = ({ onPlay }) => {
  return (
    <div className="min-h-screen bg-[#121213] flex flex-col items-center justify-center gap-8 px-4">
      {/* Mini tile grid as the visual signature */}
      <div className="grid grid-cols-5 gap-1.5">
        {["W", "O", "R", "D", "L"].map((letter, i) => (
          <div
            key={i}
            className={`w-12 h-12 flex items-center justify-center text-2xl font-bold text-white border-2 rounded
              ${i === 0 ? "bg-[#538d4e] border-[#538d4e]" : ""}
              ${i === 1 ? "bg-[#b59f3b] border-[#b59f3b]" : ""}
              ${i > 1 ? "border-[#3a3a3c]" : ""}`}
          >
            {letter}
          </div>
        ))}
      </div>

      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-white tracking-tight mb-2">
          Wordle
        </h1>
        <p className="text-[#818384] text-lg">
          Guess the 5-letter word in 6 tries.
        </p>
      </div>

      <button
        onClick={onPlay}
        className="bg-[#538d4e] cursor-pointer hover:bg-[#4a7d45] text-white text-lg font-semibold
                   px-10 py-3 rounded-md transition-colors duration-150"
      >
        Play
      </button>
    </div>
  );
};

export default Home;
