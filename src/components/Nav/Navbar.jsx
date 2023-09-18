import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // function for navbar menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav>
      <div className='bg-blue flex items-center justify-between gap-[5rem] p-6 text-white'>
        <h1>LogoHere</h1>
        <div className='z-20 flex justify-between'>
            <button onClick={toggleMenu} className=''>
              {isOpen ? "close" : "open"}
            </button>
        </div>
        <ul
          className={`${
            isOpen
              ? "fixed left-0 right-0 top-0 bottom-0 w-full h-full text-center bg-blue py-[50%]"
              : "hidden"
          } lg:flex gap-10 `}>
          <li className='p-2 lg:p-0'>Home</li>
          <li className='p-2 lg:p-0'>Products</li>
          <li className='p-2 lg:p-0'>Farm</li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
