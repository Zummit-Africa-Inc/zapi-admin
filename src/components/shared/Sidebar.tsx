import React from "react"
import { NavLink } from "react-router-dom"

import { SIDEBAR } from "../../constants"

const Sidebar = () => {
  return (
    <div className="w-full flex flex-col py-6 px-3">
      {SIDEBAR.map((link, index) => (
        <NavLink
          to={link.url}
          key={index}
          className={({isActive}) => isActive ? 
          "w-full my-3 py-3 px-4 bg-primary text-white font-bold text-center rounded uppercase" : 
        "w-full my-3 py-3 px-4 bg-gray-100 text-primary font-bold text-center rounded uppercase hover:bg-gray-300"}>
          {link.name}
        </NavLink>
      ))}
    </div>
  )
}

export default Sidebar