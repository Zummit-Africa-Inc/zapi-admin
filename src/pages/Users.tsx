import React from "react";

import { Navbar, AllUsers } from "../components";
import { Dashboard } from "../layouts";

const Users = () => {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <Dashboard>
        <AllUsers />
      </Dashboard>
    </div>
  );
};

export default Users;
