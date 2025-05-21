import React from "react";

export default function Settings() {
  const openSelf = () => {
    const newWindow = window.open();
    if (newWindow) {
      newWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>Insanity</title>
          <style>
            body, html {
              margin: 0;
              padding: 0;
              height: 100%;
              overflow: hidden;
            }
            iframe {
              width: 100%;
              height: 100%;
              border: none;
            }
          </style>
        </head>
        <body>
          <iframe src="${window.location.href}"></iframe>
        </body>
        </html>
      `);
      newWindow.document.close();
    }
  };

  return (
    <div className="bg-[var(--wope-bg)] min-h-screen flex flex-col">
      <header className="text-center py-16">
        <h1 className="text-3xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-[var(--wope-purple)] via-[var(--wope-blue)] to-[var(--wope-lavender)] bg-clip-text text-transparent">
          Settings
        </h1>
      </header>
      <main className="flex-grow flex justify-center items-start space-x-4 mt-4">
        <div
          className="bg-[#0d0d0d] border border-gray-700 rounded-lg shadow-lg p-6"
          style={{ height: "40vh", width: "calc(50% - 20px)" }}
        >
          <div className="p-4 flex flex-col items-center w-full">
            <h2 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-[var(--wope-purple)] via-[var(--wope-blue)] to-[var(--wope-lavender)] bg-clip-text text-transparent">
              Cloak
            </h2>
            <div className="flex justify-center space-x-8">
              <button
                onClick={() => {
                  localStorage.setItem("cloak", "insanity");
                  window.dispatchEvent(new Event("cloak-changed"));
                }}
                className="transition-transform transform hover:scale-110"
              >
                <img src="/insanity-logo.png" alt="Insanity Cloak" className="w-16 h-16" />
              </button>
              <button
                onClick={() => {
                  localStorage.setItem("cloak", "schoology");
                  window.dispatchEvent(new Event("cloak-changed"));
                }}
                className="transition-transform transform hover:scale-110"
              >
                <img src="/schoology.png" alt="Schoology Cloak" className="w-16 h-16" />
              </button>
              <button
                onClick={() => {
                  localStorage.setItem("cloak", "google");
                  window.dispatchEvent(new Event("cloak-changed"));
                }}
                className="transition-transform transform hover:scale-110"
              >
                <img src="/google.png" alt="Google Cloak" className="w-16 h-16" />
              </button>
              <button
                onClick={() => {
                  localStorage.setItem("cloak", "powerschool");
                  window.dispatchEvent(new Event("cloak-changed"));
                }}
                className="transition-transform transform hover:scale-110"
              >
                <img src="/powerschool.ico" alt="Powerschool Cloak" className="w-16 h-16" />
              </button>
            </div>
            <div className="flex flex-col items-center mt-10 space-y-4">
              <button
                onClick={openSelf}
                className="bg-[var(--wope-purple)] hover:bg-[var(--wope-dark-purple)] transition text-white px-8 py-3 rounded-lg font-bold shadow-xl"
              >
                Open in About:Blank
              </button>
            </div>
          </div>
        </div>

        {/* Partners Box */}
        <div
          className="bg-[#0d0d0d] border border-gray-700 rounded-lg shadow-lg p-6"
          style={{ height: "40vh", width: "calc(50% - 20px)", overflow: "auto" }}
        >
          <div className="p-4 flex flex-col items-center w-full">
            <h2 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-[var(--wope-purple)] via-[var(--wope-blue)] to-[var(--wope-lavender)] bg-clip-text text-transparent">
              Our Partners
            </h2>
            <div className="flex flex-wrap justify-start items-center w-full">
              <a href="https://ajh.college/" target="_blank" rel="noopener noreferrer" className="m-1">
                <img src="/ajh-college-icon.png" alt="AJH College" className="w-14 h-14 object-contain transition-transform transform hover:scale-110" />
              </a>
              <a href="https://gn-math.github.io/" target="_blank" rel="noopener noreferrer" className="m-1">
                <img src="/gnmath.png" alt="GN Math" className="w-14 h-14 object-contain transition-transform transform hover:scale-110" />
              </a>
              <a href="https://apexisthebest.vercel.app/" target="_blank" rel="noopener noreferrer" className="m-1">
                <img src="https://apexisthebest.vercel.app/favicon.ico" alt="Apex Lite" className="w-14 h-14 object-contain transition-transform transform hover:scale-110" />
              </a>
              <a href="https://pulsar.thedailyshouter.com/" target="_blank" rel="noopener noreferrer" className="m-1">
                <img src="https://raw.githubusercontent.com/Yeti1o1/Pulsar/refs/heads/main/public/Imgs/favicon.ico" alt="Pulsar" className="w-14 h-14 object-contain transition-transform transform hover:scale-110" />
              </a>
              <a href="https://accelerationproxy.me/" target="_blank" rel="noopener noreferrer" className="m-1">
                <img src="https://raw.githubusercontent.com/xdevnightless/Acceleration/refs/heads/main/public/images/favicon.webp" alt="Acceleration" className="w-14 h-14 object-contain transition-transform transform hover:scale-110" />
              </a>
              <a href="https://astralubg.wixsite.com/home" target="_blank" rel="noopener noreferrer" className="m-1">
                <img src="https://static.wixstatic.com/media/598c68_4108f64ea2474a03a19c176f10eadcc0~mv2.jpg/v1/fill/w_164,h_146,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/ASTRAL%20RETURNS%20BLUE%201.jpg" alt="Astral" className="w-14 h-14 object-contain transition-transform transform hover:scale-110" />
              </a>
              <a href="https://dskjfoisjfsjio.github.io/#/" target="_blank" rel="noopener noreferrer" className="m-1">
                <img src="https://dskjfoisjfsjio.github.io/assets/new%20logo.png" alt="Alexr" className="w-14 h-14 object-contain transition-transform transform hover:scale-110" />
              </a>
              <a href="https://discord.gg/Z8xqdUnbnr" target="_blank" rel="noopener noreferrer" className="m-1">
                <img src="/webpager.png" alt="Webpager" className="w-14 h-14 object-contain transition-transform transform hover:scale-110" />
              </a>
              <a href="https://usewaves.site/" target="_blank" rel="noopener noreferrer" className="m-1">
                <img src="https://usewaves.site/assets/images/icons/favicon.ico" alt="Waves" className="w-14 h-14 object-contain transition-transform transform hover:scale-110" />
              </a>
              <a href="https://catsploit.pages.dev/" target="_blank" rel="noopener noreferrer" className="m-1">
                <img src="/catsploit.png" alt="Catsploit" className="w-14 h-14 object-contain transition-transform transform hover:scale-110" />
              </a>
              <a href="https://sharted-or.farted.net/" target="_blank" rel="noopener noreferrer" className="m-1">
                <img src="/cbgames.png" alt="CBGames" className="w-14 h-14 object-contain transition-transform transform hover:scale-110" />
              </a>
              <a href="https://l2x.purpleutilities.xyz/" target="_blank" rel="noopener noreferrer" className="m-1">
                <img src="/lounge2fx.png" alt="Lounge2FX" className="w-14 h-14 object-contain transition-transform transform hover:scale-110" />
              </a>
              <a href="https://breakium.com/" target="_blank" rel="noopener noreferrer" className="m-1">
                <img src="https://breakium.com/data/images/favicon-transparent.png" alt="Breakium" className="w-14 h-14 object-contain transition-transform transform hover:scale-110" />
              </a>
              <a href="https://discord.gg/wGB3pd3bQk" target="_blank" rel="noopener noreferrer" className="m-1">
                <img src="/Obscura.png" alt="Obscura" className="w-14 h-14 object-contain transition-transform transform hover:scale-110" />
              </a>
              <a href="https://glseries.net/" target="_blank" rel="noopener noreferrer" className="m-1">
                <img src="https://glseries.net/assets/img/essential/icon.ico" alt="Geometry Learn Series" className="w-14 h-14 object-contain transition-transform transform hover:scale-110" />
              </a>
              <a href="https://boredomarcade.xyz/" target="_blank" rel="noopener noreferrer" className="m-1">
                <img src="/boredom.png" alt="Boredom Arcade" className="w-14 h-14 object-contain transition-transform transform hover:scale-110" />
              </a>
              <a href="https://voucan-us4.github.io/" target="_blank" rel="noopener noreferrer" className="m-1">
                <img src="https://cdn.discordapp.com/icons/1157125685178007672/d10ceed45c6ae03f92a95124bcf34392.webp?size=128" alt="US4" className="w-14 h-14 object-contain transition-transform transform hover:scale-110" />
              </a>
              <a href="https://arsenic.smartfoloo.space/" target="_blank" rel="noopener noreferrer" className="m-1">
                <img src="https://arsenic.smartfoloo.space/assets/favicon.png" alt="Arsenic" className="w-14 h-14 object-contain transition-transform transform hover:scale-110" />
              </a>
              <a href="https://petezahgames.com/" target="_blank" rel="noopener noreferrer" className="m-1">
                <img src="https://petezahgames.com/storage/images/logo-png-removebg-preview.png" alt="PeteZah" className="w-14 h-14 object-contain transition-transform transform hover:scale-110" />
              </a>
              <a href="https://sdfsdf.cbass92.org/asdjklhfskjafhakfhueoyraehfjkcnjkdscnsjakdreuoiwefh/" target="_blank" rel="noopener noreferrer" className="m-1">
                <img src="https://cdn.discordapp.com/icons/1316530560599986176/3e3cea53df71c9ec6dedcba5d3f81961.webp?size=300&quality=lossless" alt="pegleg" className="w-14 h-14 object-contain transition-transform transform hover:scale-110" />
              </a>
              <a href="https://dsc.gg/parcoil/" target="_blank" rel="noopener noreferrer" className="m-1">
                <img src="/parcoli.png" alt="Parcoli" className="w-14 h-14 object-contain transition-transform transform hover:scale-110" />
              </a>
              <a href="https://lupine.red/" target="_blank" rel="noopener noreferrer" className="m-1">
                <img src="https://lupine.red/logo.svg" alt="RED" className="w-14 h-14 object-contain transition-transform transform hover:scale-110" />
              </a>
              <a href="https://discord.gg/pKtRYbmBeA/" target="_blank" rel="noopener noreferrer" className="m-1">
                <img src="/ROMbook.png" alt="ROMbook/Observa" className="w-14 h-14 object-contain transition-transform transform hover:scale-110" />
              </a>
              <a href="https://discord.gg/TSp7qKf4wY/" target="_blank" rel="noopener noreferrer" className="m-1">
                <img src="/falcon.png" alt="Falcon" className="w-14 h-14 object-contain transition-transform transform hover:scale-110" />
              </a>
              <a href="https://compassnetwork.online/" target="_blank" rel="noopener noreferrer" className="m-1">
                <img src="https://compassnetwork.online/images/logo1.png" alt="Compass Network" className="w-14 h-14 object-contain transition-transform transform hover:scale-110" />
              </a>
              <a href="https://www.sakuraon.top/" target="_blank" rel="noopener noreferrer" className="m-1">
                <img src="https://www.sakuraon.top/images/sakura.png" alt="Sakura" className="w-14 h-14 object-contain transition-transform transform hover:scale-110" />
              </a>
              <a href="https://classroom84x-math.vercel.app/" target="_blank" rel="noopener noreferrer" className="m-1">
                <img src="https://classroom84x-math.vercel.app/img/classroom84x.png" alt="Classroom84X" className="w-14 h-14 object-contain transition-transform transform hover:scale-110" />
              </a>
              <a href="https://discord.gg/SsPJMJH4z7/" target="_blank" rel="noopener noreferrer" className="m-1">
                <img src="/wave.png" alt="Wave" className="w-14 h-14 object-contain transition-transform transform hover:scale-110" />
              </a>
              <a href="https://maths.onl/" target="_blank" rel="noopener noreferrer" className="m-1">
                <img src="https://maths.onl/images/logo/logo.png" alt="UniUB" className="w-14 h-14 object-contain transition-transform transform hover:scale-110" />
              </a>
              <a href="https://sunnys.pro/" target="_blank" rel="noopener noreferrer" className="m-1">
                <img src="https://raw.githubusercontent.com/SunnysGym/SunnysGym.github.io/refs/heads/main/assets/img/brand/favicon.ico" alt="Sunny's Gym" className="w-14 h-14 object-contain transition-transform transform hover:scale-110" />
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Credits Box */}
      <div
        className="bg-[#0d0d0d] border border-gray-700 rounded-lg shadow-lg p-6 mt-4 mx-4 mb-8"
        style={{ width: "calc(100% - 32px)" }} 
      >
        <div className="p-4 flex flex-col items-center w-full">
          <h2 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-[var(--wope-purple)] via-[var(--wope-blue)] to-[var(--wope-lavender)] bg-clip-text text-transparent">
            Credits
          </h2>
          <p className="text-white text-center">
            - Website Design & Development: Designed and developed by EZ123<br />
            - Backend Scripts & Functionality: Implemented by EZ123<br />
            - UI/UX Inspiration: Inspired by <a href="https://wope.com" className="underline">wope.com</a><br />
            - Proxy Technology: Powered by UV Static by TIW<br />
            - Games: All games belong to their respective owners.<br />
            - Logos & Icons: Some logos and icons, such as the Google logo, belong to their respective owners.<br />
            - Kudos to Our Partners: Thank you for your support!<br />
            - Special thanks to Benrogo for their bare server for the proxy.
          </p>
        </div>
      </div>
    </div>
  );
}
