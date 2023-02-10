import React, { FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useAppDispatch, useFormInputs, useHttpRequest } from "../hooks";
import { Button, InputField, Spinner } from "../components";
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
    const data = await sendRequest(`/auth/signin`, "post", "VITE_IDENTITY_URL", JSON.stringify(payload), headers);
    if(!data || data === undefined) return;
    console.log(data);
  };

  useEffect(() => {
    error && toast.error(`${error}`)
  },[error]);

  return (
    <div className="w-screen h-screen flex flex-col-reverse md:flex-row items-center">
      <div className="w-full md:w-[40%] h-full bg-white p-4 flex flex-col py-8 px-10 md:px-20">
        <div className="flex items-center gap-2 mb-8">
          <img src={zapi} alt="" className="w-[30px]" />
          <p className="font-extrabold text-2xl text-primary">ZAPI Admin</p>
        </div>
        <div className="flex flex-col my-10">
          <p className="font-bold text-3xl text-primary capitalize">hi, welcome back</p>
          <p className="font-bold text-sm text-gray-500">Sign in to your admin account</p>
        </div>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <InputField label="Email" name="email" type="email" {...bind} required />
          <InputField label="Password" name="password" type="password" {...bind} required />
          <Button label={loading ? <Spinner size="small" thickness="thin" color="#FFF" /> : "Login"} type="submit" />
        </form>
      </div>
      <div className="w-full md:w-[60%] h-[200px] md:h-full bg-primary py-8 px-10 md:px-20 flex flex-col">
        <p className="font-extrabold text-4xl text-white capitalize">zapi admin</p>
      </div>
    </div>
  )
};

export default Login;