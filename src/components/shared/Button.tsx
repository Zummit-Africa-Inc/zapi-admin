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
          className="min-w-[143px] py-3 px-6 bg-primary text-white font-medium text-xl"
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
      className="min-w-[143px] py-3 px-6 bg-primary text-white font-medium text-xl"
      style={style}
      >
      {label}
    </button>
  );
};

export default CustomButton;
