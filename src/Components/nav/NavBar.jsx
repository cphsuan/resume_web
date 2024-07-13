import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { styles } from "../../styles.js";
import { vvIcon, menu, close } from "../../assets";
import { navLinks } from "../../Constants/constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const currentPath = useLocation().pathname;

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
    setToggle(false);
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 top-0 z-20 bg-primary relative`}
    >
      <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={handleLinkClick}
        >
          <img src={vvIcon} alt="VV Icon" className="w-18 h-9 object-contain" />
        </Link>
        <ul className="hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                currentPath === link.path
                  ? "text-primary-400"
                  : "text-grayscale-50"
              } hover:text-primary-400 text-[18px] font-medium cursor-pointer`}
            >
              <Link to={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            className="w-[28px] h-[28px] object-contain cursor-pointer z-20"
            onClick={() => setToggle(!toggle)}
            src={toggle ? close : menu}
            alt="Menu Icon"
          />
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } pt-20 p-6 bg-blue-400 absolute top-2 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    currentPath === link.path
                      ? "text-grayscale-50"
                      : "text-grayscale-400"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={handleLinkClick}
                >
                  <Link to={link.path}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
