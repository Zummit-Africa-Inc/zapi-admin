import { Button } from "@mui/material";
import React, { ReactNode } from "react";

interface Message {
  title?: string;
  subtitle?: string;
  handleClose?: any;
  children?: ReactNode;
}

const Popup: React.FC<Message> = ({
  title,
  subtitle,
  handleClose,
  children,
}) => {
  return (
    <div className="w-[calc(100%_-_236px)] h-[100vh] flex justify-center items-center fixed top-[0] bg-black/[0.5] backdrop-filter backdrop-blur-[2px] z-50">
      <div className="bg-white w-[400px] py-[2rem] px-[4rem] rounded-[16px] flex flex-col gap-[1rem] justify-center">
        {children ? (
          <div>{children}</div>
        ) : (
          <div className="flex flex-col gap-[1rem]">
            <div className="flex items-center justify-center md:justify-between">
              <div className="flex items-center  gap-[.5rem]">
                <h1>{title}</h1>
              </div>
            </div>
            <p>{subtitle}</p>
          </div>
        )}
        <div className="">
          <Button onClick={handleClose}>Close</Button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
