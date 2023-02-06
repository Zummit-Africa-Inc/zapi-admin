import React from "react";

import { Sidebar } from "../components";

interface Props {
    children: JSX.Element[]
}

const Dashboard = ({children}:Props) => {
  return (
    <div className="">
        <div className="">
            <Sidebar />
        </div>
        <div className="">
            {children}
        </div>
    </div>
  )
}

export default Dashboard