import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import  { useEffect, useState } from "react";
const createUserAuth = async(data) => {
  //console.log(data,"createUserAuth")
  const {email, password} =data
  var returnData =
  await createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    return userCredential
   // const user = userCredential.user;
   // const returnData = user.toJSON()
   
    // ...
  })
  .catch((error) => {
        const errorCode = error.code;
    const errorMessage = error.message;
    return error
    // ..
  });
  console.log(returnData)
  return returnData
}

export default createUserAuth
