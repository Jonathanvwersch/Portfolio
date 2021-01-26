import React from "react"
import Skill from "./skill"
import { FaLaptopCode, FaCode, FaEllipsisH } from "react-icons/fa"

const Skill1 = {
  icon: [<FaLaptopCode size={32} className="mb-4" />],
  header: "Design/Development",
  subText:
    "I am an accomplished front-end developer and designer. I am actively working on becoming more of a full-stack developer.",
  list: [
    <>
      <li>CSS, TailwindCSS, Sass, HTML5</li>
      <li>Figma, Autodesk Inventor</li>
      <li>Javascript (ES6), Typescript</li>
      <li>React, Gatsby</li>
      <li>Node, Express, Postgres</li>
      <li>Netlify, AWS</li>
      <li>MailChimp</li>
    </>,
  ],
}

const Skill2 = {
  icon: [<FaCode size={32} className="mb-4" />],
  header: "Programming Languages",
  subText:
    "C++ was and always will be my first love. Nowadays I mainly program in Javascript. I intend on becoming more proficient in Python in the near future, as well as general data structures and algorithms.",
  list: [
    <>
      <li>C++</li>
      <li>Javascript/Typescript</li>
      <li>SQL</li>
      <li>MATLAB</li>
      <li>Git (version-control)</li>
    </>,
  ],
}

const Skill3 = {
  icon: [<FaEllipsisH size={32} className="mb-4" />],
  header: "Miscellaneous",
  subText:
    "I am a life-long learner who is always looking to develop new skills. Right now I am focused on becoming more entrepreneurial, with the goal of starting my own company in the next five years.",
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
}

function Skills() {
  return (
    <div id="skills" className="text-white pb-32">
      <h1 className="text-white text-3xl lg:text-4xl mb-20">Skills</h1>
      <div className="flex max-md:items-center max-md:flex-col">
        <Skill
          icon={Skill1.icon}
          header={Skill1.header}
          subText={Skill1.subText}
          list={Skill1.list}
        />
        <Skill
          icon={Skill2.icon}
          header={Skill2.header}
          subText={Skill2.subText}
          list={Skill2.list}
        />
        <Skill
          icon={Skill3.icon}
          header={Skill3.header}
          subText={Skill3.subText}
          list={Skill3.list}
        />
      </div>
    </div>
  )
}

export default Skills
