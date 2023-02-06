import React from "react"

import { Navbar } from "../components";
import { Dashboard } from "../layouts";

const Apis = () => {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <Dashboard>
        <p>children</p>
      </Dashboard>
    </div>
  )
}

export default Apis