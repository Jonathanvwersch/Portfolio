import React from "react"
import Logo from "../images/logo"
import { FaLinkedin, FaGithub, FaMedium, FaEnvelope } from "react-icons/fa"
import AnchorLink from "react-anchor-link-smooth-scroll"

function Footer() {
  return (
    <footer id="contact" className="flex container-inner relative h-full py-5">
      <div className="flex max-sm:flex-col-reverse justify-between items-center w-full text-white font-mono">
        <span>© {new Date().getFullYear()}</span>
        <div className="flex items-center cursor-pointer max-sm:mb-10">
          <a href="https://github.com/Jonathanvwersch" aria-label="Github Logo">
            <FaGithub className="mr-4 hover:text-gray-400" />
          </a>
          <a
            href="https://www.linkedin.com/in/jonathan-van-wersch/"
            aria-label="LinkedIn Logo"
          >
            <FaLinkedin className="mr-4 hover:text-gray-400" />
          </a>
          <a
            href="https://medium.com/@jonathanvwersch"
            aria-label="Medium Logo"
          >
            <FaMedium className="hover:text-gray-400 mr-4" />
          </a>
          <a href="mailto:jonathanvwersch@gmail.com" aria-label="Email">
            <FaEnvelope className="hover:text-gray-400" />
          </a>
        </div>
        <AnchorLink
          className="max-sm:mb-10"
          href="#home"
          aria-label="Website Logo"
        >
          <Logo width={40} height={20} />
        </AnchorLink>
      </div>
    </footer>
  )
}

export default Footer
