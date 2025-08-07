import React, { useState } from 'react';

const initialProjects = [
  {
    title: 'AI Tutor',
    description: 'An adaptive AI-based tutoring system that identifies conceptual gaps and offers learning suggestions.[under construction]',
    liveDemo: '#',
    sourceCode: '#',
  },
  {
    title: 'Movie Ticket Agent',
    description: 'A MongoDB-backed chat agent system for smart seat selection and bookings in theaters.',
    liveDemo: '#',
    sourceCode: '#',
  },
  {
    title: 'SportsConnect',
    description: 'A social platform for athletes to connect, share achievements, and organize matches.',
    liveDemo: '#',
    sourceCode: '#',
  },
  {
    title: 'Wedding planner',
    description: 'A website for planners and customers to connect, share ideas, and plan weddings.',
    liveDemo: '#',
    sourceCode: '#',
  },
  {
    title: 'Calculator',
    description: 'My hello world project using HTML, CSS, and JavaScript.',
    liveDemo: '#',
    sourceCode: '#',
  },
  {
    title: 'Lora Fine Tuned llama for device suggestion',
    description: 'A fine-tuned Lora model for device suggestion based on user preferences with llama and Django.',
    liveDemo: '#',
    sourceCode: '#',
  },
  {
    title: 'E-commerce Website',
    description: 'A full-stack e-commerce website with product retrieval from different sites and ordering the products based on ratings.[under renovation based on ONDC]',
    liveDemo: '#',
    sourceCode: '#',
  },
  {
    title: 'Folder Allocator',
    description: 'A simple AI agents based tool to allocate folders based on user preferences and file types.',
    liveDemo: '#',
    sourceCode: '#',
  },
  {
    title: 'My Published Paper',
    description: 'Advancement of ML in smart House, a chapter published in Integrating Metaheuristics in Computer Vision [Indexed in Scopus]',
    liveDemo: 'https://www.sciencedirect.com/book/9780323959302/integrating-metaheuristics-in-computer-vision',
    sourceCode: '#',
  },
];

const shuffleArray = (arr) => {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const ProjectSection = () => {
  const [projects, setProjects] = useState(initialProjects);

  const handleCardClick = () => {
    const shuffled = shuffleArray(projects);
    setProjects(shuffled);
  };

  return (
    <section id="projects" className="bg-[#0f0f1f] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center neon-text">Projects</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-500">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={handleCardClick}
              className="cursor-pointer bg-[#1a1a2e] p-6 rounded-xl shadow-lg border border-[#3f3f5a] hover:shadow-[0_0_20px_#00f2fe] hover:border-cyan-400 transform transition duration-500 hover:scale-[1.02]"
            >
              <h3 className="text-xl font-semibold mb-2 neon-text">{project.title}</h3>
              <p className="text-sm mb-4 text-gray-300">{project.description}</p>
              <div className="flex gap-4">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-btn px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md text-white text-sm font-medium hover:scale-105 transform transition hover:shadow-lg hover:animate-ping"
                >
                  About Project 🚀
                </a>
                <a
                  href={project.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-cyan-400 rounded-md text-cyan-300 text-sm font-medium hover:bg-cyan-500 hover:text-black transition"
                >
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
