import React from "react";

function BrowseUnrestricted() {
  return (
    <div className="bg-[var(--wope-bg)] min-h-screen text-white py-16 px-2">
      <h1 className="text-center font-head text-3xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-[var(--wope-purple)] via-[var(--wope-blue)] to-[var(--wope-lavender)] bg-clip-text text-transparent">
        Browse Unrestricted
      </h1>
      {/* You can add more content or instructions for proxy browsing here */}
      <div className="max-w-2xl mx-auto text-center text-white/80 text-lg">
        Welcome! Use this page to browse the internet without restrictions using our built-in proxy.
      </div>
    </div>
  );
}

export default BrowseUnrestricted;
