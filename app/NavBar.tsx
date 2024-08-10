"use client";

import React, { useState, useEffect } from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function NavBar() {
  const pathname = usePathname();
  const [activePath, setActivePath] = useState(pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  const handleClick = (path: string) => {
    setActivePath(path);
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const linkClassName = (path: string) =>
    `block py-2 px-3 rounded md:p-0 ${
      activePath === path 
        ? 'bg-[#389e0d] text-white md:bg-transparent md:text-[#389e0d] dark:text-[#b7eb8f]'
        : 'text-white hover:bg-[#389e0d] md:hover:bg-transparent md:border-0 md:hover:text-[#389e0d] dark:text-white dark:hover:bg-gray-700 dark:hover:text-[#b7eb8f] md:dark:hover:bg-transparent'
    }`;

  return (
    <nav className="bg-[#135200] border-gray-200 dark:bg-[#135200] shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse" onClick={() => handleClick('/')}>
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
        </Link>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`md:hidden w-full ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-[#135200]">
            <li>
              <Link href="/" className={linkClassName('/')} onClick={() => handleClick('/')}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className={linkClassName('/services')} onClick={() => handleClick('/services')}>
                Our Services
              </Link>
            </li>
            <li>
              <Link href="/talent" className={linkClassName('/talent')} onClick={() => handleClick('/talent')}>
                Our Talent
              </Link>
            </li>
            <li>
              <Link href="/brands" className={linkClassName('/brands')} onClick={() => handleClick('/brands')}>
                Brands
              </Link>
            </li>
            <li>
              <Link href="/ventures" className={linkClassName('/ventures')} onClick={() => handleClick('/ventures')}>
                Ventures
              </Link>
            </li>
            <li>
              <Link href="/about" className={linkClassName('/about')} onClick={() => handleClick('/about')}>
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-[#135200] md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-[#135200] dark:bg-[#135200] dark:border-gray-700">
            <li>
              <Link href="/" className={linkClassName('/')} onClick={() => handleClick('/')}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className={linkClassName('/services')} onClick={() => handleClick('/services')}>
                Our Services
              </Link>
            </li>
            <li>
              <Link href="/talent" className={linkClassName('/talent')} onClick={() => handleClick('/talent')}>
                Our Talent
              </Link>
            </li>
            <li>
              <Link href="/brands" className={linkClassName('/brands')} onClick={() => handleClick('/brands')}>
                Brands
              </Link>
            </li>
            <li>
              <Link href="/ventures" className={linkClassName('/ventures')} onClick={() => handleClick('/ventures')}>
                Ventures
              </Link>
            </li>
            <li>
              <Link href="/about" className={linkClassName('/about')} onClick={() => handleClick('/about')}>
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
