import React from "react"
import Project from "./Project"
import Dekked from "../images/dekked"
import Rocket from "../images/rocket"
import Robot from "../images/robot"

const displayProjects = [
  {
    icon: [<Dekked />],
    header: "Dekked",
    text: "Dekked is an integrated flashcarding and note-taking application.",
    backgroundText: [
      "I built and designed Dekked from scratch, raising £3250 in equity-free funding in the process. Check out the ",
      <a
        className="underline"
        target="_blank"
        rel="noreferrer"
        href="https://dekked.com"
      >
        landing page
      </a>,
      ", which I designed and built using Figma and Gatsby respectively.",
    ],
    roleText: "Developer/Designer/Head of Business",
    skillsText:
      "Figma, React.js, Node.js, Postgres, Gatsby, Typescript, Netlify, AWS, Styled Components (CSS), Express, management, marketing",
  },
  {
    icon: [<Rocket />],
    header: "Bath University Rocket Team",
    text:
      "Bath University Rocket (BRT) is an engineering competition that designs and builds sounding rockets",
    backgroundText: [
      "I was a part of BRT from February 2019 until March 2020. Alongside seven other engineers, I designed a sounding rocket to compete at the Spaceport America Cup, the world's largest intercollegiate rocket competition. We were in the process of building the rocket, in preparation for competing in June of 2020, until the global pandemic put an end to our efforts. I would provide a link to our website, but the new team has not done a very good job of maintaining it and it is currently broken.",
    ],
    roleText: "Project Manager/Systems Integrator",
    skillsText:
      "Autodesk Inventor, finite element modelling, management, rocket design",
  },
  {
    icon: [<Robot />],
    header: "Soft Magnetic Robotics",
    text:
      "My thesis for the completion of an integrated masters in mechanical engineering from the University of Bath",
    backgroundText: [
      "My masters thesis was written on the topic of soft magnetic robotics under the supervision of Dr. Hamideh Khanbareh. A PDF version of my thesis can be viewed ",
      <a
        className="underline"
        href="https://drive.google.com/file/d/1l6aOb5Bc8snolIrFlfF3sPpExbmcyv3d/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
        aria-label="Masters thesis download link"
      >
        here
      </a>,
      ".",
    ],
    roleText: "Engineer/Report writer",
    skillsText:
      "Mechanical engineering, materials engineering, finite element modelling, report writing",
  },
]

function Projects() {
  return (
    <section id="projects" className="container-inner flex-col mb-64">
      <h1 className="text-white text-3xl lg:text-4xl mb-10 md:mb-15 lg:mb-20">
        Projects
      </h1>
      {displayProjects.map(project => (
        <Project
          key={project.header}
          icon={project.icon}
          header={project.header}
          text={project.text}
          backgroundText={project.backgroundText}
          roleText={project.roleText}
          skillsText={project.skillsText}
        />
      ))}
    </section>
  )
}

export default Projects
