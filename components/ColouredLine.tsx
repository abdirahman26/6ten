import React from "react";

type ColouredLineProps = {
  thickness?: string;
};

function ColouredLine({ thickness = "0.5" }: ColouredLineProps) {
  return (
    <div
      className={`px-4 text-left md:text-center font-medium font-sans tracking-tight text-sm bg-gradient-to-r text-white from-pink-500 via-purple-500 to-indigo-500 py-${thickness}`}
    ></div>
  );
}

export default ColouredLine;
