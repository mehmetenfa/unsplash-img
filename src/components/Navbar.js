import React from "react";
import { AiOutlineUnorderedList, AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center w-screen h-[5rem] p-6 bg-slate-800 text-amber-50">
        <div className="w-[40rem] flex justify-center">
          <h3 className="text-3xl font-semibold underline">Welcome</h3>
        </div>
        <div className="p-3">
          <div className="flex gap-3 cursor-pointer mr-[10rem]">
            <ul className="flex gap-5">
              <li className="flex gap-1 underline hover:text-yellow-300 active:scale-95">
                <AiOutlineUnorderedList className="mt-1 text-2xl" />
                <Link to="/mylist" className="text-xl">My List</Link>
              </li>
              <li className="flex gap-1  underline hover:text-yellow-300 active:scale-95">
                <AiOutlinePlus className="mt-1 text-2xl" />
                <button className="text-xl">Add List</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
