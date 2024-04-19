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
          <button className={activeButton === 'letter' ? 'p-2 bg-blue-400 rounded-md text-white ' : 'p-2 bg-black rounded-md text-white '} onClick={() => handleSplitChange('letter')}>
            Type 1
          </button>
          <button className={activeButton === 'word' ? 'p-2 bg-blue-400 rounded-md text-white ' : 'p-2 bg-black rounded-md text-white '} onClick={() => handleSplitChange('word')}>
            Type 1
          </button>
          <button className={activeButton === 'rolling' ? 'p-2 bg-blue-400 rounded-md text-white ' : 'p-2 bg-black rounded-md text-white '} onClick={() => handleSplitChange('rolling')}>
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
          {/* split 2 */}
          {splitType === 'word' && (
            <text-hover split-by="word" word-animation>
              Hello Guys
            </text-hover>
          )}
          {/* split 3 */}
          {splitType === 'rolling' && (
            <div className="menu__item block p-4">
              <h1 className="menu__link text-5xl">
                <span className="menu__title flex gap-2 text-center  overflow-hidden">
                  <span className="menu__first-word text-blue-400 inline-block relative transition duration-300" data-hover="Hello">
                    Hello
                  </span>
                  <span className="menu__second-word text-black inline-block relative transition duration-300" data-hover="World">
                    World
                  </span>
                </span>
              </h1>

              <style>
                {`
                  .menu__link {
                    &:hover,
                    &:focus {
                      .menu__first-word {
                        transform: translate3d(0, -110%, 0);
                      }
                  
                      .menu__second-word {
                        transform: translate3d(0, 110%, 0);
                      }
                    }
                  }
    
                  .menu__first-word,
                  .menu__second-word {
                    &::before {
                      position: absolute;
                      content: attr(data-hover);
                    }
                  }
    
                  .menu__first-word {
                    &::before {
                      top: 105%;
                      color: #000;
                    }
                  }
    
                  .menu__second-word {
                    &::before {
                      bottom: 105%;
                      color: #60a5fa;
                    }
                  } `}
              </style>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SplitText;
