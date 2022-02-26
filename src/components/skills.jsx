import React from "react"
import Skill from "./skill"
import { FaLaptopCode, FaCode, FaEllipsisH } from "react-icons/fa"

const displaySkills = [
  {
    icon: [<FaLaptopCode size={32} className="mb-4" />],
    header: "Web Technologies/Software",
    subText:
      "I am an highly skilled front-end developer. Additionally, I am proficient in web design and backend engineering.",
    list: [
      <>
        <li>Figma</li>
        <li>React, Gatsby</li>
        <li>REST, GraphQL, Apollo</li>
        <li>React Testing Library, Enzyme, Jest, Cypress</li>
        <li>Node, Express, Postgres</li>
        <li>Netlify, Render</li>
      </>,
    ],
  },
  {
    icon: [<FaCode size={32} className="mb-4" />],
    header: "Programming Languages",
    subText:
      "I mainly program in Typescript/Javascript. I am proficient in Python with regards to data structures and algorithms but I have never used it in a professional environment.",
    list: [
      <>
        <li>Javascript/Typescript</li>
        <li>Python</li>
        <li>Git (version-control)</li>
      </>,
    ],
  },
  {
    icon: [<FaEllipsisH size={32} className="mb-4" />],
    header: "Miscellaneous",
    subText:
      "I am a life-long learner who is always looking to develop new skills. In addition to be a strong technical software engineer, I also possess a wide range of soft skills relating to communication and collaboration.",
    list: [
      <>
        <li>Project management</li>
        <li>Public speaking</li>
        <li>English (native)</li>
        <li>French (intermediate)</li>
        <li>Dutch (proficient)</li>
        <li>Entrepreneurship</li>
      </>,
    ],
  },
]

function Skills() {
  return (
    <section id="skills" className="flex-col text-white mb-32 container-inner">
      <h1 className="text-white text-3xl lg:text-4xl mb-20">Skills</h1>
      <div className="flex max-md:items-center max-md:flex-col gap-x-4">
        {displaySkills.map(skill => (
          <Skill
            key={skill.header}
            icon={skill.icon}
            header={skill.header}
            subText={skill.subText}
            list={skill.list}
          />
        ))}
      </div>
    </section>
  )
}

export default Skills
