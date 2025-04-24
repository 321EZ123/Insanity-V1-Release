import React, { useEffect, useState } from "react";

interface Game {
  image: string;
  title: string;
  description: string;
  url: string;
}

const GAME_DATA: Game[] = [
  {
    image: "/images/slope.png",
    title: "Slope",
    description:
      "Dodge obstacles and race down a never-ending 3D slope in this classic hyper-casual reflex game. Simple controls, addicting speed!",
    url: "/static/insanity/hvtrs8%2F-gcmgdwmr.eivhwb%2Cim%2Fqlmpg%2F",
  },
  {
    image: "/images/2048.png",
    title: "2048",
    description:
      "Swipe and merge numbered tiles to reach 2048. The addictively simple math puzzle that's easy to start and impossible to stop.",
    url: "/static/insanity/hvtr%3A-%2Fmvmlte%2Cgktju%60.ko-224%3A-CI-",
  },
  {
    image: "/images/traffic-icon.png",
    title: "Cookie Clicker",
    description:
      "Bake billions of cookies in this endless clicker—build a cookie empire with upgrades, achievements, and more!",
    url: "/static/insanity/hvtrs8%2F-cmoiigcniakgr%2Ceg%2F",
  },
  {
    image: "/images/tetris.svg",
    title: "Tetris",
    description:
      "Stack and rotate tetriminos to clear rows—how long can you survive the classic puzzle challenge?",
    url: "/static/insanity/hvtrs8%2F-dhbnug.eivhwb%2Cim%2Fvevrks-",
  },
  {
    image: "/images/react-icon.svg",
    title: "Retro Bowl",
    description:
      "Take control as coach in this throwback football game—draft, manage, and play your way to the Retro Bowl!",
    url: "/static/insanity/hvtrs8%2F-rgtpo%60oulwnnoakgd%2Cgktju%60.ko-",
  },
  {
    image: "/images/flutter-logo.svg",
    title: "Subway Surfers",
    description:
      "Dash, dodge, and collect in one of the most popular endless runner games. How far can you go?",
    url: "/static/insanity/hvtrs8%2F-etinmmnie%2Cgktju%60.ko-gcmgs-swbua%7B-qupfgrq%2F",
  },
  {
    image: "/images/snow-rider-3d.png",
    title: "Snow Rider 3D",
    description:
      "Experience the thrill of snowboarding down beautiful mountains in this exciting 3D adventure!",
    url: "/static/insanity/hvtrs8%2F-dpirp%7B-aav.eivhwb%2Cim%2Fqnmwpifep3F%2F",
  },
  {
    image: "/images/bitlife.png",
    title: "BitLife",
    description:
      "Live your best virtual life in BitLife, where every decision you make shapes your character's future!",
    url: "/static/insanity/hvtrs8%2F-meantgrlavite%2Cgktju%60.ko-p-bktnide%2Chvmn",
  },
  {
    image: "/images/block-blast.png",
    title: "Block Blast",
    description:
      "Match and blast blocks in this fun and addictive puzzle game. Clear the board and score high!",
    url: "/static/insanity/hvtrs8%2F-rgulbmzfo%2Cgktju%60.ko-",
  },
  {
    image: "/images/wordle.png",
    title: "Wordle",
    description:
      "Guess the hidden five-letter word in six attempts. Use your vocabulary skills to solve the puzzle!",
    url: "/static/insanity/hvtrs8%2F-wuw%2Cn%7Btkmgs%2Ccmm-gcmgs-wmrflg%2Fknfez.jtol",
  },
  {
    image: "/images/wordle-unlimited.png",
    title: "Wordle Unlimited",
    description:
      "Play Wordle as many times as you want with unlimited words. Keep guessing and improving your skills!",
    url: "/static/insanity/hvtrs8%2F-wmrflgullkmktgd%2Copg-",
  },
];

interface PopupState {
  open: boolean;
  game: Game | null;
}

