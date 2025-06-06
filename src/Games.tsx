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
    description: "Dodge obstacles and race down a never-ending 3D slope in this classic hyper-casual reflex game. Simple controls, addicting speed!",
    url: "/static/insanity/hvtrs8%2F-3ih2-nive%2Cakfms%2Ccn%2Frrmjgcvs-snore-ildgx%2Chvmn",
  },
  {
    image: "/images/2048-custom.png",
    title: "2048",
    description: "Swipe and merge numbered tiles to reach 2048. The addictively simple math puzzle that's easy to start and impossible to stop.",
    url: "/static/insanity/hvtr%3A-%2Fmvmlte%2Cgktju%60.ko-224%3A-CI-",
  },
  {
    image: "/images/cookie-clicker-custom.png",
    title: "Cookie Clicker",
    description: "Bake billions of cookies in this endless clicker—build a cookie empire with upgrades, achievements, and more!",
    url: "/static/insanity/hvtrs8%2F-cmoiigcniakgr%2Ceg%2F",
  },
  {
    image: "/images/tetris.webp",
    title: "Tetris",
    description: "Stack and rotate tetriminos to clear rows—how long can you survive the classic puzzle challenge?",
    url: "/static/insanity/hvtrs8%2F-dhbnug.eivhwb%2Cim%2Fvevrks-",
  },
  {
    image: "/images/retrobowl-custom.png",
    title: "Retro Bowl",
    description: "Take control as coach in this throwback football game—draft, manage, and play your way to the Retro Bowl!",
    url: "/static/insanity/hvtrs8%2F-rgtpo%60oulwnnoakgd%2Cgktju%60.ko-",
  },
  {
    image: "/images/subway-surfers-custom.png",
    title: "Subway Surfers",
    description: "Dash, dodge, and collect in one of the most popular endless runner games. How far can you go?",
    url: "/static/insanity/hvtrs8%2F-etinmmnie%2Cgktju%60.ko-gcmgs-swbua%7B-qupfgrq%2F",
  },
  {
    image: "/images/snowrider3d-custom.png",
    title: "Snow Rider 3D",
    description: "Experience the thrill of snowboarding down beautiful mountains in this exciting 3D adventure!",
    url: "/static/insanity/hvtrs8%2F-dpirp%7B-aav.eivhwb%2Cim%2Fqnmwpifep3F%2F",
  },
  {
    image: "/images/bitlife-custom.png",
    title: "BitLife",
    description: "Live your best virtual life in BitLife, where every decision you make shapes your character's future!",
    url: "/static/insanity/hvtrs8%2F-meantgrlavite%2Cgktju%60.ko-p-bktnide%2Chvmn",
  },
  {
    image: "/images/blockblast-custom.png",
    title: "Block Blast",
    description: "Match and blast blocks in this fun and addictive puzzle game. Clear the board and score high!",
    url: "/static/insanity/hvtrs8%2F-rgulbmzfo%2Cgktju%60.ko-",
  },
  {
    image: "/images/wordle-custom.png",
    title: "Wordle",
    description: "Guess the hidden five-letter word in six attempts. Use your vocabulary skills to solve the puzzle!",
    url: "/static/insanity/hvtrs8%2F-wuw%2Cn%7Btkmgs%2Ccmm-gcmgs-wmrflg%2Fknfez.jtol",
  },
  {
    image: "/images/wordleunlimited-custom.png",
    title: "Wordle Unlimited",
    description: "Play Wordle as many times as you want with unlimited words. Keep guessing and improving your skills!",
    url: "/static/insanity/hvtrs8%2F-wmrflgullkmktgd%2Copg-",
  },
  {
    image: "/images/scrapmetal3.jpg",
    title: "Scrap Metal 3",
    description: "Scrap Metal 3: Infernal Trap is a 3D driving simulator. Player can build his own maps. Place the bridges, ramps and many other obstacles.",
    url: "/static/insanity/hvtrs8%2F-affpeg3ih2.eivhwb%2Cim%2Frrmjgcvs-sarcpoevan%2Fknfez.jtol",
  },
  {
    image: "/images/scrapmetal6.jpg",
    title: "Scrap Metal 6",
    description: "Scrap Metal 6 is a free to play open world, build your own adventure driving game.",
    url: "/static/insanity/hvtrs8%2F-wuw%2Cjmpk.aoo%2Feaoe-gcmg%2Fqcpar-oevan-4%2F",
  },
  {
    image: "/images/kourio.webp",
    title: "Kour.io",
    description: "Kour.io is a multiplayer IO FPS game that plunges you into intense battles across various maps with many guns and modes to play!",
    url: "/static/insanity/hvtrs8%2F-kmup.ko-%23KZGLC1",
  },
  {
    image: "/images/basketballstars.webp",
    title: "Basketball Stars",
    description: "Basketball Stars is a basketball game where you join in thrilling matches right on your device. Choose your favorite legendary and kick off all opponents!",
    url: "/static/insanity/hvtrs8%2F-ulbnoakgd%2Fgcmgs%2Cs1.cmczmncwq.aoo%2F%60aqkgt%60anl%2Fsvaps%2Chvmn",
  },
  {
    image: "/images/slowroads.jpg",
    title: "Slow Roads",
    description: "Slow Roads is a casual driving game all about finding peace in a long, scenic journey. No ads, no interruptions, and no end to the road.",
    url: "/static/insanity/hvtrs8%2F-ulbnoakgd%2Fgcmgs%2Cs1.cmczmncwq.aoo%2Fqlmw%2Frmafs%2Chvmn",
  },
  {
    image: "/images/deal-or-no-deal.jpg",
    title: "Deal or No Deal",
    description: "Try your luck in finding the $1,000,000 briefcase in the only officially licensed casual game based on the hit TV game show!",
    url: "/static/insanity/hvtrs8%2F-wuw%2Cmqn%2Ccmm-el-ws-pna%7B%2Feaoeq%2Ffecl%2Fop-lo%2Fdgan%2Fag%2F9owqg76szemi",
  },
  {
    image: "/images/race-survival.jpg",
    title: "Race Survival",
    description: "Survival Race is an intense multiplayer racing game where players battle for supremacy in an unstable arena of crumbling hexagons.",
    url: "/static/insanity/hvtrs8%2F-wctahfoauoeltcrkeq.aoo%2Fqupvkvcl%2Frccg-eaoe-",
  },
  {
    image: "/images/toss-the-turtle.png",
    title: "Toss the Turtle",
    description: "Toss the Turtle is a fun and addictive launch game where you help a daring turtle prove the indestructibility of his shell!",
    url: "/static/insanity/hvtrs8%2F-3ih2-nive%2Cakfms%2Ccn%2Frrmjgcvs-tmsqtjevuptne-ildgx%2Chvmn",
  },
  {
    image: "/images/craftmine.png",
    title: "CraftMine",
    description: "Explore the pixelated world mining wood, metals and other objects so that you can craft pickaxes, swords, hats and other items that will help you survive.",
    url: "/static/insanity/hvtrs8%2F-3ih2-nive%2Cakfms%2Ccn%2Frrmjgcvs-cpadtoile-ildgx%2Chvmn",
  },
  {
    image: "/images/superhot.jpg",
    title: "SUPERHOT",
    description: "SUPERHOT is the smash-hit FPS where time moves only when you move. No regenerating health bars. No conveniently placed ammo drops.",
    url: "/static/insanity/hvtrs8%2F-3ih2-nive%2Cakfms%2Ccn%2Frrmjgcvs-swpgrjov%2Fknfez.jtol",
  },
  {
    image: "/images/dogeminer.png",
    title: "Doge Miner",
    description: "Doge Miner is an idle clicker game where you mine Dogecoin to reach the moon. You click a pickaxe to mine coins, upgrade your tools, and purchase investments to automate mining and reach your goal of 50,000 Dogecoin for a space rocket.",
    url: "/static/insanity/hvtrs8%2F-3ih2-nive%2Cakfms%2Ccn%2Frrmjgcvs-DmggMkngr-ildgx%2Chvmn",
  },
  {
    image: "/images/stack.png",
    title: "Stack",
    description: "Your goal is to build the highest tower you can. Tap to place a block. Each block you place correctly earns you one point.",
    url: "/static/insanity/hvtrs8%2F-3ih2-nive%2Cakfms%2Ccn%2Frrmjgcvs-svaak-ildgx%2Chvmn",
  },
  {
    image: "/images/tag.jpg",
    title: "Tag",
    description: "Tag is a casual multiplayer game that allows up to four friends to compete in a fast-paced game of tag, all on the same device!",
    url: "/static/insanity/hvtrs8%2F-gcmgs%2Ccpaxyeaoeq.aoo%2Fgn%5DUQ%2Fvae-0-1-6-rlcygrq%2Fknfez.jtol%3Dv%3F1%2C311",
  },
  {
    image: "/images/deeeep.io.jpg",
    title: "Deeeep.io",
    description: "Deeeep.io is a multiplayer online browser game that takes place in the depths of the ocean. Eat food and other players, hide in underwater terrain and evolve your animals to earn points and reach the top of the food chain.",
    url: "/static/insanity/hvtrs8%2F-dgeger.ko-",
  },
  {
    image: "/images/ragdoll-archers.png",
    title: "Ragdoll Archers",
    description: "Ragdoll Archers is an archery game featuring bow and arrow-equipped stickmen with ragdoll physics. Fire arrows at a range of opponents while earning points to upgrade your abilities and ammunition. Play two-player PvP against your friend or team up with them to defeat a range of foes!",
    url: "/static/insanity/hvtrs8%2F-gcmgs%2Ccpaxyeaoeq.aoo%2Fgn%5DUQ%2Fpaedmln-crahgrq%2Fknfez.jtol%3Dv%3F1%2C312",
  },
  {
    image: "/images/ovo.png",
    title: "Ovo",
    description: "Ovo is a timed stick person-themed platform game developed by Dedra Games. Your goal in this game is to finish as many levels as quickly as you can.",
    url: "/static/insanity/hvtrs8%2F-gcmgs%2Ccpaxyeaoeq.aoo%2Fgn%5DUQ%2Fmvm%2Fknfez.jtol%3Dv%3F1%2C312",
  },
  {
    image: "/images/ovo-online.png",
    title: "Ovo.io",
    description: "OvO.io Online is the same as the OvO game you know and love, but now in multiplayer! This is a fast-paced skill-based platforming game focused on maneuvering around the levels as fast as possible. Complete every level available in easy and hard mode. Collect over 40 coins scattered around the levels and unlock a dozen skins and achievements. So, what are you waiting for? Play with your friends!",
    url: "/static/insanity/hvtrs8%2F-gcmgs%2Ccpaxyeaoeq.aoo%2Fgn%5DUQ%2Fmvm-mnnile-ildgx%2Chvmn%3Ft%3D3.130",
  },
];

interface PopupState {
  open: boolean;
  game: Game | null;
}

function Games() {
  const [popup, setPopup] = useState<PopupState>({ open: false, game: null });
  const [searchTerm, setSearchTerm] = useState("");
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (popup.open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [popup.open, isFullscreen]);

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
      popupElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
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
              <div className="flex-1 relative w<div className="flex-1 relative w-full h-full">
                <iframe
                  src={popup.game?.url}
                  title={popup.game?.title}
                  className="absolute top-0 left-0 w-full h-full border-0 rounded-none"
                  allowFullScreen
                />
                {!isFullscreen && (
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
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="text-center mt-10 bg-black p-6">
        <a
          href="/browse-unrestricted"
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
