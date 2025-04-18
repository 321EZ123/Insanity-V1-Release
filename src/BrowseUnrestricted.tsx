import React, { useState } from "react";

const QUOTES = [
  "MAX WROTE ONE SENTANCE FOR A WHOLE PERIOD",
  "Don't forget to do your homework :)",
  "Made using html and a bunch of other stuff",
  "Fast and portable",
  "Go to petezahgames.com for another great site",
  "Made partially in school",
  "Join our discord",
  "Settings coming soon :)",
  "Runs on UV-Static",
  "Making this site was kinda annoying ngl",
  "Programmed in 2 days",
  "Screw IPAs",
  "V2?",
  "You're dumb",
  "My dog is so cute :)",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "Get busy living or get busy dying. - Stephen King",
  "You only live once, but if you do it right, once is enough. - Mae West",
  "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
  "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
  "Before you criticize someone, walk a mile in their shoes. That way, you'll be a mile from them, and you'll have their shoes. — Jack Handy",
  "Those people who think they know everything are a great annoyance to those of us who do. ― Isaac Asimov",
  "SUGGEST MORE QUOTES TO ME IN OUR DISCORD SERVER",
  "Lebron is king - Gavin",
  "Six Seven",
  "the one and only",
  "William's gay ahhh poses after falling in gimkit are sooooo funnnyyyyy",
  "uh oh",
  "Haiyaaaa!!!!",
  "太不尊弃了",
  "tell kaifeng to shut up",
  "github file upload limits are soooo annoying",
  "Python is slowwwwwwwwww",
  "Java > C++ fr",
  "C# and Java are so simmilar",
  "Life is hard. After all, it kills you. — Katharine Hepburn",
  "Me better than Aiden at swimming fr",
  "An ai detector once detected my writing as ai. I'm concerned.",
  "Eclipse IDE for Java is goated fr",
  "Fire Hazard!!!!",
  "If at first you don't succeed, try, try again. Then quit. No use being a damn fool about it. ― W.C. Fields",
  "Created by EZ123",
  "BRO I WANT HIS SISTERS NUMBER - James (2025)",
  "AIDEN DOES NOT UNDERSTAND",
  "Pluh",
  "LING GANG GULI GULI GULI WATANG EENGDANG GUUUUUU EENGDANG GU WATANG TANG GULI GULI GULIiIiIiIi WATANG EENGDANG GUUUU EENG DANG GUu!!! - Connor (2025)",
  "Salt and vi_____"
];

function BrowseUnrestricted() {
  const [quote, setQuote] = useState("Insanity Search");

  const randomizeQuote = () => {
    const i = Math.floor(Math.random() * QUOTES.length);
    setQuote(QUOTES[i]);
  };

  return (
    <div className="bg-[var(--wope-bg)] min-h-screen text-white flex flex-col justify-between">
      <main className="flex-1 py-16 px-2 flex flex-col items-center">
        <h1 className="text-center font-head text-3xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-[var(--wope-purple)] via-[var(--wope-blue)] to-[var(--wope-lavender)] bg-clip-text text-transparent">Browse Unrestricted</h1>
        <section id="proxy" className="w-full max-w-md section">
          <div className="text-center mb-4">
            <span
              className="transition px-4 py-2 rounded-lg bg-[var(--wope-purple)]/10 mb-6 hover:bg-[var(--wope-blue)]/10 focus:outline-none focus:ring-2 focus:ring-[var(--wope-purple)] text-2xl cursor-pointer quote-text"
              id="quoteButton"
              onClick={randomizeQuote}
              >
              {quote}
            </span>
          </div>
          <div style={{ position: 'relative', textAlign: 'center' }}>
            <form id="uv-form" className="w-full flex flex-col items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-6 py-8 shadow-lg mt-2">
              <input id="uv-search-engine" defaultValue="https://duckduckgo.com/?t=h_&q=%s&ia=web" type="hidden" />
              <input id="uv-address" type="text" placeholder="Search Google or type a URL" className="form__input w-full px-4 py-2 rounded-lg bg-white/10 border border-[var(--wope-purple)] text-base outline-none focus:border-[var(--wope-blue)] transition" />
            </form>
          </div>
        </section>
      </main>
      <footer className="w-full mt-12 bg-[var(--wope-nav-bg)]/60 py-6 border-t border-white/10 text-center text-sm text-white/70">
        &copy; 2025 Insanity Services. All rights reserved.
      </footer>
    </div>
  );
}

export default BrowseUnrestricted;
