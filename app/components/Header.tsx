"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Keeping this function for future dropdown menu functionality
  // const toggleDropdown = (name: string) => {
  //   if (activeDropdown === name) {
  //     setActiveDropdown(null);
  //   } else {
  //     setActiveDropdown(name);
  //   }
  // };

  return (
    <div className="relative">
      {/* Top Contact Bar - Fixed Position */}
      <div
        className={`w-full py-2 fixed top-0 left-0 z-50 transition-all ${
          scrolled ? "opacity-0 transform -translate-y-full" : "opacity-100"
        } bg-green-800`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4 text-white text-sm">
            <a
              href="mailto:admin@plant-rmf.org.za"
              className="hover:text-gray-200"
            >
              <span className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                admin@plant-rmf.org.za
              </span>
            </a>
            <a href="tel:+27825970232" className="hover:text-gray-200">
              <span className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +27 82 597 0232
              </span>
            </a>
          </div>
          <div className="flex items-center space-x-4 text-white">
            <a
              href="https://facebook.com"
              className="hover:text-gray-200"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              className="hover:text-gray-200"
              aria-label="Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              className="hover:text-gray-200"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <motion.header
        className={`w-full fixed ${
          scrolled ? "top-0" : "top-10"
        } left-0 z-40 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md py-2" : "bg-black/30 py-4"
        } ${isMenuOpen ? "bg-white" : ""}`}
        initial={{
          y: 0,
          backgroundColor: scrolled
            ? "rgba(255, 255, 255, 1)"
            : "rgba(0, 0, 0, 0.3)",
        }}
        animate={{
          y: 0,
          top: scrolled ? 0 : 40, // 40px is approximately the height of the top bar
          backgroundColor:
            scrolled || isMenuOpen
              ? "rgba(255, 255, 255, 1)"
              : "rgba(0, 0, 0, 0.3)",
          boxShadow:
            scrolled || isMenuOpen
              ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
              : "none",
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
                          <Link href="/" className="flex-shrink-0">
                <Image
                  src="/logo.svg"
                  alt="Robert Mazibuko Foundation (RMF)"
                  width={150}
                  height={50}
                  className="h-12 w-auto"
                />
              </Link>

            {/* Main Navigation - Desktop */}
            <nav className="hidden lg:flex items-center space-x-8">
              <div className="relative group">
                <Link
                  href="/about"
                  className={`transition-colors ${
                    scrolled
                      ? "text-gray-800 hover:text-green-700"
                      : "text-white hover:text-gray-200"
                  } font-medium`}
                >
                  About
                </Link>
              </div>


              <div className="relative group">
                <Link
                  href="/tree-planting-business"
                  className={`transition-colors ${
                    scrolled
                      ? "text-gray-800 hover:text-green-700"
                      : "text-white hover:text-gray-200"
                  } font-medium`}
                >
                  Tree Planting Business
                </Link>
              </div>
              <div className="relative group">
                <Link
                  href="/business-packages"
                  className={`transition-colors ${
                    scrolled
                      ? "text-gray-800 hover:text-green-700"
                      : "text-white hover:text-gray-200"
                  } font-medium`}
                >
                  Business Packages
                </Link>
              </div>
              <div className="relative group">
                <Link
                  href="/our-team"
                  className={`transition-colors ${
                    scrolled
                      ? "text-gray-800 hover:text-green-700"
                      : "text-white hover:text-gray-200"
                  } font-medium`}
                >
                  Our Team
                </Link>
              </div>
              <div className="relative group">
                <Link
                  href="/contact"
                  className={`transition-colors ${
                    scrolled
                      ? "text-gray-800 hover:text-green-700"
                      : "text-white hover:text-gray-200"
                  } font-medium`}
                >
                  Contact
                </Link>
              </div>
              <div className="hidden md:flex items-center ml-8 space-x-4">
                <Link
                  href="/donate"
                  className="inline-block px-5 py-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 rounded-md font-medium transition-colors flex items-center"
                >
                  <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" className="mr-2 inline-flex">
                    <circle cx="10" cy="10" r="8" fill="lightgray" stroke="black" strokeWidth="1"/>
                    <text x="10" y="13" fontFamily="Verdana" fontSize="10" fill="black" textAnchor="middle">R</text>
                  </svg>
                  <span className="flex-shrink-0">JOIN</span>
                </Link>
                <Link
                  href="/apply"
                  className="inline-block px-5 py-2 bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-md font-medium transition-colors flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 inline-flex"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                  <span className="flex-shrink-0">Apply</span>
                </Link>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden focus:outline-none"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 ${
                  scrolled || isMenuOpen ? "text-gray-800" : "text-white"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white shadow-lg py-4">
            <div className="container mx-auto px-4">
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/about"
                  className="text-gray-800 hover:text-green-700 transition-colors block font-medium"
                >
                  About
                </Link>


                <Link
                  href="/tree-planting-business"
                  className="text-gray-800 hover:text-green-700 transition-colors block font-medium"
                >
                  Tree Planting Business
                </Link>
                <Link
                  href="/business-packages"
                  className="text-gray-800 hover:text-green-700 transition-colors block font-medium"
                >
                  Business Packages
                </Link>
                <Link
                  href="/our-team"
                  className="text-gray-800 hover:text-green-700 transition-colors block font-medium"
                >
                  Our Team
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-800 hover:text-green-700 transition-colors block font-medium"
                >
                  Contact
                </Link>
                <div className="grid grid-cols-1 gap-2 mt-4">
                  <Link
                    href="/donate"
                    className="block px-4 py-2 text-center bg-yellow-500 hover:bg-yellow-600 text-gray-900 rounded-md font-medium transition-colors flex items-center justify-center"
                  >
                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" className="mr-2 inline-flex">
                      <circle cx="10" cy="10" r="8" fill="lightgray" stroke="black" strokeWidth="1"/>
                      <text x="10" y="13" fontFamily="Verdana" fontSize="10" fill="black" textAnchor="middle">R</text>
                    </svg>
                    <span className="flex-shrink-0">JOIN</span>
                  </Link>
                  <Link
                    href="/apply"
                    className="block px-4 py-2 text-center border border-green-700 text-green-700 hover:bg-green-50 rounded-md font-medium transition-colors flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 inline-flex"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                    <span className="flex-shrink-0">Apply</span>
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        )}
      </motion.header>

      {/* Add empty space to compensate for fixed header */}
      <div
        className={`w-full ${
          scrolled ? "h-16 md:h-20" : "h-[4.5rem] md:h-[6.5rem]"
        } transition-all`}
      ></div>
    </div>
  );
};

export default Header;
