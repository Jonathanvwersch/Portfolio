import React from "react"
import darkProfile from "../images/profile-pic-dark.png"

function About() {
  return (
    <section
      id="about"
      className="container-inner flex-col font-mono text-white relative mb-32"
    >
      <h1 className="text-white text-3xl lg:text-4xl mb-10 md:mb-15 lg:mb-20">
        About me
      </h1>
      <div className="w-full flex items-center flex-col lg:flex-row">
        <img
          className="h-60 lg:mr-20 mb-10 lg:mb-0"
          src={darkProfile}
          alt="Me"
        ></img>
        <p>
          I come from a mixed background —— I was born in the United States but
          my father is from the Netherlands and my mother is from Egypt. Growing
          up I moved around a lot, living in five different countries by the
          time I finished school. <br></br>
          <br></br> In July of 2020, I graduated with an integrated masters in
          mechanical engineering from the University of Bath receiving
          first-class honours —— my passion, however, lies in software.
          Programming gives me the ability to bring my ideas to life. I find it
          to be a far more exciting field than mechanical engineering, which
          often moves more slowly. <br></br>
          <br></br>I am currently working as a software engineer at{" "}
          <a href="https://www.acresoftware.com/">Acre Software</a>, an
          all-in-one mortgage platform for brokers and customers.
          <br></br>
          <br></br>Outside of work, I love exercising and staying healthy —— I
          am an avid runner and sports player. I also love to read, and work on
          engineering-related side projects.
        </p>
      </div>
    </section>
  )
}

export default About
