import React from "react";

function BrowseUnrestricted() {
  return (
    <div className="min-h-screen bg-[var(--wope-bg)]">
      <iframe src="/proxy.html" title="Browse Unrestricted" className="w-full h-screen border-none" />
    </div>
  );
}

export default BrowseUnrestricted;
