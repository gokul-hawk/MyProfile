import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e]"
    >
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
        Hi, I'm <span className="text-purple-400">GOKULAUDHAYAN V</span>
      </h1>
      <p className="text-gray-300 max-w-xl text-lg md:text-xl mb-6">
        I Learn Things out of curiousity and forgert in a week😅 , But still like to learn from scratch["HELLO WORLD!"]
      </p>
      <div className="space-x-4">
        <a
          href="#projects"
          className="px-6 py-2 rounded-lg text-white bg-purple-600 hover:bg-purple-700 shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
        >
          See My Work
        </a>
        <a
          href="#contact"
          className="px-6 py-2 rounded-lg border border-purple-500 text-purple-400 hover:bg-purple-700 hover:text-white transition-all duration-300"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
