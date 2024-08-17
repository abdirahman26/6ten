import React from 'react';

interface CardProps {
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="p-8 w-full max-w-lg border border-gray-300 rounded-lg shadow-lg">
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-bold mb-2 text-[var(--textPrimary)]">{title}</h2>
        <div className="border-b-4 border-blue-500 mx-auto w-1/2"></div>
      </div>
      <p className="text-lg text-gray-700 text-center mb-4 text-[var(--textSecondary)]">{content}</p>
      <div className="text-center">
        <a
          href="#contact"
          className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300 bg-gradient-to-r from-[var(--linePurple)] to-[var(--lineIndigo)]"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Card;
