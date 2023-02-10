import React from "react";

import { InputProps } from "../../interfaces";

const InputField = ({
  label,
  name,
  onChange,
  type,
  defaultValue,
  icon,
  className,
  onKeyDown,
  placeholder,
  required,
  style,
  value,
}: InputProps) => {

  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="font-bold text-sm text-primary">{label}</label>
      <div className="w-full w-max-[263px] h-[48px] flex items-center border border-gray-300 rounded focus-within:border-primary" style={style}>
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
          className={`w-full h-full outline-none border-none px-4 py-3 rounded ${className}`}
        />
      </div>
    </div>
  );
};

export default InputField;
