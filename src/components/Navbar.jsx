import React, { useState } from "react";


import { BiCart } from "react-icons/bi"


const Navbar = () => {




  return (
    <div className="w-full  h-[60px] bg-black">
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        <div>
          <h1 className="text-[#00d8ff] ">TeeRex Store</h1>
        </div>
        <div className=" ">
          <ul className="flex text-white items-center">
            <li className="hidden md:flex" >Products</li>
            <li className="flex flex-col items-center  ">
              <span className="-mb-3">1</span>
              <BiCart size={35} />
            </li>
          </ul>
        </div>


      </div>
    </div>
  );
};

export default Navbar;