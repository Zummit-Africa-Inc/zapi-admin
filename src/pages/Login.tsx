import React, { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useFormInputs, useHttpRequest } from "../hooks";
import { Button, InputField } from "../components";
import { login } from "../store/slices/auth";
import { zapi } from "../assets"

const initialState = { email: "", password: "" }

const Login = () => {
  const {error, loading, sendRequest} = useHttpRequest();
  const {bind, inputs} = useFormInputs(initialState);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {email, password} = inputs;

  const handleSubmit = async(e: FormEvent) => {
    e.preventDefault()
    const headers = {
      'Content-Type': "application/json",
    };
    const payload = {email, password};
    const data = await sendRequest(`/`, "post", "VITE_IDENTITY_URL", JSON.stringify(payload), headers);
    if(!data || data === undefined) return;
    console.log(data);
  }

  return (
    <div className="w-screen h-screen flex flex-col-reverse md:flex-row items-center">
      <div className="w-full md:w-[40%] h-full bg-white p-4 flex flex-col items-center justify-center">
        <p className="font-bold text-3xl text-primary my-8">ZAPI Admin</p>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 px-8">
          <InputField name="email" type="email" {...bind} required />
          <InputField name="password" type="password" {...bind} required />
          <Button label="Login" type="submit" />
        </form>
      </div>
      <div className="w-full md:w-[60%] h-full bg-primary p-20 flex flex-col items-center justify-center">
        <p className="font-bolder text-6xl text-white leading-6 uppercase">zapi admin</p>
        <div className="my-8">
          <img src={zapi} alt=""className="w-[300px]" />
        </div>
      </div>
    </div>
  )
}

export default Login