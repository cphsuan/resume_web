import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { vvIcon } from "../../assets/index.js";
import routes from "../../constants/routes.jsx";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const currentPath = useLocation().pathname;

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
    setToggle(false);
  };

  return (
    <nav className="py-5">
      <div className="flex justify-between items-center">
        <Link to="/" onClick={handleLinkClick}>
          <img src={vvIcon} alt="VV Home" className="h-9" />
        </Link>
        <ul className="hidden sm:flex flex-row gap-10">
          {routes.map((link) => (
            <li
              key={link.handle.id}
              className={`${
                currentPath === link.path
                  ? "text-primary-600"
                  : "text-grayscale-50"
              } hover:text-primary-600 cursor-pointer`}
            >
              <Link to={link.path}>{link.handle.title}</Link>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <div
            className="h-[40px] cursor-pointer z-20"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? (
              <i className="fa-solid fa-x" />
            ) : (
              <i className="fa-solid fa-bars" />
            )}
          </div>
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-primary-800 absolute top-2 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {routes.map((link) => (
                <li
                  key={link.handle.id}
                  className={`${
                    currentPath === link.path
                      ? "text-grayscale-50"
                      : "text-grayscale-400"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={handleLinkClick}
                >
                  <Link to={link.path}>{link.handle.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
