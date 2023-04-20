import React from "react";
import { Navbar, ZumSupport } from "../components";
import { Dashboard } from "../layouts";

const Support = () => {
  return (
    <div>
      <Navbar />
      <Dashboard>
        <ZumSupport />
      </Dashboard>
    </div>
  );
};

export default Support;
