import React from "react";
import { motion } from "framer-motion";

// HighlightWord component to animate key terms
const HighlightWord = ({ children, color }) => {
  return (
    <motion.span
      className={`inline-block cursor-grab font-semibold ${color} select-none`}
      drag
      dragConstraints={{ left: -50, right: 50, top: -20, bottom: 20 }}
      dragElastic={1}
      whileTap={{ scale: 5.0 }}
      whileDrag={{ scale: 1.1, rotate: 20 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {children}
    </motion.span>
  );
};

const About = () => {
  return (
    
    <section
      id="about"
      className="w-full min-h-screen px-6 py-20 bg-[#1b1b2f] text-white flex items-center justify-center"
    >
      
      
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-md text-gray-400">have fun by dragging the words</p>
        <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-4">
          About Me
        </h2>
        <div className="border-b-4 border-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 w-32 mx-auto mb-6"></div>

        <p className="text-lg text-gray-300 leading-8 mb-6">
          👋 I’m a passionate{" "}
          <HighlightWord color="text-purple-300">Frontend Developer</HighlightWord>{" "}
          focused on creating beautiful and functional user experiences. .
        </p>

        <p className="text-md text-gray-400 leading-8 mb-6">
          💡 I’m a passionate{" "}
          <HighlightWord color="text-yellow-400">Software</HighlightWord> and{" "}
          <HighlightWord color="text-purple-300">AI Enthusiast</HighlightWord> with a
          strong foundation in{" "}
          <HighlightWord color="text-red-300">machine learning</HighlightWord>,{" "}
          <HighlightWord color="text-green-300">software development</HighlightWord>,
          and{" "}
          <HighlightWord color="text-orange-400">problem-solving</HighlightWord>.I enjoy
          working with technologies like{" "}
          <HighlightWord color="text-pink-400">React</HighlightWord>,{" "}
          <HighlightWord color="text-blue-400">Tailwind CSS</HighlightWord>, and
          building projects that solve{" "}
          <HighlightWord color="text-green-400">real-world problems</HighlightWord>. I
          thrive on building intelligent, real-world solutions and am constantly
          exploring emerging technologies in{" "}
          <HighlightWord color="text-blue-400">Artificial Intelligence</HighlightWord>{" "}
          and{" "}
          <HighlightWord color="text-pink-400">Deep Learning</HighlightWord>.
        </p>

        <p className="text-md text-gray-400 leading-8 mb-6">
          🚀 Adaptable and driven, I enjoy turning complex challenges into
          innovative applications. Whether it's coding smart systems, learning new
          frameworks, or optimizing algorithms, I’m eager to apply my skills to
          create impactful software.
        </p>

        <p className="text-md text-gray-400">
          🧠 I also enjoy learning new tools, exploring creative designs, and turning
          ideas into reality. My goal is to always deliver{" "}
          <HighlightWord color="text-teal-300">clean</HighlightWord>,{" "}
          <HighlightWord color="text-indigo-300">performant</HighlightWord>, and{" "}
          <HighlightWord color="text-yellow-300">accessible code</HighlightWord>.
        </p>
      </div>
    </section>
  );
};

export default About;
