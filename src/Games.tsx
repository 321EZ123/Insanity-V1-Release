import React, { useEffect, useState } from "react";

interface Game {
  image: string;
  title: string;
  description: string;
  url: string;
}

const GAME_DATA: Game[] = [
  {
    image: "/images/slope-custom.png",
    title: "Slope",
    description:
      "Dodge obstacles and race down a never-ending 3D slope in this classic hyper-casual reflex game. Simple controls, addicting speed!",
    url: "/static/insanity/hvtrs8%2F-gcmgdwmr.eivhwb%2Cim%2Fqlmpg%2F",
  },
  {
    image: "/images/2048-custom.png",
    title: "2048",
    description:
      "Swipe and merge numbered tiles to reach 2048. The addictively simple math puzzle that's easy to start and impossible to stop.",
    url: "/static/insanity/hvtr%3A-%2Fmvmlte%2Cgktju%60.ko-224%3A-CI-",
  },
  {
    image: "/images/cookie-clicker-custom.png",
    title: "Cookie Clicker",
    description:
      "Bake billions of cookies in this endless clicker—build a cookie empire with upgrades, achievements, and more!",
    url: "/static/insanity/hvtrs8%2F-cmoiigcniakgr%2Ceg%2F",
  },
  // ... (the rest of your game data)
];

interface PopupState {
  open: boolean;
  game: Game | null;
}

function Games() {
  const [popup, setPopup] = useState<PopupState>({ open: false, game: null });
  const [searchTerm, setSearchTerm] = useState("");

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
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
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
    if (!popupElement) return;
    if (!document.fullscreenElement) {
      popupElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  const filteredGames = GAME_DATA.filter((game) =>
    game.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[var(--wope-bg)] min-h-screen flex flex-col">
      <header className="text-center py-16">
        <h1 className="text-3xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-[var(--wope-purple)] via-[var(--wope-blue)] to-[var(--wope-lavender)] bg-clip-text text-transparent">
          Unblocked Games
        </h1>
        <div className="max-w-6xl mx-auto mb-6">
          <input
            type="text"
            placeholder="Search games..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 rounded-lg border border-transparent bg-gradient-to-r from-[var(--wope-purple)] to-[var(--wope-blue)] text-white placeholder:text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--wope-lavender)] transition duration-300"
          />
        </div>
      </header>

      <main className="flex-grow max-w-6xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
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
      </main>

      {popup.open && (
        <div className="fixed inset-0 z-50 w-screen h-screen flex items-stretch justify-stretch bg-black bg-opacity-90 backdrop-blur-xl">
          <div
            id="popup"
            className="relative w-full h-full flex flex-col bg-gradient-to-b from-[#23243b] via-[#18192a] to-[#111217] overflow-hidden"
          >
            <button
              onClick={closePopup}
              className="absolute top-5 left-5 z-10 bg-red-600 hover:bg-red-700 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg text-3xl transition"
              aria-label="Close popup"
              type="button"
            >
              &times;
            </button>
            <div className="flex-1 flex flex-col w-full h-full">
              <div className="flex-1 relative w-full h-full">
                <iframe
                  src={popup.game?.url}
                  title={popup.game?.title}
                  className="absolute top-0 left-0 w-full h-full border-0 rounded-none"
                  allowFullScreen
                />
                <div className="absolute bottom-6 right-6 z-20 flex flex-row-reverse gap-4">
                  <button
                    onClick={toggleFullscreen}
                    className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded shadow transition text-lg"
                    type="button"
                    aria-label="Toggle fullscreen"
                  >
                    ⛶ Fullscreen
                  </button>
                  <button
                    onClick={refreshPopup}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow transition text-lg"
                    type="button"
                    aria-label="Refresh game"
                  >
                    🔄 Refresh
                  </button>
                </div>
              </div>
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
