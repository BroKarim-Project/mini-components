import React, { useState } from 'react';
import './text-hover';

const SplitText = () => {
  const [splitType, setSplitType] = useState('letter'); // State untuk menyimpan jenis pembagian saat ini
  const [activeButton, setActiveButton] = useState(null);
  // Fungsi untuk mengubah jenis pembagian saat tombol ditekan
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
          {/* <button className={activeButton === 'word' ? 'p-2 bg-blue-400 rounded-md text-white hover:bg-black' : 'p-2 bg-black rounded-md text-white hover:bg-blue-400'} onClick={() => handleSplitChange('word')}>
            Type 2
          </button> */}
        </div>

        {/* split 1 */}
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

/*
Penjelasan : 
- Keknya sekarang fokus ke split text dulu sampe bberapa animasi, min.5 lah
- Untuk design template ikutin @sona_code

- Keknya kedepan untuk memudahka cari ide + pemahaman, untuk setiap topik kita bakal buat min.2 variasi


Sumber : 
 # code
- https://web.dev/articles/building/split-text-animations?hl=id
 # pembahasan
- https://web.dev/articles/building/split-text-animations

Pemicu : 
- https://codepen.io/GreenSock/pen/pEKYVz

*/
