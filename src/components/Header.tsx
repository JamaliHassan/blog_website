"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setMenu] = useState(false);
  const menuHandle = () => {
    setMenu((prev) => !prev);
  };

  return (
    <header className="w-full h-[80px] fixed flex justify-center items-center z-50 bg-transparent backdrop-blur-md text-[#457fb9] mb-10">
      <nav className="w-[90%] flex justify-between items-center relative">
        <div className="font-spartan text-2xl font-bold">
          <Link href={"/"}>
            <h1>The Daily Scroll</h1>
          </Link>
        </div>
        <button
          onClick={menuHandle}
          className="lg:hidden flex"
          aria-label={isMenuOpen ? "Close  Menu" : "Open  Menu"}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        <ul className="lg:flex gap-5 text-lg font-roboto font-bold hidden">
          {[
            { name: "Home", href: "/" },
            { name: "Blog", href: "/blogsPage" },
            { name: "About", href: "/about" },
            { name: "Contact", href: "/contact" },
          ].map((items, index) => (
            <li
              key={index}
              className="transtition-transform ease-linear duration-200 hover:border-[#D4A373] hover:border-b-2 p-2 hover:text-[#D4A373] hover:scale-105"
            >
              <Link href={items.href}>{items.name}</Link>
            </li>
          ))}
        </ul>
        {isMenuOpen && (
          <ul className="flex flex-col gap-3 p-3 text-lg font-roboto font-bold w-screen fixed top-20 left-0 bg-white transition-transform transform duration-300 ease-in-out scale-100">
            {[
              { name: "Home", href: "/" },
              { name: "Blog", href: "/blogsPage" },
              { name: "About", href: "/about" },
              { name: "Contact", href: "/contact" },
            ].map((items, index) => (
              <li key={index}>
                <Link href={items.href}>{items.name}</Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
