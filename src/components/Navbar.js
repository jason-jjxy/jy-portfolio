import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Navbar() {
  return (
    <header className="sticky md:sticky top-0">
      <div className="relative">
        <nav className="bg-eerie_black border-gray-200 p-6">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
            <a href="about" className="title-font text-white mb-4 md:mb-0">
              <nav>
                <p className="ml-3 text-2xl">JY</p>
              </nav>
            </a>
            <div className="flex items-center">
              <a
                href="#projects"
                className="mr-5 hover:text-white text-lg scroll-smooth"
              >
                01. Experience
              </a>
              <a
                href="#skills"
                className="mr-5 hover:text-white text-lg scroll-smooth"
              >
                02. Skills
              </a>
              <a
                href="#testimonials"
                className="mr-5 hover:text-white text-lg scroll-smooth"
              >
                03. Testimonials
              </a>
              <a
                href="#contact"
                className="mr-5 hover:text-white text-lg scroll-smooth"
              >
                04. Contact
              </a>
              <div>
                <a
                  href="#resume"
                  className="mr-5 hover:text-white text-lg rounded scroll-smooth border-solid border-2 border-baby-powder p-3"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
