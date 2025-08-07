import React, { useRef } from 'react';

const RunAwayButton = ({ children }) => {
  const btnRef = useRef();

  const moveButton = () => {
    const button = btnRef.current;
    const container = button.parentElement;

    const maxX = container.clientWidth - button.clientWidth;
    const maxY = container.clientHeight - button.clientHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    button.style.transform = `translate(${randomX}px, ${randomY}px)`;
  };

  return (
    <div className="relative w-full h-64">
      <button
        ref={btnRef}
        onMouseEnter={moveButton}
        className="absolute bg-purple-600 text-white px-6 py-3 rounded transition-all duration-300"
      >
        {children}
      </button>
    </div>
  );
};

export default RunAwayButton;
