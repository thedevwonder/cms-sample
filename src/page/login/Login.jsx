import { signInAnonymously } from "firebase/auth";
import React, { useState } from "react";
import auth from "../../auth.firebase";

const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const signInUser = () => {
    signInAnonymously(auth)
      .then(() => {
        console.log("sign in successful");
        setIsSignedIn(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, "sign in failed");
      });
  };
  return (
    <>
      <button onClick={signInUser}>Sign In</button>
    </>
  );
};

export default Login;
