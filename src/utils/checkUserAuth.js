import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const checkUserAuth = (data) => {
    const {email,password} = data
   const auth = getAuth();
   // console.log(data,"checkUserAuth")
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
}

export default checkUserAuth
