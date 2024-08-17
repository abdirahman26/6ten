import React from "react";

interface ColouredLineProps {
  width?: string;
}

function ColouredLine({ width }: ColouredLineProps) {
  return (
    <div className={`py-0.5 px-4 text-left md:text-center font-medium font-sans tracking-tight text-sm bg-gradient-to-r text-white from-pink-500 via-purple-500 to-indigo-500 ${width ? `w-${width}` : ""}`}></div>
  );
}

export default ColouredLine;
