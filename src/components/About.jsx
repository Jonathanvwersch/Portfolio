import React from "react"
import darkProfile from "../images/profile-pic-dark.png"

function About() {
  return (
    <div
      id="about"
      className="font-mono pb-32 pt-16 md:pt-20 lg:pt-24 text-white w-full relative"
    >
      <h1 className="text-white text-3xl lg:text-4xl mb-10 md:mb-15 lg:mb-20">
        About me
      </h1>
      <div className="w-full flex items-center flex-col lg:flex-row">
        <img className="h-60 lg:mr-20 mb-10 lg:mb-0" src={darkProfile}></img>
        <p>
          I come from a mixed background—I was born in the United States but my
          father is from the Netherlands and my mother is from Egypt. Growing up
          I moved around a lot, living in five different countries by the time I
          finished school. <br></br>
          <br></br> In July of last year, I graduated with an integrated masters
          in mechanical engineering from the University of Bath receiving
          first-class honours—my passion, however, lies in software. Programming
          gives me the ability to bring my ideas to life. I find it to be a far
          more exciting field than mechanical engineering, which often moves
          more slowly. <br></br>
          <br></br>I am currently looking for a job in the software development
          sector. I'm unexperienced—but I am a quick learner with a relentless
          willingness and desire to learn and improve.<br></br>
          <br></br>Outside of work, I love exercising and staying healthy—I am
          an avid runner and sports player. I also love to read and work on
          side-projects. Speaking of side-projects, have I told you about{" "}
          <a
            className="underline"
            target="_blank"
            rel="noreferrer"
            href="https://dekked.com"
          >
            Dekked
          </a>
          ?<br></br>
          <br></br>
        </p>
      </div>
    </div>
  )
}

export default About
