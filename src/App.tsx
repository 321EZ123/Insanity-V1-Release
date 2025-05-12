import React, { useEffect, useRef } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Games from "./Games";
import BrowseUnrestricted from "./BrowseUnrestricted";
import AI from "./ai";

function App() {
  const location = useLocation();
  const isProxyPage = location.pathname === '/games' || location.pathname === '/browse-unrestricted';
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          if (videoRef.current) {
            videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
          }
        } else {
          if (videoRef.current) {
            videoRef.current.pause();
          }
        }
      }
    }, { threshold: 0.5 });

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--wope-bg)] text-white">
      <nav className="w-full flex items-center justify-between px-8 pt-8 pb-4 bg-[var(--wope-nav-bg)]/60 backdrop-blur-md z-50 sticky top-0">
        <Link to="/" className="flex items-center gap-2 group">
          <img src="/insanity-logo.png" alt="Insanity Logo" className="h-8 w-8 transition group-hover:scale-105" />
          <span className="text-2xl font-bold font-head transition group-hover:text-[var(--wope-purple)]">Insanity</span>
        </Link>
        <ul className="hidden md:flex gap-8 text-base font-medium">
          <li>
            <Link to="/games" className="hover:text-[var(--wope-purple)] cursor-pointer">Games</Link>
          </li>
          <li>
            <Link to="/ai" className="hover:text-[var(--wope-purple)] cursor-pointer">AI</Link>
          </li>
          <li>
            <Link to="/browse-unrestricted" className="hover:text-[var(--wope-purple)] cursor-pointer">Proxy</Link>
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
              <img src="/images/hero-bg.png" alt="hero-bg" className="absolute z-0 w-full left-0 top-0 max-h-[600px] object-cover opacity-60" />
              <img src="/images/hero-lights.png" alt="hero-lights" className="absolute z-10 left-1/2 top-0 transform -translate-x-1/2 w-[900px] h-[650px] pointer-events-none select-none" />
              <div className="relative z-20 flex flex-col items-center mt-20 mb-10">
                <h1 className="font-head text-4xl sm:text-5xl md:text-6xl font-bold mb-6 max-w-3xl bg-gradient-to-r from-[var(--wope-purple)] via-[var(--wope-blue)] to-[var(--wope-lavender)] bg-clip-text text-transparent drop-shadow-lg">
                  The New Era Of
                  <br className="hidden sm:block" />
                  Unblocked Sites
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
              <img src="/images/hero-top.png" alt="hero-top" className="absolute left-0 top-0 -z-10 w-full pointer-events-none select-none" />
              <img src="/images/hero-bottom.png" alt="hero-bottom" className="absolute left-0 bottom-0 -z-10 w-full pointer-events-none select-none" />
            </header>
            <section className="relative z-10 w-full flex flex-col items-center mt-16 px-4 md:px-0">
              <h2 className="font-head text-2xl md:text-4xl font-bold mb-10 text-center bg-gradient-to-r from-[var(--wope-purple)] via-[var(--wope-blue)] to-[var(--wope-lavender)] bg-clip-text text-transparent">
                Satisfied Users
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
                <div className="group bg-gradient-to-br from-[var(--wope-purple)]/70 to-[var(--wope-blue)]/80 rounded-2xl p-7 shadow-xl hover:scale-[1.03] hover:shadow-2xl transition overflow-hidden cursor-pointer relative">
                  <img src="/images/keyword-tag.png" alt="Auto Keyword Tagging" className="absolute -top-8 -right-8 w-28 opacity-30 group-hover:opacity-60 transition" />
                  <div className="flex items-center gap-3 mb-4">
                    <img src="/images/student.png" alt="Student Icon" className="w-9 h-9" />
                    <span className="font-head text-xl">Anonymous Student</span>
                  </div>
                  <p className="text-sm md:text-base text-white/80 pb-2 font-medium">Insanity is really cool! It's an unblocked game site where I can play games at school, and it's super easy to use. I told my friends about it, and now we all play together during breaks. It's made school a lot more fun and helped me meet more people.</p>
                </div>
                <div className="group bg-gradient-to-br from-[var(--wope-bg)]/80 to-[var(--wope-lavender)]/80 rounded-2xl p-7 shadow-xl hover:scale-[1.03] hover:shadow-2xl transition overflow-hidden cursor-pointer relative">
                  <img src="/images/recommendation.png" alt="Recommendation" className="absolute -top-8 right-0 w-28 opacity-20 group-hover:opacity-50 transition" />
                  <div className="flex items-center gap-3 mb-4">
                    <img src="/images/employee.png" alt="Employee Icon" className="w-9 h-9" />
                    <span className="font-head text-xl">Exhausted Employee</span>
                  </div>
                  <p className="text-sm md:text-base text-white/80 pb-2 font-medium">After long days at work, I've found Insanity to be a great way to unwind. Since it's unblocked, I can easily access it during my breaks. Playing games helps me recharge a bit, and I've even shared it with my colleagues. It's become a nice escape that helps ease the exhaustion of a busy workweek.</p>
                </div>
                <div className="group bg-gradient-to-br from-[var(--wope-dark-purple)]/90 to-[var(--wope-purple)]/80 rounded-2xl p-7 shadow-xl hover:scale-[1.03] hover:shadow-2xl transition overflow-hidden cursor-pointer relative">
                  <img src="/images/traffic-estimation.png" alt="Traffic Estimation" className="absolute -top-8 -left-8 w-32 opacity-20 group-hover:opacity-50 transition" />
                  <div className="flex items-center gap-3 mb-4">
                    <img src="/images/website-owner.png" alt="Website Owner Icon" className="w-9 h-9 image-fit" />
                    <span className="font-head text-xl">Fellow Website Owner</span>
                  </div>
                  <p className="text-sm md:text-base text-white/80 pb-2 font-medium">As a fellow site owner, I truly admire Insanity. My site is dynamic, but Insanity excels as a static website. It's well-designed and offers a fantastic user experience. It's impressive to see how a simpler format can still deliver so much value!</p>
                </div>
              </div>
            </section>
            <section className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center mt-28 gap-10 px-4">
              <div className="order-2 md:order-1 flex flex-col justify-center items-start md:items-start">
                <h3 className="font-head text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-[var(--wope-purple)] via-[var(--wope-blue)] to-[var(--wope-lavender)] bg-clip-text text-transparent">
                  Discover Unblocked Games
                </h3>
                <p className="text-base md:text-lg text-white/80 mb-6 max-w-md font-medium">
                  Play dozens of your favorite unblocked games for free, anytime and anywhere. No downloads, no limits—just click and start having fun instantly on any device!
                </p>
                <ul className="flex flex-col gap-2 mb-6 w-full">
                  <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 bg-[var(--wope-purple)] rounded-full"/> 1-click instant play</li>
                  <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 bg-[var(--wope-blue)] rounded-full"/> 100% unblocked and safe</li>
                  <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 bg-[var(--wope-lavender)] rounded-full"/> Works at school and work</li>
                </ul>
                <Link
                  to="/games"
                  className="rounded-lg px-7 py-3 bg-[var(--wope-purple)] hover:bg-[var(--wope-dark-purple)] transition font-semibold text-base shadow-lg"
                >
                  Play Games
                </Link>
              </div>
              <div className="flex items-center justify-center order-1 md:order-2 relative">
                <video
                  ref={videoRef}
                  src="/insanity-games-preview.mp4"
                  controls
                  muted
                  loop
                  playsInline
                  className="w-[320px] md:w-[420px] rounded-2xl shadow-2xl border-4 border-white/10 bg-white/10"
                  poster="/insanity-logo.png"
                  aria-label="Unblocked games preview"
                />
              </div>
            </section>
            <section className="mt-32 mb-16 px-4">
              <div className="max-w-4xl mx-auto bg-gradient-to-r from-[var(--wope-purple)] via-[var(--wope-blue)] to-[var(--wope-lavender)] rounded-3xl shadow-xl px-8 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-head text-2xl md:text-3xl font-bold text-white mb-2">Experience Lightning-Fast Static Proxy</h3>
                  <p className="text-white/90 md:text-lg mb-4">
                    Bypass restrictions and browse seamlessly on any network using our fast, secure static proxy. No configs, no installs—just instant access.
                  </p>
                </div>
                <a
                  href="/browse-unrestricted"
                  className="rounded-lg px-8 py-4 font-bold bg-white text-[var(--wope-purple)] hover:bg-[var(--wope-lavender)] transition text-lg shadow-xl"
                >
                  Use Proxy
                </a>
              </div>
            </section>
            <footer className="w-full bg-[var(--wope-nav-bg)] px-8 pt-14 pb-7 text-white flex flex-col items-center">
              <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl w-full gap-10 md:gap-4">
                <div className="flex items-center gap-2 mb-5 md:mb-0">
                  <img src="/insanity-logo.png" alt="Insanity Logo" className="h-9 w-9" />
                  <span className="text-2xl font-bold font-head">Insanity</span>
                </div>
                <nav className="flex space-x-8">
                  <Link to="/games" className="hover:text-[var(--wope-purple)] transition">Games</Link>
                  <Link to="/ai" className="hover:text-[var(--wope-purple)] transition">AI</Link>
                  <Link to="/browse-unrestricted" className="hover:text-[var(--wope-purple)] transition">Proxy</Link>
                </nav>
                <div className="flex space-x-5 mt-5 md:mt-0">
                  <a href="https://discord.com/invite/Gv4rVt2SJp" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--wope-purple)] transition" aria-label="Discord">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.07.07 0 0 0-.073.035c-.211.375-.444.864-.608 1.249-1.844-.276-3.68-.276-5.486 0-.163-.394-.41-.874-.624-1.249a.077.077 0 0 0-.073-.035C3.366 4.638 2.16 5.89 1.108 7.262a.061.061 0 0 0-.01.021C-.952 10.346-.488 13.375.325 16.346a.083.083 0 0 0 .03.048c2.062 1.522 4.067 2.441 6.038 3.047a.077.077 0 0 0 .084-.03c.464-.638.875-1.31 1.226-2.007a.076.076 0 0 0-.041-.105c-.661-.25-1.294-.547-1.899-.885a.076.076 0 0 1-.008-.127c.127-.097.254-.198.373-.299a.073.073 0 0 1 .073-.009c4.003 1.824 8.308 1.824 12.266 0a.073.073 0 0 1 .074.009c.119.101.246.202.373.299a.076.076 0 0 1-.007.127 12.298 12.298 0 0 1-1.9.885.076.076 0 0 0-.04.106c.36.697.772 1.369 1.226 2.007a.076.076 0 0 0 .084.03c1.977-.606 3.982-1.525 6.038-3.047a.08.08 0 0 0 .031-.048c.646-2.299 1.4-5.638.443-9.178a.081.081 0 0 0-.011-.021 16.888 16.888 0 0 0-1.789-2.143zm-12.19 8.399c-1.162 0-2.117-1.064-2.117-2.374 0-1.308.936-2.372 2.117-2.372 1.191 0 2.144 1.08 2.117 2.374 0 1.309-.935 2.372-2.117 2.372zm7.355 0c-1.162 0-2.117-1.064-2.117-2.374 0-1.308.936-2.372 2.117-2.372 1.191 0 2.144 1.08 2.117 2.374 0 1.309-.926 2.372-2.117 2.372z"/>
                    </svg>
                  </a>
                  <a href="https://github.com/321EZ123/Insanity-V1-Release" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--wope-purple)] transition" aria-label="GitHub">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.425 2.867 8.181 6.839 9.504.5.089.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342.454-1.158-1.11-1.467-1.11-1.467-.908-.621.069-.609.069-.609 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.914.832.092-.647.349-1.088.634-1.34-2.221-.253-4.555-1.113-4.555-4.951 0-1.094.39-1.991 1.029-2.693-.103-.254-.447-1.273.098-2.653 0 0 .841-.27 2.75 1.025A9.523 9.523 0 0 1 12 6.843a9.6 9.6 0 0 1 2.504.337c1.909-1.296 2.749-1.025 2.749-1.025.546 1.38.203 2.399.1 2.653.64.702 1.029 1.599 1.029 2.693 0 3.847-2.337 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.013 2.418-.013 2.747 0 .268.18.576.688.478A10.025 10.025 0 0 0 22 12.021C22 6.484 17.523 2 12 2z"/>
                    </svg>
                  </a>
                  <Link to="/" className="hover:text-[var(--wope-purple)] transition" aria-label="YouTube">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186A2.994 2.994 0 0 0 21.511 4.2c-1.755-.468-8.787-.468-8.787-.468s-7.032 0-8.787.468A2.995 2.995 0 0 0 .502 6.186C0 7.861 0 12 0 12s0 4.139.502 5.814a2.999 2.999 0 0 0 1.987 1.987c1.755.468 8.787.468 8.787.468s7.032 0 8.787-.468a2.999 2.999 0 0 0 1.987-1.987C24 16.139 24 12 24 12s0-4.139-.502-5.814zm-14.953 9.382V8.431l6.545 3.568-6.545 3.569z"/>
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="w-full border-t border-white/10 mt-8 pt-5 text-center text-xs text-white/50">
                &copy; {new Date().getFullYear()} Insanity. All rights reserved.
              </div>
            </footer>
          </>
        } />
        <Route path="/games" element={<Games />} />
        <Route path="/ai" element={<AI />} />
        <Route path="/browse-unrestricted" element={<BrowseUnrestricted />} />
      </Routes>
      <style>
        {`
          .image-fit {
            max-width: 100%;
            height: auto; /* Maintain aspect ratio */
            object-fit: cover; /* or 'contain' depending on your needs */
          }
        `}
      </style>
    </div>
  );
}

export default App;
