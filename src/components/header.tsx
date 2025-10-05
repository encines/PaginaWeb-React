import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full flex items-center bg-black/70 backdrop-blur-md  shadow-lg z-50">
      <div className="max-w-10xl mx-auto px-6 w-full">
        <div className="flex items-center justify-between py-3 w-full">
          <a href="/">
            <img
              src="/profile.png"
              className="h-12 w-12 rounded-full"
              alt="Profile"
            />
          </a>
          <nav className="hidden md:flex mx-8">
            <ul className="flex gap-8 text-white text-2xl ">
              <li>
                <Link
                  to="/brincolines"
                  className="hover:text-yellow-500 transition-colors duration-300 cursor-pointer"
                >
                  Brincolines
                </Link>
              </li>
              <li>
                <Link
                  to="/#mesas"
                  className="hover:text-yellow-500 transition-colors duration-300 cursor-pointer"
                >
                  Mesas
                </Link>
              </li>
              <li>
                <Link
                  to="/#carpas"
                  className="hover:text-yellow-500 transition-colors duration-300 cursor-pointer"
                >
                  Carpas
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
