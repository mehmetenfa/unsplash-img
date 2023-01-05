import React from "react";
import { AiOutlineUnorderedList, AiOutlinePlus } from "react-icons/ai";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center w-screen h-[5rem] p-6 bg-slate-800 text-amber-50">
        <div className="w-[40rem] flex justify-center">
          <h3 className="text-2xl font-semibold">Welcome</h3>
        </div>
        <div className="p-3">
          <div className="flex gap-3 cursor-pointer mr-[10rem]">
            <ul className="flex gap-5">
              <li className="flex gap-1">
                <AiOutlineUnorderedList className="mt-1 text-2xl" />
                <p className="text-xl">My List</p>
              </li>
              <li className="flex gap-1">
                <AiOutlinePlus className="mt-1 text-2xl" />
                <p className="text-xl">Add List</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
