import ColouredLine from "@components/ColouredLine";
import React from "react";

interface CardProps {
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="p-8 w-full max-w-lg border border-gray-300 rounded-lg shadow-lg">
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-bold mb-2 text-[var(--textPrimary)]">
          {title}
        </h2>
        <ColouredLine />
      </div>
      <p className="text-lg text-center mb-4 text-[var(--textSecondary)] pt-5">
        {content}
      </p>
      <div className="text-center">
        <button className="px-4 py-2 backdrop-blur-sm border bg-[var(--lineIndingo)] border-cyan-500 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Learn More</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-teal-500 to-transparent" />
        </button>
      </div>
    </div>
  );
};

export default Card;
