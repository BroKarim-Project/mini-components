import React, { useState } from 'react';
import './text-hover';

const SplitText = () => {
  const [splitType, setSplitType] = useState('letter'); 
  const [activeButton, setActiveButton] = useState(null);
  const handleSplitChange = (type) => {
    setSplitType(type);
    setActiveButton(type);
  };

  return (
    <>
      {' '}
      <div className="min-h-[100vh] p-4 flex flex-col">
        <div className="pb-10 flex gap-2" id="nav">
          <button className={activeButton === 'letter' ? 'p-2 bg-blue-400 rounded-md text-white hover:bg-black' : 'p-2 bg-black rounded-md text-white hover:bg-blue-400'} onClick={() => handleSplitChange('letter')}>
            Type 1
          </button>
        </div>
        <div>
          {splitType === 'letter' && (
            <text-hover split-by="letter" letter-animation>
              {' '}
              Hello Guys
            </text-hover>
          )}
          {splitType === 'word' && (
            <text-hover split-by="word" word-animation>
              Hello Guys
            </text-hover>
          )}
        </div>
      </div>
    </>
  );
};

export default SplitText;
