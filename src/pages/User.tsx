import React from "react";
import { useParams } from "react-router-dom";

import { Navbar } from "../components";
import { Dashboard } from "../layouts";

const User = () => {
  const {id} = useParams();

  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <Dashboard>
        <p>user: {id}</p>
      </Dashboard>
    </div>
  )
};

export default User;
