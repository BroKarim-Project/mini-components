import React, { useState } from 'react';

const GenerateColor = () => {
  const [color, setColor] = useState('#288dd2'); //inital color

  const generateNewColor = () => {
    const newColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setColor(newColor);
  };

  return (
    <div className="p-2 w-full flex items-center gap-2 ">
      <div id="box-1" className="box w-40 h-40 flex items-center justify-center" style={{ backgroundColor: color }}>
        {' '}
        {color}{' '}
      </div>
      <button
        onClick={generateNewColor}
        className="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-purple-600 active:shadow-none shadow-lg bg-gradient-to-tr from-purple-600 to-purple-500 border-purple-700 text-white"
      >
        <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
        <span className="relative">Generate</span>
      </button>
    </div>
  );
};

export default GenerateColor;
