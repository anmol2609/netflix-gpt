import React, { Fragment, useRef, useState } from "react";
import Header from "./Header";
import checkValidation from "../utils/validate";
import createUserAuth from "../utils/createUserAuth";
import checkUserAuth from "../utils/checkUserAuth";
import { auth } from "../utils/firebase";
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
const Login = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const dispatch = useDispatch()
  const fullName = useRef();
  const email = useRef();
  const password = useRef();
  const handleClick = async () => {
    const data = isLoginForm
      ? {
          email: email?.current?.value,
          password: password?.current?.value,
        }
      : {
          fullName: fullName?.current?.value,
          email: email?.current?.value,
          password: password?.current?.value,
        };
    const msg = checkValidation(data);
    setErrorMsg(msg)
    if(!msg){
     if(isLoginForm) {
      const {email,password} = data
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        setErrorMsg("user sign in")
        
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMsg(errorMessage)
      });
      
      
     }else{
      const {fullName,email,password} = data
      createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            updateProfile(user, {
              displayName: fullName, photoURL: "https://avatars.githubusercontent.com/u/36831057?v=4"
            }).then(() => {
              const {uid,email,displayName,photoURL} = auth.currentUser
              dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
              // Profile updated!
              // ...
            }).catch((error) => {
              setErrorMsg(error)
            });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMsg(errorMessage)
            // ..
          });
     }

    }
    
    
  };
  return (
    <div className="w-full fixed">
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" relative  bg-black w-1/4 m-auto p-12 right-0 left-0 top-40 bg-opacity-80"
      >
        <h1 className="font-bold text-2xl  text-white">
          {isLoginForm ? "Sign Inup" : "Sign Upwwa"}
        </h1>
        {!isLoginForm ? (
          <input
            ref={fullName}
            type="text"
            placeholder="Full Name"
            className="mt-4 p-2 w-full bg-gery bg-opacity-80 rounded-md"
          />
        ) : null}
       
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="mt-4 p-2 w-full bg-gery bg-opacity-80 rounded-md"
        />
       
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="mt-4 p-2  w-full bg-gery bg-opacity-80 rounded-md"
        />
       
        <button
          className="mt-4 p-2  bg-netflix-logo-color text-white  w-full rounded-md cursor-pointer"
          onClick={handleClick}
        >
          {!isLoginForm ? "Sign Up" : "Sign In"}
        </button>
        {errorMsg ? <p
          className="font-bold text-netflix-logo-color p-2 cursor-pointer"
        >
{errorMsg}
        </p>: ""}
        <p
          className="font-bold text-white p-2 cursor-pointer"
          onClick={() => setIsLoginForm(!isLoginForm)}
        >
          {isLoginForm ? "If you are new ? Sign Up" : "Already user ? Sign in"}
        </p>
      </form>
    </div>
  );
};

export default Login;
