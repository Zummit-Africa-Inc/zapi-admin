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
      <div className="">
          {children}
      </div>
    </div>
  )
}

export default Dashboard