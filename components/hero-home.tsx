"use client";

export default function HeroHome() {
  return (
    <main className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white min-h-screen">
      {/* ================= UNIQUE TOP BAR ================= */}
      <header className="fixed top-0 left-0 w-full bg-gray-900/60 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Brand / Logo */}
          <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 tracking-wide">
            Fazal Mohaudin — Portfolio
          </h1>

          {/* Center Glow Line */}
          <div className="hidden md:block relative w-1/3 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent animate-pulse"></div>

          {/* Right Side Info — Unique Animated Orb */}
          <div className="flex items-center gap-3 text-sm text-gray-300 font-medium">
            <div className="w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)] animate-ping"></div>
          </div>
        </div>
      </header>

      {/* ================= HERO SECTION (UPDATED & RESPONSIVE) ================= */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center pt-32">
          {/* Floating Glow Orb */}
          <div className="absolute top-20 right-10 w-32 h-32 bg-cyan-500/20 blur-3xl rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-40 h-40 bg-indigo-500/20 blur-3xl rounded-full animate-ping"></div>

          {/* Main Hero Text */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-blue-500 to-cyan-400 mb-6 leading-tight drop-shadow-lg">
            Fazal Mohaudin
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl text-indigo-200/90 font-semibold tracking-wide mb-4">
            Cyber Security Professional
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl text-indigo-300/80 font-light tracking-wide italic max-w-2xl">
            Specializing in Security Analysis, Threat Detection, Hardening & Defensive Operations.
          </p>

          {/* Skill Pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <span className="px-4 py-1 rounded-full bg-indigo-900/40 text-indigo-200 text-sm border border-indigo-500/30 backdrop-blur-md hover:bg-indigo-700/40 transition">Cyber Security</span>
            <span className="px-4 py-1 rounded-full bg-indigo-900/40 text-indigo-200 text-sm border border-indigo-500/30 backdrop-blur-md hover:bg-indigo-700/40 transition">Web Development</span>
            <span className="px-4 py-1 rounded-full bg-indigo-900/40 text-indigo-200 text-sm border border-indigo-500/30 backdrop-blur-md hover:bg-indigo-700/40 transition">Graphic Design</span>
          </div>
        </section>
    </main>
  );
}
