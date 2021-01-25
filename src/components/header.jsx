import React, { useState } from "react"
import Logo from "../images/logo"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { Link } from "gatsby"

const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="w-full cursor-pointer fixed px-8 md:px-10 lg:px-12 py-6 z-50 bg-black select-none top-0 left-0 right-0 flex justify-between items-center">
      <Link to="/">
        <Logo />
      </Link>
      <div className="flex">
        <div
          className="text-white bg-black font-mono text-md max-sm:text-sm max-sm:fixed max-sm:top-20 max-sm:justify-center max-sm:w-full max-sm:left-0  flex transition-all duration-500 items-center justify-between"
          style={
            open
              ? { opacity: "100", filter: "blur(0px)" }
              : { opacity: "0", filter: "blur(20px)" }
          }
        >
          <AnchorLink
            className=" mr-6 max-sm:mr-3 hover:text-gray-400"
            href="#about"
          >
            About
          </AnchorLink>
          <AnchorLink
            className=" mr-6 max-sm:mr-3  hover:text-gray-400"
            href="#skills"
          >
            Skills
          </AnchorLink>
          <AnchorLink
            className="mr-6 max-sm:mr-3  hover:text-gray-400"
            href="#projects"
          >
            Projects
          </AnchorLink>
          <AnchorLink
            className="max-sm:mr-0 mr-10 hover:text-gray-400"
            href="#contact"
          >
            Contact
          </AnchorLink>
        </div>
        <div
          className="group flex flex-col h-10 w-10 justify-center items-end"
          onClick={() => setOpen(prevState => !prevState)}
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span
            className={
              !open
                ? "w-4 h-0.5 bg-white transition-width duration-500 ease-in-out mt-3 group-hover:w-6"
                : "hidden"
            }
          ></span>
        </div>
      </div>
    </div>
  )
}

export default Header
