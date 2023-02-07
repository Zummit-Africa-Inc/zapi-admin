import React from "react";
import "./styles/spinner.css";

interface Props {
  size: "small" | "medium" | "large";
  color?: string;
  thickness: "thin" | "medium" | "thick";
}

const Spinner = ({ size, color, thickness }: Props) => {
  const sizes = {
    small: "",
    medium: "spinner-size__medium",
    large: "spinner-size__large",
  };

  const thick = {
    thin: "",
    medium: "spinner-thickness__medium",
    thick: "spinner-thickness__medium",
  };

  return (
    <div
      className={`spinner ${sizes[size]} ${thick[thickness]}`}
      style={{ borderColor: color, borderBottomColor: "transparent" }}
    />
  );
};

export default Spinner;
