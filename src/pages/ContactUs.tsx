import React from "react";
import { Contact, Navbar } from "../components";
import { Dashboard } from "../layouts";

const ContactUs = () => {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <Dashboard>
        <Contact />
      </Dashboard>
    </div>
  );
};

export default ContactUs;
