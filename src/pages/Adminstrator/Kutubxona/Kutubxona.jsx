import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Kutubxona = () => {
  const [library, setLibrary] = useState(false);
  return (
    <div className="library pt-[50px]">
      <div className="container">
        <div className="ibrary__wrapper ">
          <button
            onClick={(e) => setLibrary(true)}
            className="w-[233px] text-[white] rounded-sm h-[40px] bg-[#05CC19]"
          >
            + Adabiyotlarni yuklash
          </button>
        </div>
      </div>
    </div>
  );
};

export default Kutubxona;
