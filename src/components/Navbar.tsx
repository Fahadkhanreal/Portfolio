import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div className="container pt-8 ">
      <div className="flex justify-between items-center">
        <div className="text-xl font-medium ">Fahad khan</div>
        <ul className="gap-10 lg:gap-16 hidden md:flex">
            <li className=" cursor-pointer hover:text-[#00d13b] text-2xl"><a href="#hero">Home</a></li>
            <li className="cursor-pointer hover:text-[#00d13b] text-2xl"><a href="#about">About</a></li>
            <li className="cursor-pointer hover:text-[#00d13b] text-2xl"><a href="#projects">Projects</a></li>
            <li className="cursor-pointer hover:text-[#00d13b] text-2xl"><a href="#skills">Skills</a></li>
            <li className="cursor-pointer hover:text-[#00d13b]  text-2xl"><a href="#contact">Contact</a></li>
        </ul>

           <div className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
           </div>
      </div>

  {isMenuOpen && (
    <ul className="flex flex-col gap-4 mt-4 md:hidden">
      <li className=" hover:text-[#00d13b]">
        <a href="#hero" onClick={toggleMenu}>Home</a>
      </li>
      <li className=" hover:text-[#00d13b]">
        <a href="#about" onClick={toggleMenu}>About</a>
      </li>
      <li className=" hover:text-[#00d13b]">
        <a href="#projects" onClick={toggleMenu}>Projects</a>
      </li>
      <li className=" hover:text-[#00d13b]">
        <a href="#skills" onClick={toggleMenu}>Skills</a>
      </li>
      <li className=" hover:text-[#00d13b]">
        <a href="#contact" onClick={toggleMenu}>Contact</a>
      </li>
    </ul>
  )
  }

    </div>
  );
};

export default Navbar;
