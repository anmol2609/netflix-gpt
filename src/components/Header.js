import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch,useSelector } from 'react-redux'
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constant";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const user = useSelector((store) => store.user);
  useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth,(user)=>{
        if(user){
            const {uid,email,displayName,photoURL} = user
            dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
            navigate('/browse')
          }else{
            dispatch(removeUser())
            navigate("/");
        }
    })
    return () => unsubscribe();
},[])
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
          src={LOGO}
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
