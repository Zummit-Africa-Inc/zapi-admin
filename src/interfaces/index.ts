import { ChangeEventHandler, CSSProperties, KeyboardEventHandler } from "react";
import { AnalyticsType, UserType } from "../types";

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
  label: JSX.Element | string;
  type: string;
  name: string;
  onChange?: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  value?: string;
  className?: string;
  defaultValue?: string;
  placeholder?: string;
  required?: boolean;
  icon?: JSX.Element;
  style?: CSSProperties;
}

export interface ApiResponse {
  apiCount: number;
  apis: Array<AnalyticsType>;
  message: string;
  status: string;
  success: boolean;
}

export interface UserResponse {
  data: UserData;
  message: string;
  status: string;
  success: boolean;
}

interface UserData {
  userCount: number;
  users: Array<UserType>;
}

export interface ContactResponse {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  org_name: string;
  phone_call: string;
  message: string;
  goal: string;
  createdOn: string;
}
