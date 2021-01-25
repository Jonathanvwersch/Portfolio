import React, { useState } from "react"

function Skill({ icon, header, subText, list }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="flex flex-col text-center text-white items-center w-30 max-sm:w-full max-md:w-1/2 w-2/6 cursor-pointer border border-black  hover:border-white px-6 py-8"
      onClick={() => setOpen(prevState => !prevState)}
    >
      {icon}
      <h2 className="text-xl mb-2">{header}</h2>
      <div
        style={
          open
            ? { opacity: "100", visibility: "visible" }
            : {
                opacity: "0",
                display: "none",
              }
        }
      >
        <p className="text-md mb-4">{subText}</p>
        <ul className="text-sm list-none text-gray-400">{list}</ul>
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
  )
}

export default Skill
