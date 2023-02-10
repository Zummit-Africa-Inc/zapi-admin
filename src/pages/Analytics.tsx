import React from "react"

import { ApiAnalytics, Navbar } from "../components";
import { Dashboard } from "../layouts";

const Analytics = () => {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <Dashboard>
        <ApiAnalytics />
      </Dashboard>
    </div>
  )
};

export default Analytics;