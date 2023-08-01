import {} from "@heroicons/react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="flex flex-row items-center bg-white shadow-sm h-[80px] justify-start px-16">
      <div className="flex flex-row items-center justify-between">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
          />
        </svg>
        <span className="ml-2 text-md">BeetCode</span>
      </div>

      <div className="mx-[15%]">
        <ul className="flex flex-row items-center gap-[1rem]">
          <Link to="/">
            <li className="cursor-pointer text-sm hover:text-slate-600">
              Home
            </li>
          </Link>
          <Link to="/explore">
            <li className="cursor-pointer text-sm hover:text-slate-600">
              Explore
            </li>
          </Link>
          <Link to="/problem">
            <li className="cursor-pointer text-sm hover:text-slate-600">
              Problems
            </li>
          </Link>
        </ul>
      </div>
      <div className="cursor-pointer ml-auto">
        <Link to="/signup">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
