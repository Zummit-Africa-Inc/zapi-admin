import React from "react"

import { AllApis, Navbar } from "../components";
import { Dashboard } from "../layouts";

const Apis = () => {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <Dashboard>
        <AllApis />
      </Dashboard>
    </div>
  )
}

export default Apis