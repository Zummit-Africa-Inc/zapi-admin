import { ChangeEventHandler, CSSProperties, KeyboardEventHandler } from "react";

export interface ButtonProps {
  label: string | JSX.Element;
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
  icon?: JSX.Element;
  startIcon?: JSX.Element;
  style?: CSSProperties;
  to?: string;
}

export interface InputProps {
  type: string;
  name: string;
  onChange?: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  required?: boolean;
  icon?: JSX.Element;
  style?: CSSProperties;
}