function Games() {
  const [popup, setPopup] = useState<PopupState>({ open: false, game: null });
  const [searchTerm, setSearchTerm] = useState("");
  const [sidebarVisible, setSidebarVisible] = useState(true); // State for sidebar visibility

  useEffect(() => {
    if (popup.open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [popup.open]);

  const openPopup = (game: Game) => {
    setPopup({ open: true, game });
  };

  const closePopup = () => {
    setPopup({ open: false, game: null });
  };

  const refreshPopup = () => {
    if (popup.game) {
      setPopup({ open: false, game: null });
      setTimeout(() => {
        setPopup({ open: true, game: popup.game });
      }, 0);
    }
  };

  const toggleFullscreen = () => {
    const popupElement = document.getElementById("popup");
    if (popupElement && popupElement.requestFullscreen) {
      popupElement.requestFullscreen();
    }
  };

  const filteredGames = GAME_DATA.filter(game =>
    game.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible); // Toggle sidebar visibility
  };

  return (
    <div className="bg-[var(--wope-bg)] min-h-screen text-white py-16 px-2 flex">
      <div className={`transition-transform ${sidebarVisible ? 'max-w-xs' : 'hidden'} mr-4`}>
        {filteredGames.map((game) => (
          <div
            key={game.title}
            className="mb-4 p-4 rounded bg-white/5 border border-white/10 shadow-lg"
            onClick={() => openPopup(game)}
          >
            <h2 className="font-head text-xl font-bold mb-2">{game.title}</h2>
            <p className="text-white/80">{game.description}</p>
          </div>
        ))}
      </div>

      <button
        onClick={toggleSidebar}
        className="bg-purple-500 text-white rounded px-4 py-2 mb-4"
      >
        {sidebarVisible ? '←' : '→'}
      </button>

      <div className={`flex-1 grid gap-10 md:grid-cols-2 lg:grid-cols-3 transition-all ${sidebarVisible ? '' : 'ml-0'}`}>
        {filteredGames.map((game) => (
          <div
            key={game.title}
            className="relative rounded-3xl bg-white/5 border border-white/10 shadow-xl backdrop-blur-[6px] flex flex-col items-center px-6 pt-10 pb-8 hover:scale-[1.03] transition overflow-hidden min-h-[480px] group cursor-pointer"
            onClick={() => openPopup(game)}
          >
            <img
              src={game.image}
              alt={game.title}
              className="w-32 h-32 object-contain mb-8 rounded-xl shadow-lg group-hover:scale-105 transition"
              draggable="false"
            />
            <h2 className="font-head text-2xl font-bold mb-3 text-white text-center drop-shadow-sm">
              {game.title}
            </h2>
            <p className="text-white/80 text-base text-center max-w-xs mx-auto">
              {game.description}
            </p>
          </div>
        ))}
      </div>

      {popup.open && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div
            id="popup"
            className="bg-black rounded-lg shadow-lg p-4 w-full h-full relative overflow-hidden"
            style={{
              margin: "10px",
              overflowY: "hidden", // Hide scrollbar
            }}
          >
            <button onClick={closePopup} className="text-red-500 absolute top-2 left-4 z-10 text-3xl">
              &times;
            </button>
            <iframe
              src={popup.game?.url}
              title={popup.game?.title}
              className="w-full h-full border rounded"
            ></iframe>
            <div className="absolute bottom-4 right-4 z-10 flex space-x-2">
              <button onClick={toggleFullscreen} className="bg-purple-500 text-white px-2 py-1 rounded">
                ⛶
              </button>
              <button onClick={refreshPopup} className="bg-blue-500 text-white px-2 py-1 rounded">
                🔄
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="text-center mt-10">
        <a
          href="/proxy.html"
          target="_self"
          rel="noopener noreferrer"
          className="rounded-lg px-5 py-2 font-semibold bg-[var(--wope-purple)] hover:bg-[var(--wope-dark-purple)] transition text-white shadow-md"
        >
          Go to Proxy
        </a>
      </div>
    </div>
  );
}

export default Games;
