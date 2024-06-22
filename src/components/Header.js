import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
        // An error happened.
      });
  };
  return (
    <div className="absolute bg-gradient-to-b from-black z-10 w-full ">
      <div className="m-auto w-4/5 flex justify-between">
        <img
          className=" w-36 h-16"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
        {user&&
          <button
            onClick={handleSignOut}
            className=" bg-netflix-logo-color m-4 pr-2 pl-2 text-white font-bold"
          >
            Sign Out
          </button>
        }
      </div>
    </div>
  );
};

export default Header;
