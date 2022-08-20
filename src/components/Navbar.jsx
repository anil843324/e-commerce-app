import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { BiCart } from "react-icons/bi"
import { useSelector } from "react-redux/es/exports";

const Navbar = () => {
  const navigate = useNavigate()
  const cartData = useSelector((state) => state.cartData);


  let quantity =
  cartData.length &&
  cartData.map((ele) => ele.quantity).reduce((prev, next) => prev + next);



  return (
    <div className="w-full  h-[60px] bg-black">
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        <div>
          <h1 className="text-[#00d8ff] cursor-pointer  " onClick={() => navigate("/")} >TeeRex Store</h1>
        </div>
        <div className=" ">
          <ul className="flex text-white items-center">
            <li className="hidden md:flex text-xl"  >
              <NavLink
                style={({ isActive }) =>
                  isActive
                    ? {
                      borderBottom: "1px solid red"
                    }
                    : {}
                }

                to={"/"}>
                Products
              </NavLink>

            </li>
            <NavLink
              style={({ isActive }) =>
                isActive
                  ? {
                    borderBottom: "1px solid red"
                  }
                  : {}
              }

              to={"/checkout"} >
              <li className="flex flex-col items-center  ">
                <span className="-mb-3">{quantity}</span>
                <BiCart size={35} className=" " />
              </li>
            </NavLink>
          </ul>
        </div>


      </div>
    </div>
  );
};

export default Navbar;