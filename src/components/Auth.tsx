import React from "react";
import Cookies from "universal-cookie";
import { Outlet, Navigate } from "react-router-dom";

const Auth = () => {
    const cookies = new Cookies();
    const token = cookies.get("admin-token");

  return token ? <Outlet /> : <Navigate to="/" />
}

export default Auth