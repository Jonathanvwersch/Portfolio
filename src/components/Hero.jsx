import React from "react"
import Typing from "react-typing-animation"
import AnchorLink from "react-anchor-link-smooth-scroll"
import "../styles/Hero.css"

function Hero() {
  const titles = [
    " an engineer.",
    " a designer.",
    " an entrepreneur.",
    " a life-long learner.",
    " also unemployed...so let's talk.",
  ]

  return (
    <div className="flex items-center justify-between max-sm:flex-col absolute bottom-0 p-inherit left-0 mb-14 w-full">
      <h1 className="typed-text text-3xl max-sm:mb-8 max-sm:text-xl font-mono text-white leading-12">
        Hi, my name is Jonathan.<br></br>I'm
        <Typing speed={30} className="inline text-gray-400">
          <Typing.Delay ms={1000} />
          <span>{titles[0]}</span>
          <Typing.Delay ms={1000} />
          <Typing.Backspace count={titles[0].length} />
          <Typing.Delay ms={500} />

          <span>{titles[1]}</span>
          <Typing.Delay ms={1000} />
          <Typing.Backspace count={titles[1].length} />
          <Typing.Delay ms={500} />

          <span>{titles[2]}</span>
          <Typing.Delay ms={1000} />
          <Typing.Backspace count={titles[2].length} />
          <Typing.Delay ms={500} />

          <span>{titles[3]}</span>
          <Typing.Delay ms={1000} />
          <Typing.Backspace count={titles[3].length} />

          <span>{titles[4]}</span>
          <span className="h-7 w-0.5 bg-white"></span>
        </Typing>
      </h1>
      <AnchorLink href="#about">
        <svg
          width="26"
          height="26"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.94 5.72656L8 8.7799L11.06 5.72656L12 6.66656L8 10.6666L4 6.66656L4.94 5.72656Z"
            fill="white"
          />
        </svg>
      </AnchorLink>
    </div>
  )
}

export default Hero
