import React from "react";

import { AllFeedbacks, Navbar } from "../components";
import { Dashboard } from "../layouts";

const Feedback = () => {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <Dashboard>
        <AllFeedbacks />
      </Dashboard>
    </div>
  )
};

export default Feedback;
