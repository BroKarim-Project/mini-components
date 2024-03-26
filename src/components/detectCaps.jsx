import React, { useState } from 'react';

function DetectCaps() {
  const [isCapsLockOn, setIsCapsLockOn] = useState(false);

  const handleKeyUp = (keyboardEvent) => {
    const capsLockOn = keyboardEvent.getModifierState('CapsLock');
    setIsCapsLockOn(capsLockOn);
  };

  return (
    // <div>
    //   <h2>Sign Up</h2>
    //   <form>
    //     <label htmlFor="password">Password:</label>
    //     <input type="password" id="password" name="password" onKeyUp={handleKeyUp} />
    //     {isCapsLockOn && <p style={{ color: 'red' }}>Caps Lock is ON!</p>}
    //     <button type="submit">Sign Up</button>
    //   </form>
    // </div>
    <div className="p-4">
      <input type="password" id="password" name="password" placeholder="password ..." onKeyUp={handleKeyUp} className="w-80 appearance-none rounded-full border-0 bg-white p-2 px-4  focus:ring-2 focus:ring-orange-500" />
      {isCapsLockOn && <p style={{ color: 'red' }}>Caps Lock is ON!</p>}
    </div>
  );
}

export default DetectCaps;
