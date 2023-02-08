import React from "react";
import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../hooks";
import { logout } from "../../store/slices/auth";
import { zapi } from "../../assets";
import { Button } from "..";

const Navbar = () => {
  const { user, isLoggedIn } = useAppSelector(store => store.auth);
  const dispatch = useAppDispatch();

  const splitName = (name: string | undefined) => {
    if(name) {
      const splitString = name.split(" ")
      return splitString[1]
    } else return
  }

  return (
    <div className="w-full flex items-center justify-between py-6 px-8 bg-primary">
      <Link to="/" className="flex items-center gap-2">
        <img src={zapi} alt="" className="w-[30px]" />
        <p className="font-extrabold text-2xl text-white">ZAPI Admin</p>
      </Link>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-4 py-2 px-2 bg-secondary rounded cursor-pointer">
          <div className="w-7 h-7 rounded-full bg-white">
            {user?.picture ? (
              <img src={user?.picture} alt="" className="w-full h-full rounded-full object-contain" />
            ):(
              <div className="w-full h-full rounded-full flex items-center justify-center">
                {user?.fullName.substring(0, 1)}
              </div>
            )}
          </div>
          <p className="font-bold text-xl text-primary leading-5">
            {splitName(user?.fullName)}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Navbar