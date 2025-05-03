import React, { useEffect, useState } from "react";
//this code is borrowed and modified from the games page
interface Game {
  image: string;
  title: string;
  description: string;
  url: string;
}

const GAME_DATA: Game[] = [
  {
    image: "/images/Llama3-8B-8192.png",
    title: "Llama3-8B-8192",
    description:
      "Llama3-8B-8192 is a variant of the LLaMA (Large Language Model Meta AI) series, specifically the third generation with 8 billion parameters and a context window of 8192 tokens. This model is designed to be more efficient and capable of handling larger contexts, making it suitable for a variety of natural language processing tasks, including conversation, summarization, and content generation.",
    url: "/static/insanity/hvtrs8%2F-ilscnkt%7B-ci%2Cngtnidy%2Carp-ak-3.jtol",
  },
  {
    image: "/images/Gemma-2-9B-IT.jpg",
    title: "Gemma-2-9B-IT",
    description:
      "Gemma-2-9B-IT is a sophisticated AI model designed to perform a variety of tasks, including natural language understanding and generation. It excels in processing context, providing coherent responses, and adapting to user needs.",
    url: "/static/insanity/hvtrs8%2F-ilscnkt%7B-ci%2Cngtnidy%2Carp-ak.jtol",
  },
  {
    image: "/images/Llama-3.3-70B-Versatile.webp",
    title: "Llama-3.3-70B-Versatile",
    description:
      "Llama-3.3-70B-Versatile is a cutting-edge language model with 70 billion parameters, designed for diverse applications and improved performance in understanding and generating human-like text.",
    url: "/static/insanity/hvtrs8%2F-ak-veqt%2Fscnf-vaw.tepcgl%2Carp-ak-0.jtol",
  },
];

interface PopupState {
  open: boolean;
  game: Game | null;
}

function AI() {
  const [popup, setPopup] = useState<PopupState>({ open: false, game: null });

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

  return (
    <div className="bg-[var(--wope-bg)] min-h-screen flex flex-col">
      <header className="text-center py-16">
        <h1 className="text-3xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-[var(--wope-purple)] via-[var(--wope-blue)] to-[var(--wope-lavender)] bg-clip-text text-transparent">
          AI Assistant
        </h1>
      </header>

      <main className="flex-grow max-w-4xl mx-auto flex flex-col gap-12 w-full px-2 md:px-0">
        {GAME_DATA.map((game) => (
          <div
            key={game.title}
            className="relative rounded-3xl bg-white/5 border border-white/10 shadow-xl backdrop-blur-[6px] flex flex-col md:flex-row items-center md:items-start w-full px-10 pt-12 pb-10 hover:scale-[1.01] transition overflow-hidden min-h-[320px] group cursor-pointer"
            style={{ minHeight: 340 }}
            onClick={() => openPopup(game)}
          >
            <img
              src={game.image}
              alt={game.title}
              className="w-40 h-40 object-contain mb-8 md:mb-0 md:mr-12 rounded-xl shadow-lg group-hover:scale-105 transition"
              draggable="false"
            />
            <div className="flex flex-col items-center md:items-start max-w-3xl">
              <h2 className="font-head text-3xl font-bold mb-3 text-white text-center md:text-left drop-shadow-sm">
                {game.title}
              </h2>
              <p className="text-white/80 text-lg text-center md:text-left max-w-2xl mb-0">
                {game.description}
              </p>
            </div>
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
                    aria-label="Refresh AI App"
                  >
                    ↻ Refresh
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

export default AI;
