import React from "react";
import { Link } from "react-router-dom";

import { ButtonProps } from "../../interfaces";

const CustomButton = ({
  label,
  icon,
  onClick,
  startIcon,
  style,
  to,
  type,
}: ButtonProps) => {

  if (to) {
    return (
      <Link to={to} style={{ width: "fit-content" }}>
        <button
          type={type}
          onClick={onClick}
          className="min-w-[143px] bg-primary text-white font-medium text-xl flex w-full appearance-none items-center justify-center gap-1 rounded py-3 px-4 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          style={style}
        >
          {label}
        </button>
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className="min-w-[143px] bg-primary text-white font-medium text-xl flex w-full appearance-none items-center justify-center gap-1 rounded py-3 px-4 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
      style={style}
      >
      {label}
    </button>
  );
};

export default CustomButton;
