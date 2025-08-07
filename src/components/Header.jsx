import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#1a1a2e] shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white neon-text">MY Portfolio</h1>
        <nav className="space-x-6 hidden md:block">
          <a href="#home" className="neon-link">Home</a>
          <a href="#about" className="neon-link">About</a>
          <a href="#projects" className="neon-link">Projects</a>
          <a href="#contact" className="neon-link">Contact</a>
        </nav>
      </div>

      {/* Multicolor neon line */}
      <div className="h-1 w-full flex">
        <div className="flex-1 bg-pink-500 shadow-[0_0_10px_#ec4899]" />
        <div className="flex-1 bg-yellow-400 shadow-[0_0_10px_#facc15]" />
        <div className="flex-1 bg-green-400 shadow-[0_0_10px_#34d399]" />
        <div className="flex-1 bg-blue-400 shadow-[0_0_10px_#60a5fa]" />
        <div className="flex-1 bg-purple-400 shadow-[0_0_10px_#a78bfa]" />
      </div>
    </header>
  );
};

export default Header;
