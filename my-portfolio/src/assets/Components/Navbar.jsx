import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from '../Images/Shashi3.png'
import { HashLink as Link } from "react-router-hash-link";
import home from "../Images/Home.png";
import about from "../Images/About.png";
// import skills from "../Images/Skills.png";
import project from "../Images/Project.png";
import contact from "../Images/Contact.png";
import skills1 from "../Images/Education.png";
import Home from "./Home";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="">
      <div className="">
      
        <div className=" pt-16 pr-[30px] flex justify-center" id="Home">
        <div className=" flex justify-between gap-[280px] sm:fixed ">

        <div className=" -mt-9 -mr-[80px]">
              <img className=" w-[100px] md:hidden lg:hidden" src={Logo}/>
            </div>
        
          <div className="md:hidden">
          
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none "
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path d="M4 6h16M4 12h16m-7 6h7"></path>
                )}
              </svg>
              
            </button>
            </div>
          </div>
          <div className="hidden w-[700px] h-16 lg:left-[25%] sm:left-[8%] md:flex md:justify-center align-middle body1 rounded-xl  md:items-center gap-8 ml-[35px]">
            <div className="flex justify-center align-middle gap-7 ml-[40px]">
              <div className="flex gap-1">
                <img className=" w-7 h-7 -mt-1" src={home} />
                <Link
                  to="#Home"
                  smooth
                  className="Home text-white font-bold text-lg mr-4 "
                  id="#"
                >
                  Home
                </Link>
              </div>

              <div className="flex gap-1">
                <img className=" w-6 h-6 mt-0 " src={about} />
                <Link
                  to="#About"
                  smooth
                  className="Home text-white font-bold text-lg mr-4"
                  activeClassName="underline"
                >
                  About
                </Link>
              </div>

              <div className="flex gap-1">
                <img className=" w-7 h-7 -mt-1 " src={skills1} />
                <Link
                  to="#Skills"
                  smooth
                  className="Home text-white font-bold text-lg mr-4"
                  activeClassName="underline"
                >
                  Skills
                </Link>
              </div>

              <div className="flex gap-1">
                <img className=" w-6 h-6 " src={project} />
                <Link
                  to="#Project"
                  smooth
                  className="Home text-white font-bold text-lg"
                  activeClassName="underline"
                >
                  Projects
                </Link>
              </div>

              <div className="flex gap-1">
                <img className=" w-6 h-6 mt-0" src={contact} />
                <Link
                  to="#Contact"
                  smooth
                  className="Home text-white font-bold text-lg"
                  activeClassName="underline"
                >
                  Contact
                </Link>
              </div>
            </div>
            <NavLink
              className="Home text-white font-bold text-lg mr-4"
              activeClassName="underline"
            ></NavLink>
          </div>
        </div>
      </div>

      {/* Responsive Menu */}
      {isOpen && (
        <div className=" Transition  md:hidden body2 ">
        
          <div className="px-2 pt-2 pb-3">
            <div className="flex justify-center align-middle flex-col gap-5 ">
            
              <div className="flex gap-1">
                <img className=" w-7 h-7 -mt-1" src={home} />
                <Link
                  to="/"
                  smooth
                  className="Home text-white font-bold text-lg mr-4 "
                  
                >
                  Home
                </Link>
              </div>

              <div className="flex gap-1">
                <img className=" w-6 h-6 mt-0 " src={about} />
                <Link
                  to="/About"
                  smooth
                  className="Home text-white font-bold text-lg mr-4"
                  activeClassName="underline"
                >
                  About
                </Link>
              </div>

              <div className="flex gap-1">
                <img className=" w-7 h-7 -mt-1 " src={skills1} />
                <Link
                  to="/Skills"
                  smooth
                  className="Home text-white font-bold text-lg mr-4"
                  activeClassName="underline"
                >
                  Skills
                </Link>
              </div>

              <div className="flex gap-1">
                <img className=" w-6 h-6 " src={project} />
                <Link
                  to="/Project"
                  smooth
                  className="Home text-white font-bold text-lg"
                  activeClassName="underline"
                >
                  Projects
                </Link>
              </div>

              <div className="flex gap-1">
                <img className=" w-6 h-6 mt-0" src={contact} />
                <Link
                  to="/Contact"
                  smooth
                  className="Home text-white font-bold text-lg"
                  activeClassName="underline"
                >
                  Contact
                </Link>
              </div>
            </div>
            <NavLink
              className="Home block text-white font-bold py-2 px-4 hover:underline"
              activeClassName="underline"
              onClick={toggleMenu}
            ></NavLink>
          </div>
          <Home/>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
