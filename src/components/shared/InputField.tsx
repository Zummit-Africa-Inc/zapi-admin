import React from "react";

import { InputProps } from "../../interfaces";

const InputField = ({
  name,
  onChange,
  type,
  defaultValue,
  icon,
  onKeyDown,
  placeholder,
  required,
  style,
  value,
}: InputProps) => {

  return (
    <div className="w-min-[263px] h-[52px] flex items-center border border-gray-300 rounded focus-within:border-black" style={style}>
      {icon}
      <input
        type={type}
        name={name}
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required={required}
        className="w-full h-full outline-none border-none px-2"
      />
    </div>
  );
};

export default InputField;
