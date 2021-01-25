import React from "react"
import Logo from "../images/logo"
import { FaLinkedin, FaGithub, FaMedium, FaEnvelope } from "react-icons/fa"
import AnchorLink from "react-anchor-link-smooth-scroll"

function Footer() {
  return (
    <div id="contact" className="w-full relative h-32 pt-32 pb-16">
      <div className="flex justify-between items-center w-full text-white font-mono">
        <span>© 2021</span>
        <AnchorLink href="#home">
          <Logo />
        </AnchorLink>
        <div className="flex items-center cursor-pointer">
          <a href="https://github.com/Jonathanvwersch">
            <FaGithub className="mr-4 hover:text-gray-400" />
          </a>
          <a href="https://www.linkedin.com/in/jonathan-van-wersch/">
            <FaLinkedin className="mr-4 hover:text-gray-400" />
          </a>
          <a href="https://medium.com/@jonathanvwersch">
            <FaMedium className="hover:text-gray-400 mr-4" />
          </a>
          <a href="mailto:jonathanvwersch@gmail.com">
            <FaEnvelope className="hover:text-gray-400" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
