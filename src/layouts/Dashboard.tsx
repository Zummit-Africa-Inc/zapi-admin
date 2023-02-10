import React from "react";

import { Sidebar } from "../components";

interface Props {
    children: JSX.Element
}

const Dashboard = ({children}:Props) => {
  return (
    <div className="w-full flex">
      <div className="w-0 md:w-[200px]">
        <Sidebar />
      </div>
      <div className="w-full mt-8 px-12">
        {children}
      </div>
    </div>
  )
}

export default Dashboard