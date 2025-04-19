import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Games from "./Games";
import BrowseUnrestricted from "./BrowseUnrestricted";

function App() {
  const location = useLocation();
  const isProxyPage = location.pathname === '/games' || location.pathname === '/browse-unrestricted';

  return (
    <div className="min-h-screen flex flex-col bg-[var(--wope-bg)] text-white">
      <nav className="w-full flex items-center justify-between px-8 pt-8 pb-4 bg-[var(--wope-nav-bg)]/60 backdrop-blur-md z-20 sticky top-0">
        <Link to="/" className="flex items-center gap-2 group">
          <img src="/insanity-logo.png" alt="Insanity Logo" className="h-8 w-8 transition group-hover:scale-105" />
          <span className="text-2xl font-bold font-head transition group-hover:text-[var(--wope-purple)]">Insanity</span>
        </Link>
        <ul className="hidden md:flex gap-8 text-base font-medium">
          <li>
            <Link to="/games" className="hover:text-[var(--wope-purple)] cursor-pointer">Games</Link>
          </li>
          <li>
            <a 
              href="https://printedwaste.com/u/9adxkw"
              className="hover:text-[var(--wope-purple)] cursor-pointer"
              target={isProxyPage ? "_self" : "_blank"} // Open in same tab on specific pages
              rel="noopener noreferrer"
            >
              Proxy
            </a>
          </li>
        </ul>
        <div className="flex gap-3">
          <button className="rounded-lg px-5 py-2 font-semibold bg-[var(--wope-purple)] hover:bg-[var(--wope-dark-purple)] transition text-white shadow-md">Join Discord</button>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={
          <>
            <header className="flex flex-col items-center justify-center text-center px-4 md:px-0 mt-12 mb-10 relative">
              <img src="https://ext.same-assets.com/3200949295/2332041407.png" alt="hero-bg" className="absolute z-0 w-full left-0 top-0 max-h-[600px] object-cover opacity-60" />
              <img src="https://ext.same-assets.com/3200949295/3795921104.png" alt="hero-lights" className="absolute z-10 left-1/2 top-0 transform -translate-x-1/2 w-[900px] h-[650px] pointer-events-none select-none" />
              <div className="relative z-20 flex flex-col items-center mt-20 mb-10">
                <h1 className="font-head text-4xl sm:text-5xl md:text-6xl font-bold mb-6 max-w-3xl bg-gradient-to-r from-[var(--wope-purple)] via-[var(--wope-blue)] to-[var(--wope-lavender)] bg-clip-text text-transparent drop-shadow-lg">
                  The New Era Of
                  <br className="hidden sm:block" />
                  Unblocked Games
                </h1>
                <p className="text-lg md:text-xl max-w-xl mb-8 text-white/80 font-medium">
                  Insanity is a static unblocked game and proxy site, providing access to a variety of games without restrictions. Enjoy your favorite games from anywhere, whether at school, work, or home.
                </p>
                <a
                  href="https://discord.gg/Gv4rVt2SJp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg px-8 py-3 bg-[var(--wope-purple)] hover:bg-[var(--wope-dark-purple)] transition font-semibold text-lg shadow-xl mb-8 inline-block"
                >
                  Join our discord for more links!
                </a>
              </div>
              <img src="https://ext.same-assets.com/3200949295/2696659440.png" alt="hero-top" className="absolute left-0 top-0 -z-10 w-full pointer-events-none select-none" />
              <img src="https://ext.same-assets.com/3200949295/1047819486.png" alt="hero-bottom" className="absolute left-0 bottom-0 -z-10 w-full pointer-events-none select-none" />
            </header>
            <section className="relative z-10 w-full flex flex-col items-center mt-16 px-4 md:px-0">
              <h2 className="font-head text-2xl md:text-4xl font-bold mb-10 text-center bg-gradient-to-r from-[var(--wope-purple)] via-[var(--wope-blue)] to-[var(--wope-lavender)] bg-clip-text text-transparent">
                Unblocked Universally
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
                <div className="group bg-gradient-to-br from-[var(--wope-purple)]/70 to-[var(--wope-blue)]/80 rounded-2xl p-7 shadow-xl hover:scale-[1.03] hover:shadow-2xl transition overflow-hidden cursor-pointer relative">
                  <img src="https://ext.same-assets.com/3200949295/1406833073.png" alt="Auto Keyword Tagging" className="absolute -top-8 -right-8 w-28 opacity-30 group-hover:opacity-60 transition" />
                  <div className="flex items-center gap-3 mb-4">
                    <img src="https://ext.same-assets.com/3200949295/2277306457.svg" alt="Tag Icon" className="w-9 h-9" />
                    <span className="font-head text-xl">Lightspeed</span>
                  </div>
                  <p className="text-sm md:text-base text-white/80 pb-2 font-medium">Lightspeed, the filter that seems to block everything... Except Insanity remains unblocked!</p>
                </div>
                <div className="group bg-gradient-to-br from-[var(--wope-bg)]/80 to-[var(--wope-lavender)]/80 rounded-2xl p-7 shadow-xl hover:scale-[1.03] hover:shadow-2xl transition overflow-hidden cursor-pointer relative">
                  <img src="https://ext.same-assets.com/3200949295/4143115960.png" alt="Recommendation" className="absolute -top-8 right-0 w-28 opacity-20 group-hover:opacity-50 transition" />
                  <div className="flex items-center gap-3 mb-4">
                    <img src="https://ext.same-assets.com/3200949295/2525938483.svg" alt="Recommendation Icon" className="w-9 h-9" />
                    <span className="font-head text-xl">Fortiguard</span>
                  </div>
                  <p className="text-sm md:text-base text-white/80 pb-2 font-medium">Fortiguard can be annoying when trying to entertain oneself in school, but don't worry, as Insanity will always be unblocked!</p>
                </div>
                <div className="group bg-gradient-to-br from-[var(--wope-dark-purple)]/90 to-[var(--wope-purple)]/80 rounded-2xl p-7 shadow-xl hover:scale-[1.03] hover:shadow-2xl transition overflow-hidden cursor-pointer relative">
                  <img src="https://ext.same-assets.com/3200949295/3794809117.png" alt="Traffic Estimation" className="absolute -top-8 -left-8 w-32 opacity-20 group-hover:opacity-50 transition" />
                  <div className="flex items-center gap-3 mb-4">
                    <img src="https://ext.same-assets.com/3200949295/3606636105.png" alt="Traffic Icon" className="w-9 h-9" />
                    <span className="font-head text-xl">Securly</span>
                  </div>
                  <p className="text-sm md:text-base text-white/80 pb-2 font-medium">Securly, a web filter for schools that strives to make the web secure for students, stripping us of all games and entertainment. Never fear, as we remain unblocked on Securly too!</p>
                </div>
              </div>
            </section>
            <section className="w-full max-w-6xl mx-auto mt-20 px-4">
              <div className="flex flex-col md:flex-row items-center gap-6 justify-center">
                <span className="font-semibold text-base text-white/60 pb-1 tracking-wide">Trusted by students worldwide</span>
                <div className="flex flex-wrap gap-6 justify-center md:ml-5">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Google-flutter-logo.svg" alt="Brand 1" className="h-8 grayscale opacity-80 hover:opacity-100 transition" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Logo_TV_2015.png" alt="Brand 2" className="h-8 grayscale opacity-80 hover:opacity-100 transition" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png" alt="Brand 3" className="h-8 grayscale opacity-80 hover:opacity-100 transition" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="Brand 4" className="h-8 grayscale opacity-80 hover:opacity-100 transition" />
                </div>
              </div>
            </section>
            <section className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-center mt-28 gap-10 px-4">
              <div className="order-2 md:order-1 flex flex-col justify-center items-start md:items-start">
                <h3 className="font-head text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-[var(--wope-purple)] via-[var(--wope-blue)] to-[var(--wope-lavender)] bg-clip-text text-transparent">All Your Search Data in One Place</h3>
                <p className="text-base md:text-lg text-white/80 mb-6 max-w-md font-medium">
                  Monitor keyword trends, ranking growth, and competition at a glance—with real-time data, tags, smart insights, and gorgeous dashboards, all in one unified interface.
                </p>
                <ul className="flex flex-col gap-2 mb-6 w-full">
                  <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 bg-[var(--wope-purple)] rounded-full"/> Automated daily updates</li>
                  <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 bg-[var(--wope-blue)] rounded-full"/> Effortless keyword grouping</li>
                  <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 bg-[var(--wope-lavender)] rounded-full"/> Project-wide traffic estimation</li>
                </ul>
                <button className="rounded-lg px-7 py-3 bg-[var(--wope-purple)] hover:bg-[var(--wope-dark-purple)] transition font-semibold text-base shadow-lg">Join Discord</button>
              </div>
              <div className="flex items-center justify-center order-1 md:order-2 relative">
                <img src="https://ext.same-assets.com/3200949295/3223697921.png" alt="App dashboard screenshot" className="w-[320px] md:w-[420px] rounded-2xl shadow-2xl border-4 border-white/10 bg-white/10" />
              </div>
            </section>
            <section className="mt-32 mb-16 px-4">
              <div className="max-w-4xl mx-auto bg-gradient-to-r from-[var(--wope-purple)] via-[var(--wope-blue)] to-[var(--wope-lavender)] rounded-3xl shadow-xl px-8 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-head text-2xl md:text-3xl font-bold text-white mb-2">Ready to Track Smarter?</h3>
                  <p className="text-white/90 md:text-lg mb-4">Get started free and discover a new era of SEO rank tracking.</p>
                </div>
                <button className="rounded-lg px-8 py-4 font-bold bg-white text-[var(--wope-purple)] hover:bg-[var(--wope-lavender)] transition text-lg shadow-xl">Join Discord</button>
              </div>
            </section>
            <footer className="w-full bg-[var(--wope-nav-bg)] px-8 pt-14 pb-7 text-white flex flex-col items-center">
              <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl w-full gap-10 md:gap-4">
                <div className="flex items-center gap-2 mb-5 md:mb-0">
                  <img src="/insanity-logo.png" alt="Insanity Logo" className="h-9 w-9" />
                  <span className="text-2xl font-bold font-head">Insanity</span>
                </div>
                <nav className="flex space-x-8">
                  <Link to="#" className="hover:text-[var(--wope-purple)] transition">Games</Link>
                  <a href="https://printedwaste.com/u/9adxkw" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--wope-purple)] transition">Proxy</a>
                </nav>
                <div className="flex space-x-5 mt-5 md:mt-0">
                  <a href="#" aria-label="Twitter" className="opacity-80 hover:opacity-100 transition"><svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016.4 3c-2.82 0-5.13 2.34-5.13 5.21 0 .41.04.82.12 1.2C7.69 9.2 4.07 7.42 1.64 4.87c-.45.78-.71 1.69-.71 2.64 0 1.89.96 3.56 2.41 4.53A4.28 4.28 0 012 10.6v.06c0 2.64 1.89 4.83 4.47 5.31-.46.13-.95.2-1.46.2-.36 0-.7-.03-1.04-.09.7 2.2 2.72 3.79 5.12 3.83-1.87 1.45-4.23 2.13-6.62 1.85C2.7 21.65 5.9 22.6 9.29 22.6c6.81 0 10.54-5.82 10.54-10.87 0-.17 0-.34-.01-.51A8.17 8.17 0 0023 3z" /></svg></a>
                  <a href="#" aria-label="LinkedIn" className="opacity-80 hover:opacity-100 transition"><svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8a6 6 0 016 6v5a2 2 0 01-2 2H4a2 2 0 01-2-2v-5a6 6 0 016-6h4z" /><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /></svg></a>
                  <a href="#" aria-label="GitHub" className="opacity-80 hover:opacity-100 transition"><svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20.7a8.34 8.34 0 01-4.9-1.61c-.37-.28-.6-.76-.48-1.21.13-.5.33-1.26.33-1.73a4.3 4.3 0 00-1.17-2.74c2.38-.26 4.89-1.19 4.89-5.27 0-1.14-.39-2.07-1.06-2.79.1-.26.46-1.33-.1-2.78 0 0-.88-.28-2.87 1.08a10.13 10.13 0 00-2.61-.35c-.88 0-1.76.12-2.61.35-1.99-1.36-2.87-1.08-2.87-1.08-.56 1.45-.2 2.52-.1 2.78-.67.72-1.06 1.65-1.06 2.79 0 4.08 2.52 5.01 4.9 5.27-.3.26-.56.74-.63 1.44-.13.53.01 1.06.04 1.26 0 .06.01.12.01.18A8.32 8.32 0 012 20.7" /></svg></a>
                </div>
              </div>
              <div className="w-full border-t border-white/10 mt-8 pt-5 text-center text-xs text-white/50">
                &copy; {new Date().getFullYear()} Insanity. All rights reserved.
              </div>
            </footer>
          </>
        } />
        <Route path="/games" element={<Games />} />
        <Route path="/browse-unrestricted" element={<BrowseUnrestricted />} />
      </Routes>
    </div>
  );
}

export default App;
