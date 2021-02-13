import React, { useState } from "react"

function Project({ icon, header, text, backgroundText, roleText, skillsText }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className="cursor-pointer w-full flex flex-col border border-black  hover:border-white px-6 py-8"
      onClick={() => setOpen(prevState => !prevState)}
      onKeyDown={e => {
        if (e.key === "Enter") setOpen(prevState => !prevState)
      }}
      role="button"
      tabIndex="0"
      aria-label="Open Project"
    >
      <div className="flex items-center flex-col w-full">
        <div className="flex justify-between w-full mb-6">
          <b>
            <h3 className="text-xl  text-white">{header}</h3>
          </b>
          {icon}
        </div>
        <div className="w-full text-gray-400 font-mono text-sm">
          <p>{text}</p>
          <p
            style={
              open
                ? { opacity: "100", visibility: "visible" }
                : {
                    opacity: "0",
                    display: "none",
                  }
            }
          >
            <br></br>
            <p className="text-center text-white">* * *</p>
            <br></br>
            <b>Background</b>: {backgroundText}
            <br></br>
            <br></br>
            <b>Role</b>: {roleText} <br></br>
            <br></br>
            <b>Skills</b>: {skillsText}
          </p>
        </div>
        <svg
          style={open ? { transform: "rotate(180deg)" } : {}}
          className="mt-6"
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
      </div>
    </div>
  )
}

export default Project
